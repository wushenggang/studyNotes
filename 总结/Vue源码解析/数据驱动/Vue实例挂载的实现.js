2:

compiler 版本的 $mount 实现非常有意思，先来看一下 src / platform / web / entry - runtime -with-compiler.js 文件中定义：

这段代码首先缓存了原型上的 $mount 方法，再重新定义该方法，首先，它对el做了限制，Vue不能挂载在body，html这样的根节点上。如果没有定义 render 方法，
则会把 el 或者 template 字符串转换成 render 方法（它是调用 compileToFunctions 方法实现的）。最后，调用原先原型上的 $mount 方法挂载。（之所以这么设计完全是为了复用，因为它是可以被 runtime only 版本的 Vue 直接使用的）
$mount 方法支持传入 2 个参数，第一个是 el，它表示挂载的元素，可以是字符串，也可以是 DOM 对象，如果是字符串在浏览器环境下会调用 query 方法转换成 DOM 对象的。
第二个参数是和服务端渲染相关，在浏览器环境下我们不需要传第二个参数。$mount 方法实际上会去调用 mountComponent 方法。mountComponent 核心就是先实例化一个渲染Watcher，
在它的回调函数中会调用 updateComponent 方法，在此方法中调用 vm._render 方法先生成虚拟 Node，最终调用 vm._update 更新 DOM。
函数最后判断为根节点的时候设置 vm._isMounted 为 true， 表示这个实例已经挂载了，同时执行 mounted 钩子函数。 这里注意 vm.$vnode 表示 Vue 实例的父虚拟 Node，所以它为 Null 则表示当前是根 Vue 的实例。



