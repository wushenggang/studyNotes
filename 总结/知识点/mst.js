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
span元素无法设置宽度高度
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
	7，权重问题  ！important > 行内样式 > id选择器 > class选择器||属性选择器 > 标签选择器 > 通配符选择器
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
	一个在html中引入，一个在css中引入
a标签的4个伪类的正确顺序，并解释
清除浮动的方式
（1）1、在标签结尾处加空div标签 clear:both （2）父级div定义 伪类:after （3）父级div定义 overflow:hidden  （4）给父级元素单独定义高度（height）
position的属性值：static、relative（相对其正常位置）、absolute（脱离文档流，相对于最近position不为static的父级元素来定位）、fixed（脱离文档流，元素的位置相对于浏览器窗口是固定位置；）
z-index：只对脱离文档流的元素有效
flex布局: 父元素设为Flex布局后，子元素的float、clear、vertical-align属性将失效。
BFC、触发条件、可解决的问题
sticky：具体是类似 relative 和 fixed，在 viewport 视口滚动到阈值之前应用 relative，滚动到阈值之后应用 fixed 布局，由 top 决定。
一般用在对scroll事件的监听上，在滑动过程中，如果某个元素距离父元素的高度达到了sticky粘性定位的要求时，相当于fixed定位，固定到适当的位置。
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
		1.ES5先创建子类，再实例化父类并添加到子类this中
		2.ES6先创建父类，通过调用super方法访问父级后，再通过修改this实现继承

	21，箭头函数和普通函数的区别
		（1）箭头函数是匿名函数,不能作为构造函数，不能使用new
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
		浅拷贝:Object.assign(),Array.prototype.concat(),Array.property.slice(),
				[...arr]扩展运算符

	25，事件流、事件委托（事件委托我们可以不必要为每一个子元素都绑定
	一个监听事件，这样减少了内存上的消耗）
	事件流描述的就是从页面中接收事件的顺序

	26，js延迟加载的方式
		宏任务与微任务

	27，ajax是什么
		可以在不重新加载整个网页的情况下，对网页的某部分进行更新的技术
		var request = new XMLHttpRequest()
request.open('GET', '/a/b/c?name=ff', true);
request.onreadystatechange = function () {
	if (request.readyState === 4 && request.status === 200) {
		console.log(request.responseText);
	}
};
request.send();
ajax: 1, 创建异步XMLHttpRequest对象(可以实现无刷新数据请求) 2, 设置请求参数，包括请求的方法和URL等 
3, 发送请求 4, 注册事件，事件状态变更会及时响应监听 5, 在监听里面获取并处理返回数据

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
		(3)Array.property.concat()
		(4)Object.assign()

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
		MVVM 优点：(1),分离视图（view）模型（model）降低代码的耦合 2,
				   (2),2，自动更新dom: 利用双向绑定,数据更新后视图自动更新,让开发者从繁琐的手动dom中解放
			 缺点：（1）对于大型的图形应用程序，视图状态较多，ViewModel的构建和维护的成本都会比较高
		两者的区别：
					（1）mvc 中 Controller演变成 mvvm 中的 viewModel
					（2）mvvm 通过数据来驱动视图层的显示而不是节点操作。
					（3）mvc中Model和View是可以直接打交道的，造成Model层和View层之间的耦合度高。而mvvm中Model和View不直接交互，而是通过中间桥梁ViewModel来同步
					（4）mvvm主要解决了:mvc中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。	 
	Vue 的组件通信
	Vue 中是如何检测数组的变化
		重写数组的原型
	Vue 组件中的data为什么要写成函数形式
		当组件复用的时候，若写成对象的形式，该对象就会被复用。假如写成函数的形式，每次返回的都是一个新的对象，
		所以不会被复用
	nextTick 是做什么用的，其原理是什么
	nextTick可以让我们在下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM。

