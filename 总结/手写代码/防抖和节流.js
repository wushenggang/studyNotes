函数防抖(debounce) ：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。

函数节流(throttle) ：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率。

1、函数防抖(debounce)

实现方式：每次触发事件时设置一个延迟调用方法，并且取消之前的延时调用方法
缺点：如果事件在规定的时间间隔内被不断的触发，则调用方法会被不断的延迟
应用场景：
搜索框搜索输入。只需用户最后一次输入完，再发送请求
手机号、邮箱验证输入检测
窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。


const _debounce = (func, wait) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
};


//防抖debounce代码：
function debounce(fn, delay) {
  var timeout = null; // 创建一个标记用来存放定时器的返回值
  return function (e) {
    // 每当用户输入的时候把前一个 setTimeout clear 掉
    clearTimeout(timeout);
    // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
// 处理函数
function handle() {
  console.log('防抖：', Math.random());
}

//滚动事件
window.addEventListener('scroll', debounce(handle, 500));


2、函数节流(throttle)

实现方式：每次触发事件时，如果当前有等待执行的延时函数，则直接return
应用场景：
滚动加载，加载更多或滚到底部监听
谷歌搜索框，搜索联想功能
高频点击提交，表单重复提交

//节流throttle代码：
function throttle(fn, delay) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    // 在函数开头判断标记是否为true，不为true则return
    if (!canRun) return;
    // 立即设置为false
    canRun = false;
    // 将外部传入的函数的执行放在setTimeout中
    setTimeout(() => {
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
      // 当定时器没有执行的时候标记永远是false，在开头被return掉
      fn.apply(this, arguments);
      canRun = true;
    }, delay);
  };
}

const throttle = (func, wait) => {
  let timer;

  return () => {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      func();
      timer = null;
    }, wait);
  };
};


const throttle = (func, wait) => {
  let last = 0;
  return () => {
    const current_time = +new Date();
    if (current_time - last > wait) {
      func.apply(this, arguments);
      last = +new Date();
    }
  };
};

function sayHi(e) {
  console.log('节流：', e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi, 500));
