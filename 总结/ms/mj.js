教育部门
一面：
实现一个Sum函数 sum(1, 2, 3) //6， sum(1)(2,3)  // 6 
let sumT = (arg) => {
  let y = arg
  return (arg1, arg2) => {
    y += arg1 + arg2
    return y
  }
}

let sumT = arg => (arg1, arg2) => arg += arg1 + arg2
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
开发者不知道浏览器什么时候空闲，所以要依靠浏览器提供的requestIdleCallbackAPI来实现任务的调度。 它的原理是让浏览器在空闲的时候执行回调函数，
而且在回调函数中通过参数告知预计还剩多少空闲时间。我们可以根据剩余的空闲时间来合理安排执行的任务量，确保不会影响其他高优先级任务的执行。
场景：上报分析数据。比如用户轻触的时候，需要将该事件上报。为了不影响轻触之后动画的流畅性，可以使用requestIdleCallback实现。

用法很简单：

服务器推送有哪些
1，短连接轮询，前端用定时器，每间隔一段时间发送请求来获取数据是否更新
缺点：页面会出现假死，也会有无谓的网络传输
2，长轮询：
客户端像传统轮询一样从服务端请求数据，服务端会阻塞请求不会立刻返回，直到有数据或超时才返回给客户端，然后关闭连接，客户端处理完响应信息后再向服务器发送新的请求。
缺点：保持连接会消耗资源
3，websocket，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，适合聊天室场景。
具体连接方式：
通过在请求头中增加 upgrade：websocket 及通信密钥（Sec - WebSocket - Key），使双方握手成功，建立全双工通信。
4，Server - sent Events（sse）
客户端发送一个请求，服务端保持这个连接直到有新消息发送回客户端，仍然保持着连接，
这样连接就可以消息的再次发送，由服务器单向发送给客户端。（只适用于高级浏览器，ie不支持）

目前服务端给客户端推送，普遍做法是客户端与服务端维持一个长连接，客户端定时向服务端发送心跳以维持这个长连接。
当有新消息过来的时候，服务端查出该消息对应的TCP Channel的ID并找到对应的通道进行消息下发。
推送产品：国外如 Urban Airship, Parse等, 国内有JPush，百度云推送，信鸽，LeanCloud等

二面：
讲一下https + 注意点
因为http传输是明文传输的，所以不安全，容易被黑客窃听或篡改。所以产生了https。http的传输层是TCP / IP,
  https的传输层是ssl / tls。首先需要通过加密算法把明文传输改为密文传输。首先先讲一下对称加密，
对称加密只使用一个密钥，运算速度快，无法做到安全的密钥交换。然后是非对称加密，
非对称加密使用两个密钥：公钥和私钥，公钥可以任意分发而私钥保密，解决了密钥交换问题但速度慢。
根据这些特点，TLS采用的是混合加密，用非对称加密，加密对称加密的私钥，然后再使用对称加密。现在实现了
保密性，我们还需要实现完整性，通过摘要算法来实现，它能够把任意长度的数据“压缩”成固定长度、而且独一无
二的“摘要”字符串，将它上传服务器后，服务器也会计算一下消息的摘要，进行对比。相同的话代表数据完整。
然后我们还需要通过数字签名来进行身份认证和不可否认，数字签名是私钥对摘要的加密，可以由公钥解密后验证。
最后还有个公钥的信任问题，因为谁都可以发布公钥，所以要找一个公认可信的第三方也就是CA来颁布数字证书。

CA 怎么证明自己呢？
顺着证书链（Certificate Chain）一层层地验证，直到找到根证书，操作系统和浏览器都内置了各大 CA 的
根证书



前端优化 + 缓存 + 渲染优化
提升首页加载速度：
1，路由懒加载 2，打包文件去掉map文件 3，很多第三方库可以按需引用。如果不能按需引用，可以采用cdn外部加载
4, 图片懒加载  5，减少关键资源的数量和大小（删除不必要的注释和GZIP压缩） 6，通过给script标记async或者defer来异步加载js文件
7，利用服务端ssr(有利于SEO和首屏渲染)和预渲染   前者是服务端将页面给浏览器，后者是直接构建出页面给浏览器