在 Vue 2.4 之前都是使用的 microtasks，但是 microtasks 的优先级过高，在某些情况下可能会出现比事件冒泡更快的情况，
但如果都使用 macrotasks 又可能会出现渲染的性能问题。所以在新版本中，会默认使用 microtasks，但在特殊情况下会使用 macrotasks，
比如 v-on。对于实现 macrotasks ，会先判断是否能使用setImmediate，不能的话降级为MessageChannel，
以上都不行的话就使用setTimeout

	Vue 的模板编译原理
	computed 与 watch 的差异
		computed是计算属性，只有相关的数据变化才会重新计算。当数据没有变化时它会读取缓存。
		watch是对数据进行监听，如果一个数据需要被监听并且对数据做一些操作就用 watch
	vue-router 中的导航钩子
		全局前置守卫 router.beforeEach    全局解析守卫 router.beforeResolve   全局后置钩子 router.afterEach(唯一一个没有next参数的)    路由独享的守卫 beforeEnter   
		组件内的守卫 beforeRouteEnter(不能访问this，可以通过传一个回调给 next来访问组件实例)、beforeRouteUpdate、
		beforeRouteLeave（这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消）
	vue-router的两种模式
	Vue中 key 值的作用
	Vue中常见的修饰符
		（1）.stop 阻止事件冒泡 （2），.prevent 阻止默认事件 (3), .capture使用事件的捕获模式
		（4）.self 只在事件在该元素本身时触发回调（在其子元素在不触发） （5）.once 只触发一次事件
			(6).passive  滚动事件的默认行为 (即滚动行为) 将会立即触发，而不会等待 onScroll 完成。
			尤其提升了手机端的性能。和prevent不能同时使用。使用了会忽略prevent。
	Vue中常用的指令
		v-bind：属性绑定  v-on: 事件绑定  v-model:数据双向绑定
		v-for v-if v-show
	v-show 与 v-if 的区别
	keep-alive 组件的作用
	Vue的虚拟dom
	Vue 中的slot 与 slot-scope


	浏览器

	浏览器缓存
	浏览器的同源策略
	同源条件：(1)协议相同（2）域名相同（3）端口相同
	如果非同源： （1）Cookie、LocalStorage 和 IndexDB 无法读取。 （2）DOM 无法获得。
		（3）AJAX 请求不能发送。
		两个网页一级域名相同，只是二级域名不同，浏览器允许通过设置document.domain共享 Cookie
		(这种方法只适用于 Cookie 和 iframe 窗口，LocalStorage 和 IndexDB 无法通过这种方法)
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
都是传输协议
（1）TCP顺序发顺序收，UDP顺序发无序收
（2）TCP丢包后会重传，安全性高
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
一个进程就是一个程序的运行实例。
线程是不能单独存在的，它是由进程来启动和管理的。线程是依附于进程的，而进程中使用多线程并行处理能提升运算效率。
进程和线程关系的4个特点
1，进程中的任意一线程执行出错，都会导致整个进程的崩溃。   2，线程之间共享进程中的数据。
3，当一个进程关闭之后，操作系统会回收进程所占用的内存。   4，进程之间的内容相互隔离。
目前的多进程架构：1个浏览器主进程，1个GPU进程，1个网络进程，多个渲染进程和多个插件进程

进程之间的通信方式
IPC

线程的哪些资源共享？哪些资源不共享
死锁

安全
XSS 攻击及如何防范
CSRF 攻击及如何防范


附加：
1，rem重点学习
淘宝rem方案：px 转化换 rem ，转化是 10 ，你的设计图为750，那么就 750 / 75 = 10 rem。
设计图中你量尺寸都要除 75 就是 rem值。再比如量的设计图按钮宽度 66px，那么计算：66 / 75 = 0.88rem
再比如设计图为900，那么 900 / 90 = 10rem;设计图中所有量的尺寸都得除 90 就等于 rem的之。
淘宝rem方案主要通过使用js去控制根元素中html的font-size的大小，进而改变按钮的大小

2，有什么跨端的方案
3，无限下拉列表有什么好的解决方案
	使用虚拟列表的方案，就是在任何情况下只对「可见区域」进行渲染
	思路就是用vue的for循环渲染列表，自己手动加一个滚动条，然后通过监听scroll，算出应该显示到第几个，通过计算属性截取显示的数据
	https://blog.csdn.net/wade3po/article/details/106572590

