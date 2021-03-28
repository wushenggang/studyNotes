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




<<<<<<< HEAD
1. 工厂模式
2. 链式调用
3. 防抖
4. 优先级队列

return new class {

}

setTimeout(() => console.log(this.taskQueue), 0)

this.taskQueue.push(`nice to meet you ${this.name2}`)

this.taskQueue.push(`nice to meet you ${this.name2}`)

this.taskQueue.unshift(`nice to meet you ${this.name2}`)

实现一个GreetRobot，使之具有以下能力
1. 执行GreetRobot('bb8')
输出: Hi this is bb8!
2. 执行GreetRobot('bb8').greet('Bob')
输出: Hi this is bb8!
Nice to meet you Bob.
3. 执行GreetRobot('bb8').greet('Bob').greet('Jerry')
输出: Hi this is bb8!
Nice to meet you Bob.
Nice to meet you Jerry.
4. 执行GreetRobot('bb8').greet('Bob').greetVip('Mike')
输出: Glad to see you Mike~
Hi this is bb8!
Nice to meet you Bob.
5. 执行GreetRobot('bb8').greetVip('Marry').greetVip('Mike')
输出: Glad to see you Mike~
Glad to see you Marry~
Hi this is bb8!
=======
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



function GetRequest() {
  var url = location.search; //获取url中"?"符后的字串
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
var Request = new Object();
Request = GetRequest();

异常处理

export const requestError = (code, message) => {

}


switch(n)
{
    case 1:
        执行代码块 1
        break;
    case 2:
        执行代码块 2
        break;
    default:
        与 case 1 和 case 2 不同时执行的代码
}

1, js实现数组flat
  (1)
arr_flat = arr.flat(Infinity);
(2) 递归
let result = [];
let fn = function (ary) {
  for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (Array.isArray(ary[i])) {
      fn(item);
    } else {
      result.push(item);
    }
  }
}
  (3) reduce实现
function flatten(ary) {
  return ary.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}
(4) ary = JSON.stringify(ary).replace(/(\[|\])/g, '').split(',')
  (5) while (ary.some(Array.isArray)) {
    ary = [].concat(...ary);
  }

两个Promise，任意一个resolve, 执行resolve, 两个promise都报错，才执行reject

function fn1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1)
    }, 200)
  })
}

function fn2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    }, 300)
  })
}
async function fn(fn1, fn2) {
  let flag = ''
  fn1().then(() => { }).finally(() => {
    flag = '1'
  })
  fn2().then(() => { }).finally(() => {
    flag = '2'
  })
  try {
    await Promise.race([fn1(), fn2()])
  } catch (err) {
    try {
      if (flag == '1') {
        console.log('111111111111111111')
        await fn2()
      } else {
        console.log('22222222222')
        await fn1()
      }
    } catch (err2) {
      console.log(err2)
      return Promise.reject()
    }
  }
  return Promise.resolve()
}

fn(fn1, fn2).then(() => {
  console.log('chenggong')
}, () => {
  console.log('shibai')
}).catch(err => {
  console.log(err)
})
>>>>>>> e1e13730ea0ad0fa9e02de010dedcc3f90e9a92c
