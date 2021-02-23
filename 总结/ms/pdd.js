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

vue-router实现原理: https://zhuanlan.zhihu.com/p/37730038

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
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
二、子组件更新过程
父beforeUpdate->子beforeUpdate->子updated->父updated
三、父组件更新过程
父beforeUpdate->父updated
四、销毁过程
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

是否用过keep - alive


