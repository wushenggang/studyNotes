let obj = {
  key_1: 1,
  key_2: 2
}

function objWatcher(key) {
  console.log(key + '的值发生改变：', this[key])
}

bindData(obj, objWatcher)

obj.key_1 = 2
obj.key_2 = 1


function bindData(obj, objWatcher) {
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      Object.defineProperty(obj, key, {
        get: function () {
          let copyKey = '_' + key;
          return this[copyKey]
        },
        set: function (val) {
          let copyKey = '_' + key;
          this[copyKey] = val;
          objWatcher.call(this, key)
        }
      })
    }
  } else {
    console.log('must be Object')
  }
}


// 用Promise实现一个函数，每五秒判断一个随机数是否大于3，大于则打印continue，
// 小于则结束流程，若随机数一直大于3，程序在60秒后也结束，并打印done

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