4，如何去解决首屏渲染的速度，有啥指标
	在SSR服务端渲染应用中，们认为html的body渲染完成的时间就是首屏时间。我们通常使用 W3C 标准的Performance对象来计算首屏时间。
	SPA应用的话可以利用谷歌浏览器开发工具中的Lighthouse。检测白屏时间（页面绘制第一个像素时），First Contentful Paint。
	Largest Content Paint，简称 LCP（首屏内容完全绘制完成）
		(但是随着 Vue和React等前端框盛行, 导致Performance无法准确的监控到页面的首屏时间。因为页面的body是空，
		浏览器需要先加载js, 然后再通过js来渲染页面内容)
		lighthouse会给出一个性能得分，会给出一些关键的时间点，并给你一些优化建议
		还可以通过performance生成报告页面，可以设置cpu的运算能力，还可以设置网络的速度。
		报告页面主要分为三个部分，概览面板、性能面板和详情面板。
		通过概览面板来定位问题的时间节点，然后再使用性能面板分析该时间节点内的性能数据，
		其中最为重要的是 Main 指标，它记录了渲染主线程上的任务执行情况。

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
ajax, axios和fetch的区别
ajax: 1, 创建异步XMLHttpRequest对象(可以实现无刷新数据请求) 2, 设置请求参数，包括请求的方法和URL等 3, 发送请求 4, 注册事件，事件状态变更会及时响应监听 5, 在监听里面获取并处理返回数据
axios: axios是一个基于Promise的HTTP库，可以用在浏览器和node.js中，它底层还是基于XMLHttpRequest对象的。
1，对PromiseAPI的支持 2，支持请求拦截和响应、转换请求数据和响应数据、取消请求 3，可以自动转换JSON数据 4，支持防御XSRF
fetch： fetch就不是XMLHttpRequest对象了，fetch是原生的js对象
1，fetch 返回的是一个Promise对象 2，promise 对象获取到的是一个Response对象，即Response对象只是一个 HTTP 响应，而不是真的JSON。
3，为了获取后台返回的JSON内容，我们需要使用Response.json()方法 4，在第二个then方法中才能获取后台返回的数据
5，fetch返回的是Promise，所以如果HTTP状态码是404之类的，fetch也是成功返回的，只有在网络连接错误的情况下，才会reject 6，fetch不发送cookies

401状态码
设计模式
proxy具体咋用
用来修改某些操作的默认行为，通过let obj = new Proxy(target, handler)来生成一个Proxy实例，第一个参数代表要拦截的目标对象，第二个参数也是对象，用来
定制拦截行为。例如有get, 拦截对象属性的读取。set，拦截对象属性的设置。has, 拦截  key in obj 操作。deleteProperty(target, propKey) ，拦截delete操作。
ownKeys(target) ，拦截Object.getOwnPropertyNames(proxy) 。apply，拦截 Proxy 实例作为函数调用的操作，比如proxy(...args) 、proxy.call(object, ...args) 、proxy.apply(...) 。
construct(target, args) ：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args) 。

jsbridge原理客户端可以通过webview里面注入一些javascript的上下文，可以理解为在window对象上挂载了一些方法，然后H5通过特定的对象可以获取到这个方法，反过来也是一样，js挂载了一些方法到window对象上，客户端也就可以调用js的某些方法。

客户端开发者可以给webview注入全局变量并挂载在window对象上，这样前端js就可以通过window上全局对象方法 来调用一些native的方法
前端需要去了解这个全局对象，是在webview初始化时候注入的，还是在页面加载完之后注入的，也就是同步注入还是异步注入的问题
如果是异步注入的，则需要前端的代码中，添加对象的ready监听机制

JSBridge 主要提供了 JS 调用 Native 代码的能力，实现原生功能如查看本地相册、打开摄像头、指纹支付等。

Symbol的作用：
	Symbol作为对象的属性时不能够被for-in或者Object.keys所遍历

es6的class和es5的原型的区别（区别在于原型对象上的方法是否可遍历）
	在for in的时候es5的prototype上的属性会被打出来，es6中继承的属性不会被打出来

如何判断数组和伪数组
1、数据 instanceof Array
2、Object.prototype.toString.call( 数据 ) === '[object Array]'


polyfill 由于ie9和一些低版本的高级浏览器对es6新语法并不支持，
引用babel-polyfill来解决此问题





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


[].forEach:  类似于for循环吧，就是遍历循环。  map的话：建一个新的数组，
其中每一个元素由调用数组中的每一个元素执行提供的函数得来。原数组不变

