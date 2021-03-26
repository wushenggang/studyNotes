class Bus {
  constructor() {
    this.callbacks = {}
  }
  $on(name, fn) {
    this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(fn)
  }
  $emit(name, ...args) {
    if (this.callbacks[name]) {
      //存在遍历所有callback
      this.callbacks[name].forEach(cb => cb(...args))
    }
  }
  $off(name, fn) {
    let callbacks = this.callbacks[name] || []
    this.callbacks[name] = callbacks.filter(cb => cb !== fn)
  }
  $once(name, fn) {
    let func = function (...args) {
      fn(...args)
      this.$off(name, func)
    }
    this.$on(name, func)
  }
}


const EventBus = new Bus()
EventBus.$on('fn1', function (msg) {
  alert(`订阅的消息是：${msg}`);
});
EventBus.$emit('fn1', '你好，世界！');