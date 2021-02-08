使用Vue.use()安装vue - router。原理是调用其install方法。
install方法中做了什么：
首先判断是否已经安装好了。若是，直接返回。它的安装核心是通过Vue.mixin。向应用的所有组件混入 beforeCreate 和
destroyed钩子函数。在beforeCreate钩子函数中，定义了私有属性_routerRoot 和 _router。
将Vue实例赋值给_routerRoot，_router则赋值为传入的router。(this._routerRoot = this; this._router = this.$options.router)
用Vue的defineReactive方法把 _route 变成响应式对象。然后给Vue的原型上挂载了两个对象属性 $router 和 $route。这样所有组件实例
可以通过访问this.$router和this.$route来访问。（this.$router 是路由实例，对外暴露了像this.$router.push、
this.$router.replace等很多api方法，this.$route包含了当前路由的所有信息。）
后面通过 Vue.component 方法定义了全局的 < router - link > 和 < router - view > 两个组件。最后定义了路由守卫的合并策略，采用了Vue的合并策略。

