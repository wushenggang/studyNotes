开发一个loader:
创建一个loader文件，此文件需要导出一个函数，这个函数就是我们这个 Loader 对资源的处理过程，它的输入就是加载到的资源文件内容，输出就是我们加工后的结果。输出的内容必须是一段JS代码。
不然webpack打包后无法解析。(也可以返回别的形式类似于HTML，再交给下一个html - Loader处理，这就涉及到多个loader相互配合工作的情况了。)
完成以后，我们回到 Webpack 配置文件中添加一个加载器规则（use 中不仅可以使用模块名称，还可以使用模块文件路径）。


loader是在加载过程中，拿到源文件内容，再进行一些处理，最后转化成js代码。

// ./markdown-loader.js

const marked = require('marked')



module.exports = source => {

  const html = marked(source)

  // const code = `module.exports = ${JSON.stringify(html)}`

  const code = `export default ${JSON.stringify(html)}`

  return code

}
