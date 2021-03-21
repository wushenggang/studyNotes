参考网址：https://juejin.cn/post/6885112613164810247#heading-0

HTML
1, HTML语义化的理解
举例法
HTML 语义化就是使用正确的标签（总结）段落就写 p 标签，标题就写 h1 标签，文章就写article标签，视频就写video标签，等等。
阐述法
首先讲以前的后台开发人员使用table布局，然后讲美工人员使用div + css布局，最后讲专业的前端会使用正确的标签进行页面开发。
2，DOCTYPE的作用
声明文档的解析类型(document.compatMode)，避免浏览器的怪异模式,让浏览器照W3C的标准解析渲染页面
3，标准模式与怪异模式的区别
标准模式：是浏览器按照W3C标准解析执行代码，这样用规定的语法去渲染，就可以兼容各个浏览器，保证以正确的形式展示网页。
怪异模式：是使用浏览器自己的方式解析执行代码，因为不同浏览器解析执行的方式不一样，所以我们称之为怪异模式。
4，说一下文档流
文档流中：内联元素默认从左到右流，遇到阻碍或者宽度不够自动换行，继续按照从左到右的方式布局。块级元素单独占据一行，并按照从上到下的方式布局。
文档一旦脱离文档流，在算其父元素的高度时，就不包括其自身了
脱离文档流的方法：1，float 2，position：absolute  3, position: fixed
5, 行内元素、块级元素、行内块级元素、空元素
6, HTML5新特性
	(1)语义标签 < header >, <footer>,<nav>,<audio>,<video> 拖放API
5，cookies，session,sessionStorage,localStorage的区别
cookie保存在浏览器，session保存在服务器
cookie会会传送给服务器，webStorage不会。
cookie大小比较小，webStorage大小比较大
sessionStorage随着浏览器的关闭而失效，而localStorage需要手动去删除数据才会消失

如果不在浏览器中设置过期时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束，这种cookie简称会话cookie。
如果在浏览器中设置了cookie的过期时间，cookie被保存在硬盘中，关闭浏览器后，cookie数据仍然存在，直到过期时间结束才消失。

6，iframe内嵌框架有哪些缺点
（1）无法被一些搜索引擎索引到 （2）很多的移动设备（PDA 手机）无法完全显示框架，设备兼容性差。

7,说一下webWorker,webSocket
webwork为js创造多线程的环境，在webworker线程里的任务一般都是耗时且和DOM操作无关的任务
webSocket是一种通信协议，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息。（http协议通信只能由客户端发起）


CSS
1，三栏布局写一下
2，垂直水平居中写一下
(1)定位 + margin-top + margin-left (2)transform方案（有兼容问题）3，flex方案（有兼容问题） 4，display: table-cell
3，transform讲一下
	transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行移动(translate)、旋转(rotate)、缩放(scale)或倾斜(skew)
	（1）translate(x轴位移，y轴位移) - 元素沿X轴、Y轴进行平移; 正值-右下方移动，负值-左上方移动   transform: translate(80px, 80px) transform:translateX(80px) transform:translateY(80px)
	（2）rotate(旋转角度) - 元素以图形中心点为旋转中心，正值-顺时针旋转；负值-逆时针旋转；transform:rotate(15deg)
	（3）scale(X轴缩放倍数，Y轴缩放倍数) - 基于原来的位置进行伸缩变换，其中x代表沿X轴的伸缩倍数，y代表沿Y轴的伸缩倍数；0~1: 缩小；> 1：放大；transform:scale(1.2,1.6) transform:scaleX(1.4)  transform:scaleY(1.4)
	（4）skew(X轴扭曲角度，Y轴扭曲角度) - 沿着X轴和Y轴进行2D倾斜；transform: skew(30deg, 10deg)   transform: skewX(30deg)   transform: skewY(10deg)
	（5）transition(css属性 动画时间 过渡方式 延时时长) - 延长固定时长之后，将元素的css属性以某种过渡的方式执行动画，在动画时间内；
		div
		{
			width: 100px;
			height:100px;
			background:blue;
			transition:width 2s;
			-moz-transition:width 2s; /* Firefox 4 */
			-webkit-transition:width 2s; /* Safari and Chrome */
			-o-transition:width 2s; /* Opera */
		}
		div:hover
		{
			width: 300px;
		}
	（6）translate3d(x,y,z)   rotate3d(x,y,z,angle)   scale3d(x,y,z)
	4,实现动画的一些方式   @keyframes   transform 前者控制地更精确
	5,flex
	6，盒模型：标准模型和IE模型   标准盒模型  width等于content的宽   IE盒模型中： width等于content+padding+border这三个部分的宽度
	7，权重问题  ！important > 行间样式 > id选择器 > class选择器||属性选择器 > 标签选择器 > 通配符选择器
	8，css选择符有
	（1）：id选择器（#myid）;
	（2）:类选择器（.myclassname）;
	（3）:标签选择器（div,h1,p）;
	（4）:相邻选择器（h1+p）;
	（5）:子选择器（ul>li）;
	（6）:后代选择器（li a）;
	（7）:通配符选择器（*）;
	css中哪些属性可以被继承：字体系列font-family、font-size、font-weight等；文本系列：list-style、list-style-color等；文本系列：text-align、color、line-height等
	box-sizing常用的属性
	link与@import区别
