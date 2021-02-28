教育部门
一面：
实现一个Sum函数 sum(1, 2, 3) //6， sum(1)(2,3)  // 6 
一个字符串不重复的最长子序列
vue3.0 有什么值得注意的地方(不要求讲API)
requestAnimationFrame 的实现机制，以及需要注意的地方
告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画
requestAnimationFrame的调用时间则是跟着系统的刷新频率走的
requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。
RequestAnimationFrame相对于setTimeout的优点:
1，使得动画更加流畅，防止动画失帧情况；
2, CPU节能：使用setTimeout实现的动画，当页面被隐藏或最小化时，setTimeout 仍然在后台执行动画任务，由于此时页面处于不可见或不可用状态，刷新动画是没有意义的，
完全是浪费CPU资源。而requestAnimationFrame则完全不同，当页面处理未激活的状态下，该页面的屏幕刷新任务也会被系统暂停，因此跟着系统步伐走的requestAnimationFrame也会
停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了CPU开销。
3，函数节流：保证每个刷新间隔内，函数只被执行一次
注意点：需要做兼容的处理

另外一个 浏览器空闲执行的是什么？
服务器推送有哪些
1，短连接轮询，前端用定时器，每间隔一段时间发送请求来获取数据是否更新
缺点：页面会出现假死，也会有无谓的网络传输
2，长轮询：
客户端像传统轮询一样从服务端请求数据，服务端会阻塞请求不会立刻返回，直到有数据或超时才返回给客户端，然后关闭连接，客户端处理完响应信息后再向服务器发送新的请求。
缺点：保持连接会消耗资源
3，websocket，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，适合聊天室场景。
具体连接方式：
通过在请求头中增加 upgrade：websocket 及通信密钥（Sec-WebSocket-Key），使双方握手成功，建立全双工通信。
4，Server-sent Events（sse）
客户端发送一个请求，服务端保持这个连接直到有新消息发送回客户端，仍然保持着连接，
这样连接就可以消息的再次发送，由服务器单向发送给客户端。（只适用于高级浏览器，ie不支持）

目前服务端给客户端推送，普遍做法是客户端与服务端维持一个长连接，客户端定时向服务端发送心跳以维持这个长连接。
当有新消息过来的时候，服务端查出该消息对应的TCP Channel的ID并找到对应的通道进行消息下发。
推送产品：国外如 Urban Airship, Parse等, 国内有JPush，百度云推送，信鸽，LeanCloud等

二面：
讲一下https + 注意点
前端优化 + 缓存 + 渲染优化
前端有哪些动画的实现机制
transform:translate(1px,1px),rotate   transition 简单的动画,一般定义开始，结束两个状态，需要有触发的条件
transform是转换，后面可以跟很多函数来改变，例如translate（位移），transform没有动画效果
transition是 过渡，指的是某个CSS属性值如何平滑的进行改变，就是平常说的 动效。  
transition: transform 2s ease .5s;（两者可以配合实现动画）
animation:mymove 5s infinite; 后者有关键帧，速度曲线，播放次数等概念，更符合动画定义，且无需触发条件



canvas 有哪些应用场景？
通过js来绘制2d图形（依赖分辨率）
1，绘制图表 2，开发网页游戏（运用Canvas制作的图像能够令HTML5游戏在流畅度和跨平台方面发挥更大的潜力，特别是跨平台的能力，是Flash和端游没法比的）
3，模拟仿真类产品   4，网页中内嵌的图表、音频、视频，还有许多富媒体元素不再需要任何类似Flash的插件。
svg的话：使用 XML 描述 2D 图形的语言（不依赖分辨率） 
1，高保真度复杂矢量文档 适用于查看和打印，可以是独立的，也可以嵌入到网页中
2，web项目中的平面图绘制，动画绘制


请实现如下的函数，可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，需要执行 callback 回掉函数。发请求的函数可以直接使用 fetch 即可function sendRequet(urls: string[], max: number, callback: () => void) { }
硬币找零问题：有面额为d1...dn的硬币，和要找零的钱数，找出所需最小硬币个数的方案，例如，美国有以下面额(硬币）：d1 = 1, d2 = 5, d3 = 10, d4 = 25，如果要找36美分的零钱，所需最少硬币是[1, 10, 25]

三面：
  项目问题
你觉得你的项目有什么优化的地方
检测性能的api + 首屏时间的获取
上传大文件怎么上传？
  大文件上传到一半，电脑关掉了，怎么重新上传
重新上传的时候，怎么知道这个就是之前上传的文件
xss csrf
vuex 原理，应用场景
vue2 / 3.0响应式原理
有在关注什么新的技术方案
给定一个数组加数字n，求加和大于等于n的最短连续子数组的长度[5, 7, 3, 4, 8, 2, 9, 1, 6]，5
怎么实现点对点通讯？
 比如 裸光纤 SDH VPN 传输网点对点 等 都可以实现

  淘系一面
介绍以前的项目、项目遇到的问题
请讲一讲浏览器缓存
现代项目是怎么利用缓存的？
  webpack 打包的过程以及原理
commonjs 和 import 的区别
  1，require是commonjs的规范，在node中实现的api，import是es的语法，
  2，commonjs导出的值会复制一份，require引入的是复制之后的值（引用类型只复制引用），
  es module导出的值是同一份（不包括export default），不管是基础类型还是应用类型。
  3，写法区别
    const fs = require('fs')
    exports.fs = fs
    module.exports = fs
babel 的原理
项目是怎么发布上去的
当项目的用户很多的时候，怎么监控 错误？
采集、处理、分析、报警
通过监听全局的 window.onerror 事件捕获到运行时错误，然后上报到采集端，再做一个页面展示数据
https://zhuanlan.zhihu.com/p/32262716
还有什么要问的

菜鸟一面
vue数据绑定原理
react hook 的优势
vue3.0 的绑定和 vue2.0 的区别
提高用户体验，渲染速度等，从各方面来讲
有什么技术沉淀
最有成绩感的项目

蚂蚁一面
你做过得项目，以及担任的角色
浏览器输入网址之后，发生了什么？
有哪些跨域的方法
js 的事件循环
你知道哪些排序方法，时间复杂度分别是多少
冒泡排序： O(n2)   快速排序O(nlogn)   插入排序 O(n2) 二分查找 o(logn)
二叉树遍历 O(n) 归并排序 O(nlogn)    计数排序 O(n+k) 
树的遍历方式知道吗？  递归，—其他的呢？
前序遍历：先根节点，然后左子树，然后右子树
中序遍历：先左子树，再根结点，再右子树
后序遍历：先左子树再右子树，最后根节点
setTimeout 和 promise 的参数那个先执行
catch 和 then 的 第二个参数有什么区别
主要区别就是，如果在then的第一个函数里抛出了异常，后面的catch能捕获到，而then的第二个函数捕获不到。
react 的生命周期
react 的 key、diff
react 函数式组件 怎么模拟 shouldUpdate ?
  Redux 用过吗
react结合 redux 有什么好的 提高性能的方法





