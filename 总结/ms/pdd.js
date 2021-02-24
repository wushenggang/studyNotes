自我介绍

webpack
是否手写过loader和pulgin
用过哪些配置，loader
热更新的原理
HMR（Hot Module Replacement）是webpack一个重要的特性，当代码文件修改并保存之后，webapck通过watch监听到文件发生变化，
会对代码文件重新打包生成两个模块补丁文件manifest（js）和一个（或多个）updated chunk（js），将结果存储在内存文件系统中，
通过websocket通信机制将重新打包的模块发送到浏览器端，浏览器动态的获取新的模块补丁替换旧的模块，浏览器不需要刷新页面就可以实现应用的更新。

vue
vue - router的模式，history和hash。有什么区别
hash:
这种 #。后面 hash 值的变化，并不会导致浏览器向服务器发出请求，浏览器不发出请求，也就不会刷新页面。
另外每次 hash 值的变化，还会触发hashchange 这个事件，通过这个事件我们就可以知道 hash 值发生了哪些变化。
然后我们便可以监听hashchange来实现更新页面部分内容的操作

history:
地址中没有#，更加美观。HTML5 标准发布。多了两个 API，pushState 和 replaceState，通过这两个 API 可以改变 url 地址且不会发送请求。
pushState 配合 popstate 监听。但因为没有 # 号，所以当用户刷新页面之类的操作时，浏览器还是会给服务器发送请求。为了避免出现这种情况，
所以这个实现需要服务器的支持，需要把所有路由都重定向到根页面。

vue - router实现原理: 我们需要对current.route做数据劫持。一旦current.route更新，我们可以及时的更新当前页面(https://zhuanlan.zhihu.com/p/37730038)

  vuex的使用
父传子，子传父的用法
eventHUb的原理（手写发布订阅模式）

  用过哪些ES6
Promise.all()
Promise.race()

手写ivew中的Modal框，封装成一个vue组件。需要挂载到body上，如何挂载到body上

vue的生命周期

父组件中有子组件。生命周期是咋样的

一、加载渲染过程
父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted
二、子组件更新过程
父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated
三、父组件更新过程
父beforeUpdate -> 父updated
四、销毁过程
父beforeDestroy -> 子beforeDestroy -> 子destroyed -> 父destroyed

是否用过keep - alive
keep - alive是Vue.js的一个内置组件。它能够将不活动的组件实例保存在内存中，而不是直接将其销毁
用法是将需要缓存的组件用 < keep - alive > 标签包裹起来。include与exclude两个属性来控制缓存哪些组件，不缓存哪些组件或者配置router.meta 属性，
  在 < router - view v -if= "$route.meta.keepAlive" > 中进行判断是否缓存
activated()函数就是一个页面激活后的钩子函数，一进入页面就触发(如果已经有了缓存就不会再一次created和mounted)
deactivated() 页面关闭时触发
场景： 一个填写表单的页面。其中一个选项后需要打开新的页面来选定。当选择好后返回表单页面时需要能够保留之前填写的数据。
beforeRouteLeave(to, from, next) {
  // 设置下一个路由的 meta
  to.meta.keepAlive = true;  // 让 A 缓存，即不刷新
  next();
}
通过beforeRouteLeave可以做很多事
实现原理：created钩子会创建一个cache对象，用来作为缓存容器，保存vnode节点。destroyed钩子则在组件被销毁的时候清除cache缓存中的所有组件实例。
接下来该组件的name（存在组件名则直接使用组件名，否则会使用tag）。接下来会将这个name通过include与exclude属性进行匹配，匹配不成功（说明不需要进行缓存）则不进行任何操作直接返回vnode。
假如匹配成功，根据key在this.cache中查找，如果存在则说明之前已经缓存过了，直接将缓存的vnode的componentInstance（组件实例）覆盖到目前的vnode上面。否则将vnode存储在cache中。
最后返回vnode（有缓存时该vnode的componentInstance已经被替换成缓存中的了）。用watch来监听pruneCache与pruneCache这两个属性的改变，在改变的时候修改cache缓存中的缓存数据。
