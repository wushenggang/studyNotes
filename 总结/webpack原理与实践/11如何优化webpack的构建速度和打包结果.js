提高webpack的构建速度：
1，多入口情况下，使用CommonsChunkPlugin（3，4的话用splitChunks）来提取公共代码
2，通过externals配置来提取常用库, 引用cdn（如果我们想引用一个库，但是又不想让webpack打包，并且又不影响我们在程序中以CMD、
AMD或者window / global全局等方式进行使用，那就可以通过配置externals）
3，利用DllPlugin和DllReferencePlugin预编译资源模块 通过DllPlugin来对那些我们引用但是绝对不会修改的npm包来进行预编译，
再通过DllReferencePlugin将预编译的模块加载进来。
4，使用Happypack 实现多线程加速编译
5，使用Tree - shaking（生产模式下会自动添加）来剔除多余代码
6, 配置loader时，我们可以通过exclude设置哪些目录下的文件不进行处理，通过include精确指定只处理哪些目录下的文件，以此来缩小处理范围，加快构建速度。
// 7, 使用webpack - uglify - parallel来提升uglifyPlugin的压缩速度。 原理上webpack - uglify - parallel采用了多核并行压缩来提升压缩速度

说到这里webpack4取消了UglifyjsWebpackPlugin，使用minimize进行压缩，取消了CommonsChunkPlugin，使用splitChunks进行分包。

优化打包结果：
1，按需加载(路由懒加载)
2，tree - shaking(生产模式下会自动添加）来剔除多余代码
  (当我们不在使用production模式进行打包，可以自己配置
  在配置对象中添加一个 optimization 属性，在 optimization 对象中我们可以先开启一个 usedExports 选项，表示在输出结果中只导出外部使用了的成员。
  optimization 配置中开启 minimize：true。 可以开启压缩代码的功能，并且自动压缩掉这些没有用到的代码。)
