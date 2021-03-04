code splitting(分块打包) ：把打包的结果按照一定的规则分离到多个 bundle 中，然后根据应用的运行需要按需加载

Webpack 实现分包的方式主要有两种：
根据业务不同配置多个打包入口，输出多个打包结果；
结合 ES Modules 的动态导入（Dynamic Imports）特性，按需加载模块。

多入口打包：
最常见的划分规则就是一个页面对应一个打包入口，对于不同页面间公用的部分，再提取到公共的结果中。
// entry定义成一个对象，配置多个入口。输出名称可以使用[name] 这种占位符来输出动态的文件名，[name] 最终会被替换为入口的名称。
// 除此之外，在配置中还通过 html - webpack - plugin 分别为 index 和 album 页面生成了对应的 HTML 文件。还需要提取公共模块。只
// 需要在优化配置(optimization)中开启splitChunks功能就可以了
// optimization: {
//   splitChunks: {
//     // 自动提取所有公共模块到单独 bundle
//     chunks: 'all'
//   }
// }

动态导入：
可以将 import 关键字作为函数调用。当以这种方式使用时，import 函数返回一个 Promise 对象。
import('./album/album').then(({ default: album }) => {
  mainElement.appendChild(album())
})
项目中路由映射的组件就可以通过这种动态导入的方式实现按需加载，从而实现分包。

魔法注释：就是在 import 函数的形式参数位置，添加一个行内注释，这个注释有一个特定的格式：webpackChunkName: ''，
这样就可以给分包的 chunk 起名字了。