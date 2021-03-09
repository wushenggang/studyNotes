Function.prototype.apply2 = function () {
  let t = [...arguments][0]
  let self = this
  let args = [...arguments][1]
  if (args) {
    return self.call(t, ...args)       // or   t.fn = self   return t.fn(...args)
  } else {
    return self.call(t)
  }
}


fn1.apply(obj, [x, y])