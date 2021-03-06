Function.prototype.call1 = function () {
  var fn = this
  var suzhu = arguments[0] || window
  var canshu = []
  if (arguments.length > 1) {
    // canshu = Array.from(arguments).slice(1) 两种方法
    canshu = [].slice.call(arguments, 1)
  }
  suzhu.fn = fn
  return suzhu.fn(...canshu)
}

Function.prototype.call3 = function () {
  let self = this;
  let thisArgs = arguments[0] || window
  let args = [...arguments].slice(1)
  thisArgs.fn = self
  return thisArgs.fn(...args)
}

var a = { b: 1 }
function c(arg1, arg2, arg3) {
  console.log(this.b + arg1 + arg2 + arg3)
}
c()
c.call(a)
c.call1(a, 1, 2, 3)

Function.prototype.call2 = function () {
  let t = [...arguments][0]
  let args = [...arguments].slice(1)
  let self = this;
  return self.apply(t, args)
}