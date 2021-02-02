Tree Shaking：去掉未引用的代码
Webpack 生产模式打包的优化过程中，就使用自动开启这个功能，以此来检测我们代码中的未引用代码，然后自动移除它们。
Tree - shaking 并不是指 Webpack 中的某一个配置选项，而是一组功能搭配使用过后实现的效果。

当我们不在使用production模式进行打包，可以自己配置
在配置对象中添加一个 optimization 属性，在 optimization 对象中我们可以先开启一个 usedExports 选项，表示在输出结果中只导出外部使用了的成员。
optimization 配置中开启 minimize：true。 可以开启压缩代码的功能，并且自动压缩掉这些没有用到的代码。
concatenateModules 配置的作用就是尽可能将所有模块合并到一起输出到一个函数中，这样既提升了运行效率，又减少了代码的体积。

Webpack 4 中新增了一个 sideEffects 特性，它允许我们通过配置标识我们的代码是否有副作用，从而提供更大的压缩空间。