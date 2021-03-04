提高webpack的构建速度：
1，多入口情况下，使用CommonsChunkPlugin来提取公共代码
2，通过externals配置来提取常用库（如果我们想引用一个库，但是又不想让webpack打包，并且又不影响我们在程序中以CMD、AMD或者window / global全局等方式进行使用，
那就可以通过配置externals。这个功能主要是用在创建一个库的时候用的，但是也可以在我们项目开发中充分使用。）
3，利用DllPlugin和DllReferencePlugin预编译资源模块 通过DllPlugin来对那些我们引用但是绝对不会修改的npm包来进行预编译，
再通过DllReferencePlugin将预编译的模块加载进来。
4，使用Happypack 实现多线程加速编译
5，使用webpack - uglify - parallel来提升uglifyPlugin的压缩速度。 原理上webpack - uglify - parallel采用了多核并行压缩来提升压缩速度
6，使用Tree - shaking（生产模式下会自动添加）来剔除多余代码


优化打包结果：
1，按需加载
2，tree - shaking(生产模式下会自动添加）来剔除多余代码