a标签的4个伪类的正确顺序，并解释
清除浮动的方式
position的属性值：static、relative、absolute（脱离文档流）、fixed（脱离文档流）；absolute相对定位的
z-index：只对脱离文档流的元素有效
flex布局: 父元素设为Flex布局后，子元素的float、clear、vertical-align属性将失效。
BFC、触发条件、可解决的问题
IFC是什么
两栏布局：float + margin; calc; position + margin(或者transform) ；flex等
三栏布局：float + margin; position + margin; flex; 圣杯；双飞翼等
如何实现水平垂直居中
伪类和伪元素的区别： 伪类的操作对象是文档树中已有的元素，而伪元素则创建了一个文档树外的元素
浏览器是怎样解析 CSS 选择器的？（从右向左）
px、em、rem的区别
CSS创建一个三角形
CSS 动画 与 js 动画区别
CSS3新特性：圆角（border-radius）、阴影（box-shadow）、动画、渐变(gradient)、转换（transform：translate / scale/ skew）
CSS3新增伪类

JS
	1，JS原型，原型链
	2，instanceof方法讲一下
		通常来讲，使用 instanceof 就是判断一个实例是否属于某种类型。
		更重的一点是 instanceof 可以在继承关系中用来判断一个实例是否属于它的父类型。
	3，类型判断的几种方法
		（1）typeof "number"，"string"，"boolean"，"object"，"function"，"undefined"
		（2）instanceof 可以用instanceof运算符来判断对象是否为数组类型  {} instanceof Object 会报错
		{} 同时也是空的代码块，所以js无法识别{}是代码块还是空对象，使用({}) instanceof Object
		（3）constructor 每个对象都有一个constructor属性，它引用了初始化该对象的构造函数，常用于判断未知对象的类型
		（4）Object.prototype.toString.call() 判断（最靠谱）
	4，判断是否为数组的几种方式
		（1）isArray
		 (2) instanceof
		 (3) constructor
	 	（4）Object.prototype.toString.call(o)== '[object Array]'
	5，作用域链讲一下
		每当执行一个函数时，该函数的执行上下文你就会被推入调用栈，当执行结束后，该执行上下文就会被推出调用栈。
		当代码在一个上下文中访问时，会创建变量对象的一个 作用域链。作用域链的前端，始终都是 当前执行代码所在上
		下文的变量对象 。作用域链中的下一个变量对象来自包含的执行上下文环境，再下一个变量对象则来自再下一个包含
		的执行上下文环境。这样，一直延续到 全局执行上下文。全局执行上下文始终是作用域链中的最后一个对象。


	6，手写一个闭包
	7，讲一下工作中哪些地方用到了闭包
	（1）模拟块级作用域  （2）封装私有变量  （3）保存变量
	8，对js语言的看法，特点，优缺点
	9，promise的实现
	10，数组map forEach自己实现
	11，实现并发函数，函数参数为 urls (请求列表数组)、max(最大并发数量) 、fn(回调)，请求都成功执行回调
	12，函数柯里化
	13，js数据类型
	值类型(基本类型)： String，Number,Boolean,Null,undefined,Symbol
	引用类型： Object,Array,Function
	14，数据类型的内存图
	基本类型存储在栈中，引用类型存储在堆中
	引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址
	15，var a=1;a='str';a的内存空间如何变化
	16，==和===的区别
	==（值相等）   ===（类型和值都要相等）
	==会先做类型转换，再判断值的大小
	17，null和undefined的区别
	null表示一个表示“无”的对象，转为数值时为0；undefined是一个表示“无”的
	原始值，转为数值为NaN
	null表示没有对象，即此处不应该有值。比如原型链的终点
	undefined表示缺少值，此处应该有一个值，但是还没有定义。
	比如变量被声明但没有赋值。就等于undefined，对象没有赋值的属性，该属性值为undefined。
	函数没有返回值时，默认返回undefined
	18，使用闭包每秒打印1,2,3,4
	19,继承的几种方式，寄生组合继承的区别
		（1），原型链继承      ------子类型的原型为父类型的一个实例对象
		（2），借用构造函数继承     ---------在子类型构造函数中通过call()调用父类型构造函数
		（3），class通过extends继承
		组合继承：借用构造函数的技术实现实例属性的继承，使用原型链实现原型属性和方法的继承。
		但是会在原型链上多出一些多余的属性。并且都会调用两次构造函数。寄生组合继承就是为了解决这个问题，
		寄生继承就是不用实例化父类了，直接实例化一个临时副本实现了相同的原型链继承。
		Sub.prototype = Object.create(Sup.prototype);

	20，es6与es5继承的区别
		1.ES5先创建子类，在实例化父类并添加到子类this中
		2.ES6先创建父类，在实例化子集中通过调用super方法访问父级后，在通过修改this实现继承

	21，箭头函数和普通函数的区别
		（1）箭头函数时匿名函数,不能作为构造函数，不能使用new
		 (2) 箭头函数不能绑定arguments,取而代之用rest参数...解决
		 (3) 箭头函数没有原型属性
		 (4)箭头函数的this指向其上下文的this，普通函数的this指向调用它的对象

	22，this的理解
			this表示当前对象，this的指向是根据调用的上下文来决定的，默认指向window对象。严格模式下指向undefined
	23，call,apply,bind的区别
			这三个方法的第一个参数都可以改变this的指向，call和apply是在调用之后立即执行的。而bind是调用之后返回原函数，
			需要再调用一次。appl第二个参数是一个数组

	24，深浅拷贝
		JSON.parse(JSON.stringify(obj))
		递归

	25，事件流、事件委托（事件委托我们可以不必要为每一个子元素都绑定
	一个监听事件，这样减少了内存上的消耗）
	事件流描述的就是从页面中接收事件的顺序

	26，js延迟加载的方式
		宏任务与微任务

	27，ajax是什么
		可以在不重新加载整个网页的情况下，对网页的某部分进行更新的技术

	28，浏览器和Node.js的事件循环机制有什么区别
	29，同步与异步，宏任务与微任务
	30，模块规范（commonJS，es6,AMD,CMD）
		1，Commonjs的模块是运行时加载，而且加载的是整个模块，一般用在node.js中
		2，es6是编译时加载，而且是需要啥加载啥，不是加载的整个模块
		3，commonjs导出的值会复制一份，require引入的是复制之后的值（引用类型只复制引用），
		es module导出的值是同一份（不包括export default ），不管是基础类型还是应用类型。


	31,typeof NaN的结果是什么，isNaN与Number.isNaN函数的区别
		'number' 
		isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true
		Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN

	32，如何判断变量的类型
		上面有
	33，js的节流与防抖
		防抖：输入搜索
		节流：滚动请求接口，避免多次重复提交
	34，布尔类型的值的转换规则 ：假值（undefined、null、false、+0 、-0、""、NaN）
	35，{} 和 [] 的 valueOf 和 toString 的结果是什么
		1，{} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"
		2，[] 的 valueOf 结果为 [] ，toString 的结果为 ""

	36，js 类数组的定义、类数组如何转换为数组
		(1)，通过Array.property.slice.call()
		(2),通过Array.from或者 通过扩展运算符[...arr]

	37，js 的垃圾回收 与 v8 的垃圾回收
	38，哪些操作会照成内存泄漏
		（1），被遗忘的定时器和回调函数   
		（2），闭包   
		（3），没有清理的dom元素引用  
		（4）,全局变量 不用 var 声明的变量，相当于挂载到 window 对象上。如：b=1; 解决：使用严格模式

	39，0.1 + 0.2 != 0.3 如何解决
		小数点在计算机中是以二进制表示，而有些小数用二进制表示是无穷。所以会出现精度丢失(js中是以64位双精度
		格式来存储数字的)。
		（1）可以将其转换为整数后进行运算，运算后再转换为对应的小数
		（2）利用ES6的Number.EPSILON,它表示 1 与大于 1 的最小浮点数之间的差。
			注意兼容性，相减小于等于这个值

	40，图片懒加载与预加载
			懒加载：
			暂时不设置图片的src属性，而是将图片的url隐藏起来，比如先写在data-src里面，等某些事件触发的时候
			(比如滚动到底部，点击加载图片)再将图片真实的url放进src属性里面，从而实现图片的延迟加载
			预加载：
			在一些需要展示大量图片的网站，实现图片的提前加载。从而提升用户体验。常用的方式有两种，一种是隐藏在
			css的background的url属性里面，一种是通过javascript的Image对象设置实例对象的src属性实现图片的预加载。
			两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。懒加载对服务器前端有一定的缓解压力作用，
			预载则会增加服务器前端压力。
	41，JavaScript 中数组是如何存储的？
			数组是引用类型，存在堆中。
	42，JavaScript 中的数组为什么可以不需要分配固定的内存空间？（追加）
	43，JavaScript 中数组的存储和 C / C++ / Java 中数组的存储有什么区别？（追加）
	44，let 、const 与 var的区别
		let，const是Es6的语法，具有块级作用域。const是定义一个常量的。定义好后是不能修改的。
		var的话会具有变量提升的
	45，Iterator和for…of
	遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。
	任何数据结构只要部署 Iterator 接口，就可以完成遍历操作。Iterator 接口主要供for...of消费。
	String、Array、Map 和 Set，函数的arguments对象
	tip：可以通过调用next方法来让它一直往前走
	46，Symbol 类型
			Symbol表示独一无二的值，let s = Symbol('foo')
	47，Set 与 WeakSet 、Map 与 WeakMap
		(1).ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
		(2).WeakSet 结构与 Set 类似，也是不重复的值的集合。但是 WeakSet 的成员只能是对象，
		而不能是其他类型的值。WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对
		该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该
		对象所占用的内存，不考虑该对象是否还在该弱引用的结构中
		
		(3).Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
		(4).WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。但是 WeakMap 只接受对象作为键名（ null 除外），不接受其
		他类型的值作为键名。而且 WeakMap 的键名所指向的对象，不计入垃圾回收机制。

	48，什么是 Proxy
		用来修改某些操作的默认行为，通过let obj = new Proxy(target, handler)来生成一个Proxy实例，第一个参数代表要拦截的目标对象，第二个参数也是对象，用来
		定制拦截行为。例如有get, 拦截对象属性的读取。set，拦截对象属性的设置。has, 拦截  key in obj 操作。deleteProperty(target, propKey) ，拦截delete操作。
		ownKeys(target) ，拦截Object.getOwnPropertyNames(proxy) 。apply，拦截 Proxy 实例作为函数调用的操作，比如proxy(...args) 、proxy.call(object, ...args) 、proxy.apply(...) 。
		construct(target, args) ：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args) 。

	49，说一说 promise？promise的各种api
			Promise是异步回调的一种解决方案，是为了解决之前的回调地狱，他通过链式结构，代码更加清晰了。把执行代码和处理结果的代码清晰地分离了。
			Promise.all([])   Promise.race([])
	50，Generator及其异步方面的应用
			Generator这个函数自己执行不了，得让别人帮忙执行，每next() ，走一步。函数用 * 来定义，函数里面会有一个yield，把函数截成不同的状态。
			async、await是Generator函数的语法糖，原理是通过Generator函数加自动执行器来实现的
	51，说一说 async / await
			async / await诞生主要是为了让异步代码看起来更像同步代码，使用try catch来捕获异常。假如 await后面的Promise没有resolve成功的话，异步函数也不会继续执行。
	52，class基本语法及继承
			constructor方法，里面的this代表实例对象。
			继承的话可以通过extends来实现，子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造。
			
	手写原理：
	new 操作符具体干了什么
	instanceof 的实现
	实现原生ajax
		var request = new XMLHttpRequest()
		request.open('GET', '/a/b/c?name=ff', true);     // true表示异步
		request.onreadystatechange = function () {
			if (request.readyState === 4 && request.status === 200) {
				console.log(request.responseText);
			}
		};
		request.send();
	原生jsonp
	实现 call、apply、bind
	实现节流与防抖
	实现深浅拷贝
	实现函数柯里化
	实现数组去重
	实现数组扁平化


	Vue：

	双向绑定原理
	Vue生命周期（资源请求一般在哪个生命周期，还有哪些生命周期可以请求资源）
		一般的话是created和mounted,created是数据初始好了但页面没有渲染好，如果要操作dom节点的话会找不到，
		我一般都是在mounted中初始化请求的。
	单变量对应多视图Vue怎样去更新状态
	Vuex中的几种状态
	MVVM 模式的优缺点，与 MVC 的区别
	一般在哪个生命周期里请求接口
	Vue 的组件通信
	Vue 中是如何检测数组的变化
	Vue 组件中的data为什么要写成函数形式
	nextTick 是做什么用的，其原理是什么
	Vue 的模板编译原理
	computed 与 watch 的差异
	vue-router 中的导航钩子
	vue-router的两种模式
	Vue中 key 值的作用
	Vue中常见的修饰符
	Vue中常用的指令
	v-show 与 v-if 的区别
	keep-alive 组件的作用
	Vue的虚拟dom
	Vue 中的slot 与 slot-scope


	浏览器

	浏览器缓存
	浏览器的同源策略
	跨域
	浏览器的渲染
	回流为什么比重绘更消耗性能
	浏览器的进程与线程
	cookie、session、token的区别
	输入url 后发生了什么



	webpack

	Webpack 是什么？
	Webpack 与 gulp 的区别？
	Webpack 构建流程
	Webpack 的优化
	热更新的原理
	loader 与 plugins 的区别
	常用的 loader 与 plugin
	是否自己写过loader 或者 plugin


	计算机基础

