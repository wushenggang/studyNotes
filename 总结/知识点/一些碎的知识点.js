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


flex：
flex - direction属性决定主轴的方向，flex - wrap，flex - flow属性是flex - direction属性和flex - wrap属性的简写形式，默认值为row nowrap，justify - content属性定义了项目在主轴上的对齐方式。
align - items属性定义项目在交叉轴上如何对齐，align - content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
flex - grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。flex - shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。flex - basis属性定义了在分配多余空间之前，项目占据的主轴空间、
flex属性是flex - grow, flex - shrink 和 flex - basis的简写，默认值为0 1 auto。后两个属性可选。align - self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align - items属性


WebSocket: 服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，适合聊天室场景。
Promise:
Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。
Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
function sendRequest(arr, max, callback) {
  let fetchArr = [],  // 存储并发max的promise数组
    i = 0;

  function toFetch() {
    if (i === arr.length) {   // 所有的都处理完了， 返回一个resolve
      return Promise.resolve();
    }

    let one = fetch(arr[i++]); // 取出第i个url， 放入fetch里面 , 每取一次i++
    fetchArr.push(one);  //将当前的promise存入并发数组中       其实将这个push放到上一行会更好理解，那样就是我们同步的思维顺序，先push进去，再等promise执行完了之后再删除。  但由于then是异步的，所以怎么放都可以。            
    one.then(() => { fetchArr.splice(fetchArr.indexOf(one), 1) }); // 当promise执行完毕后，从数组删除

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







Generator函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）
可以这么理解，这个函数自己执行不了，得让别人帮忙执行，每next() ，走一步。函数用 * 来定义，函数里面会有一个yield，把函数截成不同的状态；
async、await是Generator函数的语法糖，原理是通过Generator函数加自动执行器来实现的，这就使得async、await跟普通函数一样了，不用再一直next执行了。
对于await后面的来说，有两种情况，不是Promise对象或者是promise对象。如果不是 promise, await会阻塞后面的代码，先执行async外面的同步代码，
同步代码执行完，再回到async内部，把这个非promise的东西，作为 await表达式的结果。如果它等到的是一个 promise 对象，await 也会暂停async后面的代码，
先执行async外面的同步代码，等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果。
如果asycn里的代码都是同步的，那么这个函数被调用就会同步执行，
如果在await后面接的这个promsie都是同步的，后面的promise会同步执行，但是拿到这个值还是得等待（特别注意：如果promise没有一个成功的值传入，对await来说就算是失败了，下面的代码就不会执行）



如何实现懒加载
将页面中的img标签src指向一张loading图片，然后定义一个属性指向真实的图片。然后监听滚动事件，判断当该图片在视线中时，把该属性的值赋值给src属性。


浏览器内核
IE: Trident, firefox: Gecko, Safari: webkit, chrome: 以前是Webkit内核，现在是Blink内核(其实是Webkit的分支), Opera: blink

关于vue的一些面试题：https://blog.csdn.net/weixin_42554191/article/details/104830168

ssr以及预渲染

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
4，事件委托 5，输入搜索时，可以用防抖debounce等优化方式，减少http请求。9，滚动条调用接口时，可以用节流throttle等优化方式，减少http请求；
6，使用Web Workers（主线程之外的线程，但web workers中没有DOM，CSSOM环境，所以无法操作DOM，可以将一些和DOM操作无关且费时的任务放入进行执行）
主线程采用new命令，调用Worker('work.js')构造函数，新建一个 Worker 线程，主线程调用worker.postMessage()方法，向 Worker 发消息，主线程通过worker.onmessage指定监听函数。
Worker 线程内部需要有一个监听函数，监听message事件
7，为item设置唯一key值
8，细分vue组件
9，减少watch的数据
10，事件的销毁  ，需要在组件销毁时手动移除一些事件监听，以免内存泄漏，类似addEventListener。需要remove
// 7，合理利用CSS合成动画, 是直接在合成线程上执行的

页面性能监控：
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


nextTick原理：
Vue 使用了 nextTick 进行统一更新
// 假如一个数据被页面引用，该数据会被收集到该页面的 watcher
// 当该数据被修改时，会通知所有收集到的watcher进行更新（watcher.update）
当一个数据被页面引用，我们给每个数据都建一个依赖数组。当数据变化时，就把每个依赖通知一遍。让他们进行更新，依赖就是watcher实例。
当一个数据被页面引用（谁依赖了数据），我们就需要创建一个依赖，将该依赖存入该数据的依赖数组，当数据变化时，就把每个依赖通知一遍。让他们进行更新
但数据一时间被修改三次时，按道理应该会通知三次 watcher 更新，那么页面会更新三次
但是最后只会更新一次，why？
当数据变化后，把 watcher.update  函数存放进 nextTick 的 回调数组中，并且会做过滤。通过 watcher.id 来判断 回调数组 中是否已经存在这个 watcher 的更新函数，
不存在才 push，之后 nextTick 遍历回调数组，便会执行了更新。这里还有一个能力检测。在浏览器支持的情况下，优先使用微任务。如果浏览器不支持微任务，使用宏任务。
先promise，再MutationObserver, 再setImmediate, 再setTimeout
所以，不管你修改多少次数据，nextTick 的回调数组中只存在唯一一个 watcher.update，从而页面只会更新一次

pv: 访问量, 即页面浏览量或点击量  uv: 独立访客

判断对象还是数组：Object.prototype.toString.call([]) === "[object Array]"
Object.prototype.toString.call({ a: 1 }) === "[object Object]"    Array.isArray()
obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，这是为什么？
这是因为toString为Object的原型方法，而Array 、Function等类型作为Object的实例，都重写了toString方法。不同的对象类型调用toString方法时，
根据原型链的知识，调用的是对应的重写之后的toString方法


slot    vue.mixin

jsbridge原理客户端可以通过webview里面注入一些javascript的上下文，可以理解为在window对象上挂载了一些方法，然后H5通过特定的对象可以获取到这个方法，反过来也是一样，js挂载了一些方法到window对象上，客户端也就可以调用js的某些方法。