提升页面的性能：
1，尽量减少页面的重排（回流）
方法：1，避免使用table布局 2，可以用position: absolute使脱离文档流 3，避免频繁操作样式，可以一次性重写style属性，或者将样式列表定义为 class 并一次性更改 class 属性。
4，避免频繁操作 DOM，创建一个 documentFragment（文档片段），在它上面应用所有 DOM 操作，最后再把它添加到文档中。

2，扁平化 Store 数据结构
3，利用Object.freeze()提升性能，冻结一个对象，不会为对象加上 setter getter 等数据劫持的方法
4，事件委托 5，输入搜索时，可以用防抖debounce等优化方式，减少http请求。9，滚动条调用接口时（或者提交表单），可以用节流throttle等优化方式，减少http请求；
6，使用Web Workers（主线程之外的线程，但web workers中没有DOM，CSSOM环境，所以无法操作DOM，可以将一些和DOM操作无关且费时的任务放入进行执行）
主线程采用new命令，调用Worker('work.js')构造函数，新建一个 Worker 线程，主线程调用worker.postMessage()方法，向 Worker 发消息，主线程通过worker.onmessage指定监听函数。
Worker 线程内部需要有一个监听函数，监听message事件
7，为item设置唯一key值
8，细分vue组件
9，减少watch的数据
10，事件的销毁  ，需要在组件销毁时手动移除一些事件监听，以免内存泄漏，类似addEventListener。需要remove
// 7，合理利用CSS合成动画, 是直接在合成线程上执行的



前端有哪些动画的实现机制
transform: translate(1px, 1px), rotate   transition 简单的动画, 一般定义开始，结束两个状态，需要有触发的条件
transform是转换，后面可以跟很多函数来改变，例如translate（位移），transform没有动画效果
transition是 过渡，指的是某个CSS属性值如何平滑的进行改变，就是平常说的 动效。
transition: transform 2s ease .5s; （两者可以配合实现动画）
animation: mymove 5s infinite; 后者有关键帧，速度曲线，播放次数等概念，更符合动画定义，且无需触发条件



canvas 有哪些应用场景？
通过js来绘制2d图形（依赖分辨率）
1，绘制图表 2，开发网页游戏（运用Canvas制作的图像能够令HTML5游戏在流畅度和跨平台方面发挥更大的潜力，特别是跨平台的能力，是Flash和端游没法比的）
3，模拟仿真类产品   4，网页中内嵌的图表、音频、视频，还有许多富媒体元素不再需要任何类似Flash的插件。
svg的话：使用 XML 描述 2D 图形的语言（不依赖分辨率）
1，高保真度复杂矢量文档 适用于查看和打印，可以是独立的，也可以嵌入到网页中
2，web项目中的平面图绘制，动画绘制


