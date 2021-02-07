Vue.js提供了Vue.use方法用来给Vue.js安装插件，内部通过调用插件的install方法(当插件是一个对象的时候)来进行插件的安装。如果是函数直接执行函数

Vuex的install的内部实现:
主要做了两件事:
1, 防止vuex被重复安装
2，然后执行applyMixin。目的是执行VueInit方法初始化vuex。针对vue1.0和2.0做了不同的处理。
如果是Vue1.0，Vuex会将vuexInit方法放入Vue的_init方法中，而对于Vue2.0，则会将vuexinit混淆进Vue的beforeCreate钩子中(Vue.mixin({ beforeCreate: vuexInit })) 。
vuexInit会尝试从options中获取store。如果当前组件是根组件（Root节点），则options中会存在store，直接获取赋值给$store即可。如果当前组件非根组件，则通过options中的parent获取父组件的$store引用。这样就可以通过this.$store来访问全局的Store实例。