UDP和TCP区别讲一下
跨域的几种实现方式
网站的本地缓存
TCP/IP 四层模型 、OSI七层模型、每一层的有哪些常见的协议
TCP 与 UDP 的区别
TCP 的 三次握手与四次挥手（为什么是三次？ 为什么是四次？）
TCP 的 流量控制与拥塞控制
TCP 可靠传输
TCP 滑动窗口
HTTP 的请求方法
GET 与 POST的区别
HTTP 常见的请求头
HTTP 状态码
HTTP 报文格式
HTTP1.0 、HTTP1.1 、HTTP 2.0
HTTP 与 HTTPS 的区别 、HTTPS的握手过程
HTTPS中的三个随机数是如何生成会话密钥的
HTTP 缓存：强缓存与协商缓存
进程、线程
进程之间的通信方式
线程的哪些资源共享？哪些资源不共享
死锁

安全
XSS 攻击及如何防范
CSRF 攻击及如何防范


附加：
1，rem重点学习
2，有什么跨端的方案
3，无限下拉列表有什么好的解决方案
4，如何去解决首屏渲染的速度，有啥指标
5，如何埋点
6，Object.definProperty()有什么属性方法。

https://www.kancloud.cn/pillys/qianduan/2052094

阿里面试：
ajax的流程
var request = new XMLHttpRequest()
request.open('GET', '/a/b/c?name=ff', true);
request.onreadystatechange = function () {
	if (request.readyState === 4 && request.status === 200) {
		console.log(request.responseText);
	}
};
request.send();
401状态码
ajax, axios和fetch的区别
ajax: 1, 创建异步XMLHttpRequest对象(可以实现无刷新数据请求) 2, 设置请求参数，包括请求的方法和URL等 3, 发送请求 4, 注册事件，事件状态变更会及时响应监听 5, 在监听里面获取并处理返回数据
axios: axios是一个基于Promise的HTTP库，可以用在浏览器和node.js中，它底层还是基于XMLHttpRequest对象的。
1，对PromiseAPI的支持 2，支持请求拦截和响应、转换请求数据和响应数据、取消请求 3，可以自动转换JSON数据 4，支持防御XSRF
fetch： fetch就不是XMLHttpRequest对象了，fetch是原生的js对象
1，fetch 返回的是一个Promise对象 2，promise 对象获取到的是一个Response对象，即Response对象只是一个 HTTP 响应，而不是真的JSON。
3，为了获取后台返回的JSON内容，我们需要使用Response.json()方法 4，在第二个then方法中才能获取后台返回的数据
5，fetch返回的是Promise，所以如果HTTP状态码是404之类的，fetch也是成功返回的，只有在网络连接错误的情况下，才会reject 6，fetch不发送cookies

