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
	14，数据类型的内存图
	15，var a=1;a='str';a的内存空间如何变化
	16，==和===的区别
	17，null和undefined的区别
	18，使用闭包每秒打印1,2,3,4
	19,继承的几种方式，寄生组合继承的区别
	20，es6与es5继承的区别
	21，箭头函数和普通函数的区别
	22，this的理解
	23，call,apply,bind的区别
	24，深浅拷贝
	25，事件流、事件委托（事件委托我们可以不必要为每一个子元素都绑定
	一个监听事件，这样减少了内存上的消耗）
	26，js延迟加载的方式
	27，ajax是什么
	28，浏览器和Node.js的事件循环机制有什么区别
	29，同步与异步，宏任务与微任务
	30，模块规范（commonJS，es6,AMD,CMD）
	31,typeof NaN的结果是什么，isNaN与Number.isNaN函数的区别
	32，如何判断变量的类型
	33，js的节流与防抖
	34，布尔类型的值的转换规则 ：假值（undefined、null、false、+0 、-0、""、NaN）
	35，{} 和 [] 的 valueOf 和 toString 的结果是什么
	36，js 类数组的定义、类数组如何转换为数组
	37，js 的垃圾回收 与 v8 的垃圾回收
	38，哪些操作会照成内存泄漏
	39，0.1 + 0.2 != 0.3 如何解决
	40，图片懒加载与预加载
	41，JavaScript 中数组是如何存储的？
	42，JavaScript 中的数组为什么可以不需要分配固定的内存空间？（追加）
	43，JavaScript 中数组的存储和 C / C++ / Java 中数组的存储有什么区别？（追加）
	44，let 、const 与 var的区别
	45，Iterator和for…of
	46，Symbol 类型
	47，Set 与 WeakSet 、Map 与 WeakMap
	48，什么是 Proxy
	49，说一说 promise？promise的各种api
	50，Generator及其异步方面的应用
	51，说一说 async / await
	52，class基本语法及继承

	手写原理：
	new 操作符具体干了什么
	instanceof 的实现
	实现原生ajax
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