常用的一些插件：html - webpack - plugin，生成html文件并把资源注入。
CleanWebpackPlugin：删除上次打包后的结果
copy - webpack - plugin：用于复制文件的插件(把这类文件(一些不需要参与构建的静态文件)统一放在项目根目录下的 public 或者 static 目录中，
  我们希望 Webpack 在打包时一并将这个目录下所有的文件复制到输出目录。)
Mini CSS Extract Plugin: 样式被提取到单独的css文件中（如果你的 CSS 体积不是很大的话，提取到单个文件中，效果可能适得其反，因为单独的文件就需要单独请求一次）
// CommonsChunkPlugin: 用来提取第三方库和公共模块


插件都是通过往 Webpack 生命周期的钩子中挂载任务函数实现的。

相比于 Loader，插件的能力范围更宽，因为 Loader 只是在模块的加载环节工作，而插件的作用范围几乎可以触及 Webpack 工作的每一个环节。

Webpack 要求我们的插件必须是一个函数或者是一个包含 apply 方法的对象，一般我们都会定义一个类型，在这个类型中定义 apply 方法。
然后在使用时，再通过这个类型来创建一个实例对象去使用这个插件。(因为apply方法会在webpack启动时被调用，它接收一个 compiler 对象参数，
这个对象是 Webpack 工作过程中最核心的对象，里面包含了我们此次构建的所有配置信息，我们就是通过这个对象去注册钩子函数)

比如emit钩子：这个钩子会在 Webpack 即将向输出目录输出文件时执行


// ./remove-comments-plugin.js

class RemoveCommentsPlugin {

  apply(compiler) {

    compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {

      // compilation => 可以理解为此次打包的上下文

      for (const name in compilation.assets) {

        console.log(name) // 输出文件名称

      }

    })

  }

}


一个问题：
plugin能完成loader的功能吗？

loader是在加载过程中，拿到源文件内容，再进行一些处理，最后转化成js代码。plugin也能够在合适的时机拿到源文件内容，并通过一些操作，最后覆盖源文件。
所以理论上是可以的。但是这种方式太麻烦，并不符合 Webpack 的设计