设计模式
proxy具体咋用
用来修改某些操作的默认行为，通过let obj = new Proxy(target, handler)来生成一个Proxy实例，第一个参数代表要拦截的目标对象，第二个参数也是对象，用来
定制拦截行为。例如有get, 拦截对象属性的读取。set，拦截对象属性的设置。has, 拦截  key in obj 操作。deleteProperty(target, propKey) ，拦截delete操作。
ownKeys(target) ，拦截Object.getOwnPropertyNames(proxy) 。apply，拦截 Proxy 实例作为函数调用的操作，比如proxy(...args) 、proxy.call(object, ...args) 、proxy.apply(...) 。
construct(target, args) ：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args) 。







// =====================================================
// 欢迎参加有赞前端 Coding 面试
// =====================================================
// 界面介绍：
//   上方设置按钮可以切换语言、字体大小、主题
//   右侧控制台可以显示代码执行结果，可用于编码过程中的 DEBUG
// =====================================================
// Coding 须知：
//   本次 Coding 时间限制为 45 分钟，共 4 道题，完成 2 道即可
// =====================================================

/**
 * 1、解析 url 中的 queryString
 *
 * 输入：https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&list[]=a&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D&qwe&www=
 * 输出：
 * {
 *  name: coder,
 *  age: 20,
 *  callback: https://youzan.com?name=test,
 *  list: [a, b],
 *  json: {
 *      str: 'abc',
 *      num: 123
 *  },
 *  qwe: '',
 *  www: '',
 * }
 */

