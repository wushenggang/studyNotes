ajax的流程
401状态码
axios和fetch的区别
设计模式
proxy具体咋用


function fn( content ) {
	return new Promise(function( reslove,reject ) {
	if(content>3){
		resolve(true)
	}else {
		reject(false)
		}
	})
}
var number=Math.random();
var timer = setInterval(
fn(number).then(( data ) => {
	console.log('continue')
},(err) => {
	clearInterval(timer);
	console.log('done')
}), 5000);

setTimeout(function(){
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
	let n = Math.random()*10
	fn(n).then(() => {
		console.log('continue')
	}, () => {
		clearInterval(timer)
		console.log('done')
	})
}, 5000)

setTimeout(() => {
	if(timer) {
		clearInterval(timer)
		console.log('done')
	}
}, 60000)