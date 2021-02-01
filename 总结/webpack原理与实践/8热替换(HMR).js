webpack - dev - server 修改代码后自动刷新会面临编辑器内容丢失的问题。

开启HMR的步骤
1，在运行 webpack - dev - server 命令时，通过--hot 参数去开启这个特性
2，或者添加配置来开启这个功能
（1）首先需要将 devServer 对象中的 hot 属性设置为 true；
（2）然后需要载入一个插件，这个插件是 webpack 内置的一个插件，所以我们先导入 webpack 模块，有了这个模块过后，
这里使用的是一个叫作 HotModuleReplacementPlugin 的插件。

一些问题：
Q1：可能你会问，为什么我们开启 HMR 过后，样式文件的修改就可以直接热更新呢？我们好像也没有手动处理样式模块的更新啊？

A1：这是因为样式文件是经过 Loader 处理的，在 style - loader 中就已经自动处理了样式文件的热更新，
所以就不需要我们额外手动去处理了。

Q2：那你可能会想，凭什么样式就可以自动处理，而我们的脚本就需要自己手动处理呢？

A2：这个原因也很简单，因为样式模块更新过后，只需要把更新后的 CSS 及时替换到页面中，它就可以覆盖掉之前的样式，从而实现更新。

而我们所编写的 JavaScript 模块是没有任何规律的，你可能导出的是一个对象，也可能导出的是一个字符串，还可能导出的是一个函数，
使用时也各不相同。所以 Webpack 面对这些毫无规律的 JS 模块，根本不知道该怎么处理更新后的模块，也就无法直接实现一个可以通用
所有情况的模块替换方案。那这就是为什么样式文件可以直接热更新，而 JS 文件更新后页面还是回退到自动刷新的原因。

Q3：那可能还有一些平时使用 vue - cli 或者 create - react - app 这种框架脚手架工具的人会说，“我的项目就没有手动处理，JavaScript
代码照样可以热替换，也没你说的那么麻烦”。

A3：这是因为你使用的是框架，使用框架开发时，我们项目中的每个文件就有了规律，例如 React 中要求每个模块导出的必须是一个函数或者
类，那这样就可以有通用的替换办法，所以这些工具内部都已经帮你实现了通用的替换操作，自然就不需要手动处理了。

API
利用module.hot.accept   第一个参数接收的就是所监视的依赖模块路径，第二个参数就是依赖模块更新后的处理函数。

editor模块的热替换思路：
1，在module.hot.accept的第二个参数依赖模块更新后的处理函数。该函数中拿到的是更新后的模块。所以我们需要在此函数中需要先移除
原先的元素，然后调用更新后的模块创建新的元素追加到页面中。然后我们还需要将替换时的状态保持下来。要想保留这个状态也很简单，就
是在替换前先拿到编辑器中的内容，然后替换后再放回去就行了。

图片模块热替换思路：
通过 module.hot.accept 注册这个图片模块的热替换处理函数，在这个函数中，我们只需要重新给图片元素的 src 设置更新后的图片路径
就可以了。


我们在代码中写了很多与业务功能本身无关的代码，会不会对生产环境有影响？

不会的。打包后会将我们编写的处理热替换的代码都移除掉。
