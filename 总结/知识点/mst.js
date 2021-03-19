参考网址：https://juejin.cn/post/6885112613164810247#heading-0

HTML
1, HTML语义化的理解
举例法
HTML 语义化就是使用正确的标签（总结）段落就写 p 标签，标题就写 h1 标签，文章就写article标签，视频就写video标签，等等。
阐述法
首先讲以前的后台开发人员使用table布局，然后讲美工人员使用div + css布局，最后讲专业的前端会使用正确的标签进行页面开发。
2，DOCTYPE的作用
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
	6，手写一个闭包
	7，讲一下工作中哪些地方用到了闭包
	8，对js语言的看法，特点，优缺点
	9，promise的实现
	10，数组map forEach自己实现
	11，实现并发函数，函数参数为 urls (请求列表数组)、max(最大并发数量) 、fn(回调)，请求都成功执行回调
	12，函数柯里化

	myname = undefined
	showName = function() {}


		let myname= '极客时间'
	{
			console.log(myname) 
		let myname= '极客邦'
	}


	