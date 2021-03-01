Vue.js提供了Vue.use方法用来给Vue.js安装插件，内部通过调用插件的install方法(当插件是一个对象的时候)来进行插件的安装。如果是函数直接执行函数

Vuex的install的内部实现:
主要做了两件事:
1, 防止vuex被重复安装
2，然后执行applyMixin。目的是执行VueInit方法初始化vuex。针对vue1.0和2.0做了不同的处理。
如果是Vue1.0，Vuex会将vuexInit方法放入Vue的_init方法中，而对于Vue2.0，则会将vuexinit混淆进Vue的beforeCreate钩子中(Vue.mixin({ beforeCreate: vuexInit })) 。
vuexInit会尝试从options中获取store。如果当前组件是根组件（Root节点），则options中会存在store，直接获取赋值给$store即可。如果当前组件非根组件，则通过options中的parent获取父组件的$store引用。这样就可以通过this.$store来访问全局的Store实例。
Store的实现: Store的构造类除了初始化一些内部变量以外，主要执行了installModule（初始化module）以及resetStoreVM（通过VM使store“响应式”）。
installModule的作用主要是为module加上namespace名字空间（如果有）后，注册mutation、action以及getter，同时递归安装所有子module。
resetStoreVM首先会遍历wrappedGetters，使用Object.defineProperty方法为每一个getter绑定上get方法，这样我们就可以在组件里访问this.$store.getters.test就等同于访问store._vm.test。
之后Vuex采用了new一个Vue对象来实现数据的“响应式化”，运用Vue.js内部提供的数据双向绑定功能来实现store的数据与视图的同步更新。  store._vm = new Vue({ data: { $$state: state }, computed })

严格模式：严格模式下，所有修改state的操作必须通过mutation实现，否则会抛出错误。
首先，在严格模式下，Vuex会利用vm的$watch方法来观察$$state，也就是Store的state，在它被修改的时候进入回调。我们发现，回调中只有一句话，用assert断言来检测store._committing，当store._committing为false的时候会触发断言，抛出异常。
通过commit（mutation）修改state数据的时候，会在调用mutation方法之前将committing置为true所以不会报错否则就报错


1，vuex的store是如何挂载注入到组件中呢？
首先利用vue的插件机制，使用Vue.use(vuex)时，会调用vuex的install方法，装载vuex。在install方法中会执行applyMixin的方法。
该方法会初始化vuex, 如果是Vue1.0，Vuex会将vuexInit方法放入Vue的_init方法中，而对于Vue2.0，
则会将vuexinit混淆进Vue的beforeCreate钩子中(Vue.mixin({ beforeCreate: vuexInit })) 。
vuexInit方法中实现了store注入vue组件实例(this.$store = options.store) 。

2，vuex的state和getters是如何映射到各个组件实例中响应式更新状态呢？
主要是看resetStoreVM这个方法，
Vuex的state状态是响应式，是借助vue的data是响应式, 通过new Vue。将state存入vue实例组件的data中实现的；
Vuex的getters则是借助vue的计算属性computed实现数据实时监听。

首先会遍历wrappedGetters，使用Object.defineProperty方法为每一个getter绑定上get方法。使可以通过
store._vm来访问getters中的对象。最后通过store._vm = new Vue 来实现getters的实时监听