scoped的实现原理：主要是通过PostCss实现的，PostCSS给一个组件中的所有dom
添加了一个独一无二的动态属性，给css选择器额外添加一个对应的属性选择器，来选择组件中的dom

scoped穿透
stylus的样式穿透 使用>>>
sass和less的样式穿透 使用/deep/    外层 /deep/ 第三方组件
再建立一个不加scoped的style中进行样式覆盖

捕获，冒泡
om标准事件流的触发的先后顺序为：先捕获再冒泡
element.addEventListener(event, function, useCapture);  第三个参数默认为false，即冒泡阶段
阻止冒泡：event.stopPropagation 或者 return false 后者还阻止了事件本身

cache-control的参数：
（1）public 响应被缓存，并且可以在多用户间共享
（2）private 私有的缓存
 (3) no-cache 响应不会被缓存，而是实时向服务器端请求资源
 (4)no-store：在任何条件下，响应都不会被缓存
 (5)max-age 缓存时间


 document.ready和window.onload的区别
 $(document).ready()是页面DOM结构绘制完毕后就执行，不必等到加载完毕。 
 window.onload必须等到页面内的所有元素（）加载完毕后才能执行。
 window.onload不能同时执行多个，指挥执行后面的那一个。  $(document).ready()可以同时执行多个

 渐进jpg了解过吗
 基准式jpg  如果文件较大或者网络下载速度较慢，那么就会看到图片被一行行加载的效果
 渐进式jpg  渐进式图片带来的好处是可以让用户在没有下载完图片就可以看到最终图像的大致轮廓，一定程度上可以提升用户体验
 结论很简单，Chrome + Firefox + IE9浏览器下，渐进式图片加载更快，而且是快很多，至于其他浏览器，与基准式图片的加载一致，至少不会拖后腿。

 文件上传如何实现？，除了input还有什么别的方法？ 
 1,经典的form和input上传。  input type="file"
 2,通过formData上传。  formData.append("file", file)
