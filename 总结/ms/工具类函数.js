检测是否为数组
export default const judgeArr = (arr) => {
  if (Array.isArray(arr)) {
    return true;
  }
}

全部满足

export const allTrueArr = (arrs) => {
  return arr.every((arr) => {
    return arr > 20;//如果数组的每一项都满足则返回true,如果有一项不满足返回false,终止遍历
  })
}




获取当前时间
const obtainDate5 = () => {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  let arr = [minute, second]
  arr = arr.map(item => {
    return item < 10 ? '0' + item : item
  })
  return `${year} ${month}-${day} ${hour}:${arr[0]}:${arr[1]}`
}

函数防抖

function debounce(fn, delay) {
  let timer = null;
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

函数节流

function throttle(fn, delay) {
  let timer = null
  return () => {
    if (timer) {
      return
    }
    setTimeout(() => {
      fn(this, arguments)
      timer = null
    }, delay)
  }
}

取URL的参数

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