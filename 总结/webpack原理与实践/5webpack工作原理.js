工作过程：
1，Webpack CLI 启动打包流程；
2，载入 Webpack 核心模块，创建 Compiler 对象；
3，使用 Compiler 对象开始编译整个项目；
4，从入口文件开始，解析模块依赖，形成依赖关系树；
5，递归依赖树，将每个模块交给对应的 Loader 处理；
6，合并 Loader 处理完的结果，将打包结果输出到 dist 目录。