//  3,HTML5新api， fileReader
 4，文件编码上传  第一个思路是将文件进行编码，然后在服务端进行解码，其主要实现原理就是将图片转换成base64进行传递
 ,在服务端需要做的事情也比较简单，首先解码base64，然后保存图片即可。base64编码的缺点在于其体积比原图片更大
 除了进行base64编码，还可以在前端直接读取文件内容后以二进制格式上传

 Base64就是一种基于64个可打印字符来表示二进制数据的方法
 们知道，我们所看到的网页上的每一个图片，都是需要消耗一个http请求下载而来的，不管如何，图片的下载始终都要向服务器发出请求，
 要是图片的下载不用向服务器发出请求，而可以随着 HTML 的下载同时下载到本地那就太好了，而base64正好能解决这个问题。

 在前端怎么将base64解析成图片
 (1)直接将其放到img标签的src属性里的
 (2)将其显示在css的background-image样式上，同样是直接放上编码内容

 如何将图片直接转成base64？
 （1）可以通过h5的新api FileReader来实现   使用FileReader 对象接收blob
	(2) canvas.toDataURL()方法

 浏览器如何预览图片，假设我要上传图片，未上传前我想在浏览器看到我待上传的图片
 选中图片后，获取到图片的本地路径，然后显示在浏览中。
 通过调用html5的FileReader对象，来读取到上传的图片文件，并把图片文件转换成base64字符串，
 然后把这个字符串赋值到img控件，详细代码如图

 操作系统中进程和线程怎么通信

 请求方法：
 get，head:类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取报头, POST, put:PUT 基本上是 POST 的同义词，多用于更新数据；
 delete:请求服务器删除指定的页面

 你觉得typescript和javascript有什么区别
 是JS的超集，为 JS 添加类型支持，以及提供最新版的 ES 语法的支持，是的利于团队协作和排错，开发大型项目
 cookie的属性：
 name,value,domain(可以访问此cookie的域名),size,http(cookie的httponly属性)，expires，max-age,secure字段：设置是否只能通过https来传递此条cookie。


 options请求方法有什么用
 OPTIONS请求即预检请求，可用于检测服务器允许的http方法。当发起跨域请求时，由于安全原因，
 触发一定条件时浏览器会在正式请求之前自动先发起OPTIONS请求，即CORS预检请求，服务器若接受
 该跨域请求，浏览器才继续发起正式请求。
 预检请求:比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json
 作用：服务器基于从预检请求头部获得的信息来判断，是否接受接下来的实际请求。
 less,sass它们的作用是什么
 （1）css样式可以嵌套，不用每个id都单独写  （2）变量，比如把颜色存在变量里
 （3）混合宏 混合宏是小的代码片段（类似局部），你可以在项目中任何需要的地方，通过@include来复用它们。
 
 怎么判断是udp还是tcp
 （1）可以通过抓包工具看
 （2）在IP报头里有协议号。udp是17，tcp为6
 
 浏览器缓存方法
 （1）cache-control   etag， last-modify对应if-modified-since（如果在单位秒里面做了修改，该值不会变化）
 
 Vuex用过modules吧，说说A文件内的actions怎么修改B的state
 1,直接在A文件内引入B文件，调用B的actions。
 2. dispatch第三个参数为{root: true}
 
 typescript  变量后面加上感叹号什么意思   非空断言
 
 如果有100万的pv访问，前端有什么方案去配合后端处理压力？
 
 这个问题，我当然的就是骨架屏，资源懒加载这样的体验上面的解决方案；还有一些静态数据缓存
 骨架屏：指在页面数据加载完成前，先给用户展示出页面的大致结构（灰色占位图） （1）使用图片、svg 或者
 手动编写骨架屏代码   （2）通过预渲染手动书写的代码生成相应的骨架屏（3）饿了么内部有一套方案比较成熟
 图片懒加载  scrollTop+clientHeight > offsetTop时 图片需要被展示
 
 es10的bigInt   BigInt数据类型的目的是比Number数据类型支持的范围更大的整数值 2^53-1 通过数字后面加n可以实现
 JS整数是怎么表示的   通过 64 位来表示一个数字
 
 事件是如何实现的
 基于发布订阅模式，就是在浏览器加载的时候会读取事件相关的代码，但是只有实际等到具体的事件触发的时候才会执行。
 
 JS 隐式转换，显示转换
 一般非基础类型进行转换时会先调用 valueOf，如果 valueOf 无法返回基本类型值，就会调用 toString
 
 怎么加事件监听，两种
 (1)DOM0级事件 onclick 同一个事件只能有一个处理程序 dom.onclick = null
 (2)addEventListener  一个事件可以有多个事件处理程序，按顺序执行
 
 如果一个构造函数，bind了一个对象，用这个构造函数创建出的实例会继承这个对象的属性吗？为什么？
 不会， new 绑定的优先级高于 bind 显示绑定

 ES6 Class中的static
 给类添加静态属性和方法的，可以继承

 柯里化的好处
 (1) 参数复用 (2)提前确认（执行后返回一个函数，避免每次都判断）（3）延迟执行，例如bind

 302 临时重定向场景
 一般是访问某个网站的资源需要权限时，会需要用户去登录，跳转到登录页面之后登录之后，才可以继续访问
 
 
 POST一般可以发送什么类型的文件，数据处理的问题
 文本、图片、视频、音频等都可以
 text/image/audio/ 或 application/json 等

PWA:
PWA（Progressive Web App）是一种理念，使用多种技术来增强web app的功能，可以让网站的体验变得更好，
能够模拟一些原生功能，比如通知推送。在移动端利用标准化框架，让网页应用呈现和原生应用相似的体验。

Service Worker 是一个 基于HTML5 API ，也是PWA技术栈中最重要的特性， 它在 Web Worker 的基础上加上了持久离线缓存和网络代理能力，
结合Cache API面向提供了JavaScript来操作浏览器缓存的能力，这使得Service Worker和PWA密不可分。目前对于苹果的兼容性不是太好，但是
后续会支持。

还需要支持一些推送的功能，这方面可以借助助 PWA 的 Push 特性

serverless

对应用开发者而言，不再需要操心大部分跟服务器相关的事务，比如服务器选购、应用运行环境配置、负载均衡、日志搜集、系统监控等，这些事情统统交给Serverless平台即可，
应用开发者唯一需要做的就是编写应用代码，实现业务逻辑。

