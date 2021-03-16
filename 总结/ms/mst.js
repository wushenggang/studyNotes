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

css权重问题
!important > 内联样式 > ID选择器 > class选择器 > 元素选择器 > 通用选择器，子选择器等权重最低

vue中的data为什么一定要是函数
组件在注册的时候的 data 指定为一个对象 { count: 0 } 。那么之后我们进行组件复用的时候，我们都会共享到同样一个 data 对象。

但如果我们返回一个函数：因为 data 是一个函数，我们可以在每次实例化的时候都通过运行函数返回一个全新的 data，这样我们就不会造成 data 之间的共享和混淆了。


IndexedDB 就是浏览器提供的本地数据库，它可以被网页脚本创建和操作。IndexedDB 允许储存大量数据，提供查找接口，还能建立索引