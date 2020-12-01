var bound = fn.bind2(obj, 1)
bound(2)

// 当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效
Function.prototype.bind2 = function () {
  var self = this
  var thisArgs = arguments[0]
  var args = Array.prototype.slice.call(arguments, 1)
  var resultFn = function () {
    // 或者 this instanceof resultFn
    return self.apply(resultFn.prototype.isPrototypeOf(this) ? this : thisArgs, args.concat(Array.prototype.slice.call(arguments)))
  }
  resultFn.prototype = self.prototype
  return resultFn
}