常用的数据结构：
数组（静态数组、动态数组）、线性表、链表（单向链表、双向链表、循环链表）、队列、栈、树

js语言的优缺点：
优点：（1）原先数据都要上传服务器进行验证，现在直接通过js验证。减少网络传输 （2）js可以很方便操纵html对象
缺点：（1）各个浏览器的兼容性不一样 （2）当把javascript的一个设计目标设定为“web安全性”时，就需要牺牲javascript的一些功能。
因此，纯粹的javascript将不能打开、读写和保存用户计算机上的文件。

react和vue的优缺点
（1）都是数据驱动视图
（2）声明式的Vue上手更加简单（对象映射template，直观），开发效率高，但是api更多，约束也更多。
（3）React上手偏难一点点（命令式反直觉），开发效率要低一点，但是api少，约束也少，更加灵活。

进程通信方式：
（1），管道pipe  （2），套接字Socket （3），信号 （4），消息队列通信  （5）共享内存（若创建一个共享内存，则所有进程都能去访问，但需要加一把锁）

正码 反码
正码：最高位表示符号位，0表示正数，1表示负数，其余位表示为整数的二进制数。
反码：正数的反码与正码相同，负数的反码反码是在正码的基础上对除符号位之外的位取反，0
补码：正数的补码与正码相同，负数的补码是在反码的基础上，对最低位+1.

设计一个正确统计SPA应用PV的SDK
（1）全局定义一个Router.beforeEach(),在其中进行各个页面的埋点，通过to,from参数还可以统计页面的停留时间。关闭应用的时候如何统计？可以考虑window.onunload方法
（2）通过Vue.mixin全局混入beforeRouteEnter和beforeRouterLeave，通过两个的时间差统计页面停留时间

TCP/IP 四层：从第一层到第四层分别为链接层（负责在以太网，WIFI这样的底层网络上发送原始数据包，工作在网卡这个层次，使用 MAC 地址来标记网络上的设备，所以有时候也叫 MAC 层。）
，网际层（IP 协议就处在这一层，用IP地址取代MAC地址），
传输层（这个层次协议的职责是保证数据在 IP 地址标记的两点之间“可靠”地传输，是TCP和UDP工作的层次），
应用层（例如http）。核心是二层的 IP 和三层的 TCP，HTTP 在第四层
OSI七层网络模型：（1）物理层 （2）数据链路层，相当于TCP/IP的链接层  （3）网络层，相当于TCP/IP里的网际层
（4）传输层，相当于TCP/IP里的传输层 （5）会话层，维护网络中的连接状态，即保持会话和同步；
（6）表示层，把数据转换为合适、可理解的语法和语义； （7）应用层，面向具体的应用传输数据。
TCP 在第四层，HTTP 在第七层；
二层转发：二层应该指数据链路层，工作在二层的设备，通过查找到目标MAC地址，进行数据转发
   三层路由：三层应该指网络层，工作在三层的设备，通过解析数据包头信息，找到目标IP地址，转发数据
   ssl就在第五层



三次握手四次挥手具体？

for in效率慢的原因？
for...in的key是String类型，而非数字，它包含当前属性的名称或当前数组元素的索引，有转换过程，因此开销比较大；
但是for循环的i是Number类型，开销较小。


建立http连接什么时候断开？
HTTP/1.1 中增加了持久连接的方法，它的特点是在一个 TCP 连接上可以传输多个 HTTP 请求，
只要浏览器或者服务器没有明确断开连接，那么该 TCP 连接会一直保持。

DNS域名解析原理：
在域名解析的过程中会有多级的缓存，浏览器首先看一下自己的缓存里有没有，如果没有就向操作系统的缓存要，还没有就检查本机域名解析文件 hosts。
然后去域名服务器中寻找 即（局域网域名服务器-＞广域网域名服务器-＞顶级域名服务器-＞根域名服务器）

SSR原理

如何实现一个排序

看看serverless，pwa

具体什么场景使用什么排序？各种排序的思想？

