1:
Vue实际上是一个类，Vue通过new关键字初始化，然后会调用this._init方法, 这个方法主要干了几件事，
合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化data, props, computed, watcher
等等。在初始化的最后，检测到如果有 el 属性，则调用 vm.$mount 方法挂载 vm，挂载的目标就是把模板渲染成最终的 DOM