const url = `https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&list[]=a&list[]=b&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D&qws&www=null`;

function urlParse(url) {
    let urlParams = url.slice(url.indexOf('?') + 1)
    urlParams = urlParams.split('&')
    let theObject = {}
    for (let i = 0; i < urlParams.length; i++) {
        theObject[urlParams[i].split('=')[0]] = unescape(urlParams[i].split('=')[1])
    }
    return theObject;
}


const result = urlParse(url)

/**
 * 2、实现 getValue 函数，安全的获取目标对象指定 path 的值
 * @params {object | array} value 指定对象
 * @params {string} path
 */

const object = { 'a': [{ 'b': { 'c': 3 } }] }; // path: 'a[0].b.c'
const array = [{ "a": { b: [1] } }]; // path: '[0].a.b[0]'
// const object1 = { a: { b: { c: 2 }}} // path: a.b.c === 2

function getValue(obj, path) {

}

getValue(object, 'a[0].b.c')

/**
 * 3、将一个json数据的所有key从下划线改为驼峰
 * 
 * @param {object | array} value 待处理对象或数组
 * @returns {object | array} 处理后的对象或数组
 */

const testData = {
    a_bbb: 123,
    a_g: [1, 2, 3, 4],
    a_d: {
        s: 2,
        s_d: 3
    },
    a_f: [1, 2, 3, {
        a_g: 5
    }],
    a_d_s: 1
}