说一说计算机32位和64位有什么区别（不是很懂）
(1)cpu要求不同， cpu有32位和64位之分，32位的cpu可以装32位系统，64位cpu既可以装32位系统也可以装64位系统
（2）运算速度不同，64位CPU的指令集可以运行64位数据指令，比32位CPU提高了一倍。
（3）寻址能力不同。32位系统的处理器最大只支持到4G内存，而64位系统最大支持的内存高达亿位
（4）兼容性不同
为什么64位之后就没有128位了（不是很懂）
（1）成本过高
（2）64位最大支持128gb。现阶段完全够用

实现一个登陆功能
（1）cookie+session登陆
首先可以利用cookie加上session的方式实现登陆，通过将sessionId存在cookie中来保持登陆的状态。因为请求的时候会将cookie放在请求头中，可以验证是否登陆。存在的问题便是服务端需要存放大量的
sessionId，压力会比较大，并且由于sessionId存在cookie中。有可能会有csrf攻击
（2）token登陆
  第一次登陆的时候服务器生成一个token并返回给客户端，客户端后续访问时，只要带上这个token完成身份
  登陆。这样可以有效避免csrf攻击。
最常见的token生成方式是JWT。
（3）sso单点登录
  单点登录指的是在公司内部搭建一个公共的认证中心，公司下的所有产品的登录都可以在认证中心里完成，一个产品在认证中心登录后，再去访问另一个产品，可以不用再次登录，即可获取登录状态。

GraphQL是facebook开源的一套数据交互方案,它为api提供了新的一种查询语言

js中的数字怎么表示
S采用IEEE 754标准定义64位浮点格式表示数字。所有的数值都由浮点数表示，比如3其实是3.0
其中分为符号位（1bit），指数位(11bit),尾数位(52bit)

JS为什么是单线程的（中间又引到了dom加载渲染的一些问题）

JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。
比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

有没有做过动画？如何实现一个元素从左向右移动，每秒1px

通过animation来做
animation-duration代表动画花费的时间
用@keyframes来设置动画的各个时间点的状态(from,to || 25%, 100%)
animation-timing-function来规定动画的速度曲线

TCP,UDP的区别
TCP面向连接，速度相对慢，可靠，数据包是顺序发顺序收，如果丢包了会重传，可以传输大量数据
UDP面向非连接，速度快，不可靠，顺序发乱序收，如果丢包不会重传，用于传输小量数据

vue3 ref和reactive使用上的区别
(1)reactive的参数必须是对象（2）修改时，ref必须加上.value。通过修改value的值，可以触发模板的重新渲染，显示最新的值
将reactive的值拿到修改后页面不会有响应     toRefs可以转换为ref

对vite的理解？   是一种新的打包方式
（1）解决缓慢的服务器启动，在webpack中，要启动一个服务要先编译，再启动。vite是先启动服务，如果需要一个文件再进行编译.即按需编译
（2）更快的热更新，Vite只需要立即编译当前所修改的文件即可，所以响应速度非常快。而 Webpack修改某个文件过后，会自动以这个文件为入
口重写build一次，所有的涉及到的依赖也都会被加载一遍，所以反应速度会慢很多。
（3）内部采用Rollup完成应用打包
（4）对vue，react都支持
缺点：（1）HMR有时候不会更新 （2）有些错误提示不友好
http头部字段：
请求头：
user-agent
refer：表示当前请求资源所在页面的完整路径：协议+域名+查询参数（注意不包含锚点信息）
host: 要被发送的目的地
origin：请求的来源站点(一般只在跨域请求中有)
accept: 期望服务器返回 html 类型的文件
accept - encoding: gzip, deflate, br            //期望服务器可以采用 gzip、deflate 或者 br 其中的一种压缩方式
accept - Charset: ISO - 8859 - 1, utf - 8              //期望返回的文件编码是 UTF-8 或者 ISO-8859-1
accept - language: zh - CN, zh                     //期望页面的优先语言是中文
响应头：
content - encoding: br                          //表示服务器采用了 br 的压缩方法
content - type: text / html; charset = UTF - 8        //表示服务器返回的是 html 文件
Connection:keep-alive
location
Set-Cookie	

优化斐波那契数列

Object.defineProperty的三个参数，第三个参数除了get set还有什么
value: 该属性对应的值。
writable:是否可写
enumerable：是否可枚举（for...in, Object.keys()）
configurable:当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。