请实现如下的函数，可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，需要执行 callback 回掉函数。发请求的函数可以直接使用 fetch 即可function sendRequet(urls: string[], max: number, callback: () => void) { }
function sendRequest(arr, max, callback) {
  let fetchArr = [],  // 存储并发max的promise数组
    i = 0;

  function toFetch() {
    if (i === arr.length) {   // 所有的都处理完了， 返回一个resolve
      return Promise.resolve();
    }

    let one = fetch(arr[i++]); // 取出第i个url， 放入fetch里面 , 每取一次i++
    one.then(() => { fetchArr.splice(fetchArr.indexOf(one), 1) }); // 当promise执行完毕后，从数组删除
    fetchArr.push(one);  //将当前的promise存入并发数组中       其实将这个push放到上一行会更好理解，那样就是我们同步的思维顺序，先push进去，再等promise执行完了之后再删除。  但由于then是异步的，所以怎么放都可以。

    let p = Promise.resolve();
    if (fetchArr.length >= max) {     // 当并行数量达到最大后， 用race比较 第一个完成的， 然后再调用一下函数自身。
      p = Promise.race(fetchArr);
    }
    return p.then(() => toFetch());
  }

  // arr循环完后， 现在fetchArr里面剩下最后max个promise对象， 使用all等待所有的都完成之后执行callback
  toFetch().then(() => Promise.all(fetchArr)).then(() => {
    callback();
  })
}
硬币找零问题：有面额为d1...dn的硬币，和要找零的钱数，找出所需最小硬币个数的方案，例如，美国有以下面额(硬币）：d1 = 1, d2 = 5, d3 = 10, d4 = 25，如果要找36美分的零钱，所需最少硬币是[1, 10, 25]

三面：
  项目问题
你觉得你的项目有什么优化的地方
检测性能的api + 首屏时间的获取

通过window.performance.timing来获取各个时间点
navigationStart: 输入网址按下回车键的时间
fetchStart: 相当于浏览器准备好使用 HTTP 请求获取文档的时间
第一字节时间： t.responseStart - t.navigationStart;
白屏时间：(t.domInteractive || t.domLoading) - t.fetchStart
首屏时间：t.domContentLoadedEventEnd - t.fetchStart;
注意点：通过window.performance.timing所获的的页面渲染所相关的数据，
在SPA应用中改变了url但不刷新页面的情况下是不会更新的。因此仅仅通过该
api是无法获得每一个子路由所对应的页面渲染的时间。

如果需要上报切换路由情况下每一个子页面重新render的时间，需要自定义上报。
navigator.sendBeacon(url, data)方法。这个方法可以用来发送一些统计和诊断的小量数据，特别适合上报统计的场景。
该方法不会阻塞页面卸载流程和延迟后面页面的加载。监听页面unload，在unload时发送请求。
降级方案，通过在unload事件处理器中，通过img.src中在地址后面拼接参数达到目标。
因为绝大多数浏览器会延迟卸载以保证图片的载入，所以数据可以在卸载事件中发送。





上传大文件怎么上传？
文件切片, 编码方式上传中，在前端我们只要先获取文件的二进制内容，然后对其内容进行拆分，最后将每个切片上传到服务端即可。通过slice方法可以对二进制文件进行拆分。
服务器接收到这些切片后，再将他们拼接起来就可以了。

还原切片在后端需要将多个相同文件的切片还原成一个文件，上面这种处理切片的做法存在下面几个问题如何识别多个切片是来自于同一个文件的？
这个可以在每个切片请求上传递一个相同文件的context参数。如何将多个切片还原成一个文件确认所有切片都已上传？这个可以通过客户端在切片全部
上传后调用mkfile接口来通知服务端进行拼接找到同一个context下的所有切片，如何确认每个切片的顺序？这个可以在每个切片上标记一个位置索引值按顺序拼接切片，还原成文件



大文件上传到一半，电脑关掉了，怎么重新上传
断点续传，可以从已经上传部分开始继续上传未完成的部分，而没有必要从头开始上传，节省上传时间。
在切片上传成功后，保存已上传的切片信息
当下次传输相同文件时，遍历切片列表，只选择未上传的切片进行上传
所有切片上传完毕后，再调用mkfile接口通知服务端进行文件合并
如何保存已上传切片的信息：
可以通过locaStorage等方式保存在前端浏览器中，这种方式不依赖于服务端，实现起来也比较方便，缺点在于如果用户清除了本地文件，
会导致上传记录丢失服务端本身知道哪些切片已经上传，因此可以由服务端额外提供一个根据文件context查询已上传切片的接口，在上传文件前调用该文件的历史上传记录


重新上传的时候，怎么知道这个就是之前上传的文件
在切片上传时，可以在每个切片请求上传递一个相同文件的context参数。该参数为文件的唯一标识。
获取方式：
1，根据文件名、文件长度等基本信息进行拼接，为了避免多个用户上传相同的文件，可以再额外拼接用户信息如uid等保证唯一性
2，根据文件的二进制内容计算文件的hash，这样只要文件内容不一样，则标识也会不一样，缺点在于计算量比较大.

  上传进度和暂停
通过xhr.upload中的progress方法可以实现监控每一个切片上传进度。通过xhr.abort可以取消当前未完成上传切片的上传，实现上传暂停的效果
成熟的方案：七牛和腾讯云

xss csrf

xss: XSS 攻击就是黑客往页面中注入恶意脚本，然后将页面的一些重要数据上传到恶意服务器
恶意脚本可以做的事情：
1，可以窃取Cookie信息
2，可以监听用户行为
3，可以修改DOM伪装假的登录窗口
4，可以在页面内生成浮窗广告
XSS攻击的方式：1，存储型XSS攻击 2，反射型XSS攻击 3，基于DOM的XSS攻击
如何阻止XSS攻击：
1，服务器对输入脚本进行过滤或转码
2，充分利用内容安全策略(CSP)需要配置网络服务器返回Content - Security - Policy  HTTP头部，或者前端通过 < meta > 元素来配置
CSP的功能
（1）限制加载其他域下的资源文件
（2）禁止向第三方域提交数据
（3）禁止执行内联脚本和未授权的脚本
（4）还提供了上报机制，可以帮助我们尽快发现有哪些XSS攻击
3，使用HttpOnly属性
可以将某些Cookie设置为HttpOnly标志，HttpOnly是服务器通过Http头来设置的（可以在加在set - cookie属性值里）
使用了HttpOnly标记的Cookie只能使用在Http请求过程中，所以无法通过javascript来读取这段cookie
4，可以通过添加验证码防止脚本冒充用户提交危险操作

CSRF: CSRF 攻击就是黑客利用了用户的登录状态，并通过第三方的站点来做一些坏事。
通常当用户打开了黑客的页面后，有三种方式去实施CSRF攻击
1，自动发起Get请求 2，自动发起post请求 3，引诱用户点击链接
如何防止CSRF攻击：
1，充分利用好Cookie的SameSite属性（Cookie是浏览器和服务器之间维护登陆状态的一个关键数据）
SameSite的功能：
（1）如果是从第三方站点发起的请求，那么需要浏览器禁止发送某些关键 Cookie 数据到服务器；
（2）如果是同一个站点发起的请求，那么就需要保证 Cookie 数据正常发送。
可以通过在http响应头中的set - cookie字段中带上SameSite选项
SameSite选项通常有Strict, Lax, None三个值
Strict（浏览器完全禁止第三方Cookie）
Lax（在跨站点的情况下，从第三方站点的链接打开和从第三方站点提交 Get 方式的表单这两种方式都会携带 Cookie。但如果在第三方站点中使用 Post 方法，或者通过 img、iframe 等标签加载的 URL，这些场景都不会携带 Cookie。）
None 任何情况下都会发送Cookie数据
2，在服务器端验证请求的来源站点（根据http请求头中的Origin和Referer属性，优先判断Origin属性）
3，CSRF Token



vuex 原理，应用场景
1，vuex的store是如何挂载注入到组件中呢？
首先利用vue的插件机制，使用Vue.use(vuex)时，会调用vuex的install方法，装载vuex。在install方法中会执行applyMixin的方法。
该方法会初始化vuex, 如果是Vue1.0，Vuex会将vuexInit方法放入Vue的_init方法中，而对于Vue2.0，
则会将vuexinit混淆进Vue的beforeCreate钩子中(Vue.mixin({ beforeCreate: vuexInit })) 。
vuexInit方法中实现了store注入vue组件实例(this.$store = options.store) 。

2，vuex的state和getters是如何映射到各个组件实例中响应式更新状态呢？
主要是看resetStoreVM这个方法，
Vuex的state状态是响应式，是借助vue的data是响应式, 通过new Vue。将state存入vue实例组件的data中实现的；
Vuex的getters则是借助vue的计算属性computed实现数据实时监听。

首先会遍历wrappedGetters，使用Object.defineProperty方法为每一个getter绑定上get方法。使可以通过
store._vm来访问getters中的对象。最后通过store._vm = new Vue 来实现getters的实时监听

vue2 / 3.0响应式原理
有在关注什么新的技术方案
给定一个数组加数字n，求加和大于等于n的最短连续子数组的长度[5, 7, 3, 4, 8, 2, 9, 1, 6]，5
怎么实现点对点通讯？
利用webSocket可以实现，因为websocket协议，是在浏览器和服务器之间建立了一个长链接来相互传输数据。
对服务器而言，如果打开了好几个页面，那么就有好几个socket实例。
比如聊天室中两个人在聊天。每个建立连接的页面都会产生一个socket实例，那么我们只需要后端在接收消息的同时，
判断该socket实例是和哪个个实例在聊天，只把消息发送给另一个匹配的socket实例就好了。

淘系一面
介绍以前的项目、项目遇到的问题
请讲一讲浏览器缓存
第一次请求，当服务器返回 HTTP 响应头给浏览器时，浏览器是通过响应头中的 Cache - Control 字段来设置
是否缓存该资源，Cache - Control中的Max - age参数来设置缓存过期时长。在缓存资源未过期的情况下，如果
再次请求该资源，直接返回缓存中的资源给浏览器，如果缓存过期了，浏览器会继续发起网络请求，并且在http请
求头中带上If - None - Match字段，服务器收到请求后，会根据If - None - Match的值来判断请求的资源是否
有更新。如果没有更新，返回304状态码，代表这个缓存可以继续使用。如果有更新，服务器就返回最新资源给浏览器

现代项目是怎么利用缓存的？
webpack 打包的过程以及原理
工作过程：
1，Webpack CLI 启动打包流程；
2，载入 Webpack 核心模块，创建 Compiler 对象；
3，使用 Compiler 对象开始编译整个项目；
4，从入口文件开始，解析模块依赖，形成依赖关系树；
5，递归依赖树，将每个模块交给对应的 Loader 处理；
6，合并 Loader 处理完的结果，将打包结果输出到 dist 目录。

commonjs 和 import 的区别
  1，require是commonjs的规范，在node中实现的api，import是es的语法，
2，commonjs导出的值会复制一份，require引入的是复制之后的值（引用类型只复制引用），
es module导出的值是同一份（不包括export default ），不管是基础类型还是应用类型。
3，写法区别
const fs = require('fs')
exports.fs = fs
module.exports = fs
1，Commonjs的模块是运行时加载，而且加载的是整个模块
2，es6是编译时加载，而且是需要啥加载啥，不是加载的整个模块

babel 的原理
先将 ES6 源码转换为 AST（抽象语法树），然后再将 ES6 语法的 AST 转换为 ES5 语法的 AST，
最后利用 ES5 的 AST 生成 JavaScript 源代码

项目是怎么发布上去的
当项目的用户很多的时候，怎么监控 错误？
首先后端有各种强大的监控服务，但大多都是记录接口被请求后所发生的错误。
成熟的监控系统，例如Sentry
采集、处理、分析、报警
通过监听全局的 window.onerror 事件捕获到运行时错误（错误信息，发生错误的文件，发生错误的行号），然后上报到采集端，再做一个页面展示数据
重写console.error方法：
如果App首次向浏览器注入的Js代码报错了，window.onerror是无法监控到的，所以只能重写console.error的方式来进行捕获
重写window.onunhandledrejection方法
当你用到Promise的时候，而你又忘记写reject的捕获方法的时候，系统总是会抛出一个叫 Unhandled Promise rejection.没有堆栈，没有其他信息，特别是在写fetch请求的时候很容易发生。 所以我们需要重写这个方法，以帮助我们监控此类错误


1，某种错误发生的次数 2，设备信息
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

1, 浏览器从地址栏的输入中获得服务器的 IP 地址和端口号；
2, 浏览器用 TCP 的三次握手与服务器建立连接；
3, 浏览器向服务器发送拼好的报文；
4, 服务器收到报文后处理请求，同样拼好报文再发给浏览器；
5, 浏览器解析报文，渲染输出页面。

有哪些跨域的方法
//Cookie:
1, 两个网页一级域名相同，只是二级域名不同，浏览器允许通过设置document.domain共享 Cookie
  (这种方法只适用于 Cookie 和 iframe 窗口，LocalStorage 和 IndexDB 无法通过这种方法)
// Ajax跨域
2, 通过jsonp跨域（jsonp主要是通过script标签，调用他返回的数据，我们一般还可以传递一个函数名称过去）
3，使用跨域资源共享（CORS）来跨域，服务器设置Access - Control - Allow - Origin HTTP响应头之后，浏览器将会允许跨域请求．
Access - Control - Allow - Credentials(可选值，表示是否允许发送cookie)
4，使用webSocket来跨域(因为服务器可以根据请求头中的origin这个字段，判断是否许可本次通信)
//iframe
5，利用window.name进行跨域  页面中引用了iframe，两者的window.name是一致的可以实现跨域
6，使用window.postMessage方法来跨域（window.onmessage来接收）
postMessage方法的第一个参数是具体的信息内容，第二个参数是接收消息的窗口的源（origin）。
7，通过片段标识符.指的是，URL的#号后面的部分。如果只是改变片段标识符，页面不会重新刷新。父窗口可以把信息，写入子窗口的片段标识符。
子窗口通过监听hashchange事件得到通知。同样的，子窗口也可以改变父窗口的片段标识符。
8, Vue - cli中通过配置Proxy

js 的事件循环
你知道哪些排序方法，时间复杂度分别是多少
冒泡排序： O(n2)   快速排序O(nlogn)   插入排序 O(n2) 二分查找 o(logn)
二叉树遍历 O(n) 归并排序 O(nlogn)    计数排序 O(n + k)
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





