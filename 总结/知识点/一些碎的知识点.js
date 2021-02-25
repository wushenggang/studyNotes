es6模块化加载和commonJS模块化加载的区别：
1，Commonjs的模块是运行时加载，而且加载的是整个模块
2，es6是编译时加载，而且是需要啥加载啥，不是加载的整个模块

npx的作用：让项目内部安装的模块用起来更方便，npx 会自动查找当前依赖包中的可执行文件，如果找不到，就会去 PATH 里找。如果依然找不到，就会帮你安装！（在更新npm5.2.0的时候会自动安装npx）

substring(start, stop)  stop: 比要提取的子串的最后一个字符在 stringObject 中的位置多 1。 substr(start, length) slice
toDoList
1, package - lock.json
package.json中的~与 ^ ~会更新到中间那位数数字的最新版本 ^ 会安装到第一位数字的最新版本
package - lock.json 会用来锁版本。当别人拉了你的代码的话。保证下载下来的npm包版本是相同的。cnpm install 会忽略package - lock.json

2, 了解微前端
3，nextTick  keep - alive
rem
vue中的key
key提高效率原因: 不加key的情况下，Diff中做的处理。在同一层级的A, B, C元素中A, B位置间添加一个D元素的话，会将B更新成D，C更新成B，然后再插入C。如果加了Key，就给每一个节点加了唯一标识，
Diff算法就可以正确的识别此节点，找到正确的位置区插入新的节点。提高了效率
1，为什么不能用index作为key:
如果你用 index 作为 key，那么在删除第二项的时候，index 就会从 1 2 3 变成 1 2（因为 index 永远都是连续的，所以不可能是 1 3），那么 Vue 依然会认为你删除的是第三项。


flex
WebSocket: 服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，适合聊天室场景。
Promise
如何实现懒加载

关于vue的一些面试题：https://blog.csdn.net/weixin_42554191/article/details/104830168