单页面应用的优缺点：
（1）用户体验好、快，内容的改变不需要重新加载整个页面，所以相对服务器的压力也小
（2）前后端分离，服务器只要出数据就可以了
缺点
（1）不利于SEO
（2）前进后退需要程序进行管理

letcode 88     letcode 349


ajax如何在跨域的情况下携带cookie
响应头中的Access-Control-Allow-Credentials设为true

encodeURIComponent()   对url进行编码
decodeURIComponent()   对编码后的uri进行解码

ES6的class是怎么实现的？
ES6创建一个class会默认添加constructor方法，并在new调用时自动调用该方法。
然后里面的this指向的就是实例对象。class的内部定义的方法都是不可枚举的（non-enumerable），
这一点与ES5的行为不一致

浏览器标签之间的通信
1，cookie + setInterval()
cookie在用户所有浏览器标签页中都是共享的,所有的标签页都能获取并且还能进行修改。
由于更新cookie并不能触发任何事件，因此我们需要通过定时器setInterval来主动监听cookie中的值是否改变；
缺点：（1）cookie空间有限，浏览器在每一个域名下最多能设置30-50个cookie，容量最多为4k左右。
	（2）每次HHTP请求才会把当前域的cookie发送到服务器上，包括只在本地才用到的而服务器不用的，浪费带宽。
	（3）setInterval频率设置过大会影响浏览器的性能，过小会影响时效性。
 2，localStorage
localStorage也是浏览器多个页面共用的存储空间；而且localStorage在一个页面中添加、修改或者删除时，
都会在非当前页面中被动触发一个storage事件，我们通过在其他页面中监听storage事件，即可拿到storage
更新前后的值
 3，websocket
 webSocket需要用到服务端，send.html发送消息到WebSocketServer，WebSocketServer再实时把消息发给receive.html
 4，SharedWorker方式
 WebWorker只能在一个窗口内使用，而现在我们需求是多个窗口之间通信，就要用SharedWorker了。

 判断空对象的方式：
 （1）JSON.stringify(dataObject) == '{}'   （2）Object.keys(dataObject).length == 0   
 （3）定义一个函数，函数里套入for.. in循环 若进入for.. in 证明对象中有内容 没进入则对象中无内容

 死锁：
 所谓死锁，是指多个进程在运行过程中因争夺资源而造成的一种僵局

 行内元素不能设置宽高，竖直方向的margin、padding

 css实现垂直居中的方式
 一，知道居中元素的宽高
 （1）absolute + 负margin  （2）absolute + margin auto  (3)absolute + calc
 二，不知道居中元素的宽高
 （1）absolute + transform （transform: translate(-50% , -50%)） （2）flex布局  （3）table-cell布局 （父元素table-cell布局，子元素设置为行内块元素）

 == 发现有一边不是原始值类型，就会先调用valueOf方法进行转换，如果转换后依然不是原始值类型，继续用
toString方法进行转换，转成原始类型后，再用Number()方法进行转换    [] == false

isNaN 和 Number.isNaN 函数的区别？
函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true，因此非数字值传入也会返回 true ，会影响 NaN 的判断。

函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，这种方法对于 NaN 的判断更为准确。

websocket的心跳机制

就是表明client与server的连接是否还在的检测机制，原理就是定时向server发送消息，如果接收到server的响应就表明连接依旧存在；

运营商劫持DNS咋办

https的握手（TLS 1.2）
客户端对服务端发起一个client hello的消息，并且携带密码组合和随机数一以及客户端的TLS版本号。服务端接收消息后反馈客户端server hello的消息，
并且携带随机数二，确认的TLS的版本号以及使用的密码套件。然后服务端将使用的公钥证书发给客户端。客户端拿到和会去验证该证书，如果合法的话，会用
公钥加密一个随机数，反馈给服务端。服务端用私钥解密该随机数。这样双方就可以通过同一算法加密3个随机数生成密钥，最终双方发送finish消息。

TLS1.3的优化：
（1）为了兼容 1.1、1.2 等“老”协议，TLS1.3 会“伪装”成 TLS1.2，新特性在“扩展”里实现；
（2）强化安全  废除了一些加密算法
（3）TLS1.3 也简化了握手过程，完全握手只需要一个消息往返，提升了性能。

非对称加密算法 RSA  对称加密算法  AES/DES  摘要算法 SHA/MD5