function helper(key, data, cloneData) {
    console.log(key)
    if (key.indexOf('_') ) {
        let trueKey = ''
        let keys = key.split('_')
        for (let i = 0; i < keys.length; i++) {
            if (i !== 0) {
                keys[i] = keys[i][0].toUpperCase()+keys[i].slice(1)
            }
            trueKey += keys[i] 
        }
        cloneData[trueKey] = data[key]
    } else {
        cloneData[key] = data[key]
    }
}
function mapKeysToCamelCase(data) {
    let cloneData = Array.isArray(data) ? [] : {}
    if (data && typeof data === 'object') {
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                helper(key, data,cloneData)
                if (data[key] && typeof data[key] === 'object') {
                    for (let key1 in data[key]) {
                        helper(key1, data[key], cloneData)
                        mapKeysToCamelCase(data[key][key1])
                    }          
                }
            }
        }
    }
    return cloneData
 }





/**
 * 4、将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，
 * 例如110000000000000000000000000000000000000000000000，表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。
 * 一个位图中可能有个不连续的时间区间被选中，例如110010000000000000000000000000000000000000000000，
 * 表示00:00~01:00和02:00~02:30这两个时间区间被选中了。
 * 写一个timeBitmapToRanges,将上述规则描述的时间位图转挨成一个选中时间区间的数组。
 */

function timeBitmapToRanges() { }
