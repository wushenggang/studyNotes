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


function fn(content) {
	return new Promise(function (reslove, reject) {
		if (content > 3) {
			resolve(true)
		} else {
			reject(false)
		}
	})
}
var number = Math.random();
var timer = setInterval(
	fn(number).then((data) => {
		console.log('continue')
	}, (err) => {
		clearInterval(timer);
		console.log('done')
	}), 5000);

setTimeout(function () {
	clearInterval(timer);
	console.log('done')
}, 60000)













function fn(num) {
	return new Promise((resolve, reject) => {
		if (num > 3) {
			resolve()
		} else {
			reject()
		}
	})
}

let timer = setInterval(() => {
	let n = Math.random() * 10
	fn(n).then(() => {
		console.log('continue')
	}, () => {
		clearInterval(timer)
		console.log('done')
	})
}, 5000)

setTimeout(() => {
	if (timer) {
		clearInterval(timer)
		console.log('done')
	}
}, 60000)