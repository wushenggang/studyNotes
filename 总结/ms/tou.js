我叫吴盛钢，我是从大一的时候开始接触到前端开发的，从那个时候就萌生了想要成为一个程序员的想法。从大三的暑假开始，我就正式开始了程序员的职业道路，
我加入了一家公司进行实习，主要做的是博物馆网站的开发。正是因为这份工作，让我对自己的职业规划有了明确的目标，那就是成为一个热血沸腾的程序员。
然后在2018年毕业，我很幸运地去了同花顺参加工作，在同花顺我的技术栈是vue.js。
在最近，我主要做了两方面的工作，一方面是C端的H5页面。主要就是开发同花顺APP中一个叫做数据中心的模块，
该模块主要是展示股市中的一些数据信息，给用户一些投资建议。这个项目主要是由3个前端进行页面开发，
我们之间通过vuex来进行状态管理。另外，我也参与了后台管理系统的开发，该项目是一个行为分析系统，主要是用于运营人员对用户访问信息的监控。
主要的技术栈是vue.js, UI框架是用的iview。我做的主要工作是将原先的代码进行重构，因为之前的老代码非常冗余。
很多地方都会用到一些相同的方法。我首先将这些公共的方法抽离成一些单独的文件。方便进行统一修改。并且我将一个页面根据不同的功能板块进行分组件开发。这样的话，
如果遇到什么问题。代码结构更加清晰，方便维护。

一些情况下对非可点击元素（label，span）监听click事件，ios下不会触发，css增加cursor：pointer就搞定了
ios数字当作号码 meta content tepelhone = no
ios position: fixed 会随着屏幕的滚动而滚动  把需要滚动的用一个div包起来，然后也fixed
iphoneX的适配：我们必须把页面限制在安全范围内，但是不影响整体效果。viewport - fit是专门为了适配iPhoneX而诞生的一个属性，它用于限制网页如何在安全区域内进行展示。
contain: 可视窗口完全包含网页内容，cover：网页内容完全覆盖可视窗口。默认情况下为contain。
我们需要将顶部和底部合理的摆放在安全区域内，iOS11新增了两个CSS函数env、constant，用于设定安全区域与边界的距离。我们必须指定viweport - fit后才能使用这两个函数。constant在iOS < 11.2的版本中生效，env在iOS >= 11.2的版本中生效，这意味着我们往往要同时设置他们，将页面限制在安全区域内：
body {
  padding - bottom: constant(safe - area - inset - bottom);
  padding - bottom: env(safe - area - inset - bottom);
}

ES6  let const 箭头函数 Promise  解构赋值 模板字符串 展开操作符(...)  默认参数  import export class extends Map Set
解构从数组和对象提取值并赋值给独特的变量    for...of循环 可以循环任何可迭代（也就是遵守可迭代协议）类型的数据。默认情况下，
包含以下数据类型：String、Array、Map 和 Set

跨域资源共享（CORS）来跨域，服务器设置Access - Control - Allow - Origin HTTP响应头之后，浏览器将会允许跨域请求．

提升首页加载速度：
1，路由懒加载 2，打包文件去掉map文件 3，很多第三方库可以按需引用。如果不能按需引用，可以采用cdn外部加载
4, 图片懒加载  5，减少关键资源的数量和大小（删除不必要的注释和GZIP压缩） 6，通过给script标记async或者defer来异步加载js文件
7，利用服务端ssr(有利于SEO和首屏渲染)和预渲染   前者是服务端将页面给浏览器，后者是直接构建出页面给浏览器

提升页面的性能：
1，尽量减少页面的重排（回流）
方法：1，避免使用table布局 2，可以用position: absolute使脱离文档流 3，避免频繁操作样式，可以一次性重写style属性，或者将样式列表定义为 class 并一次性更改 class 属性。
4，避免频繁操作 DOM，创建一个 documentFragment（文档片段），在它上面应用所有 DOM 操作，最后再把它添加到文档中。

2，扁平化 Store 数据结构
3，利用Object.freeze()提升性能，冻结一个对象，不会为对象加上 setter getter 等数据劫持的方法
4，事件委托 5，输入搜索时，可以用防抖debounce等优化方式，减少http请求。9，滚动条调用接口时(或者提交操作) ，可以用节流throttle等优化方式，减少http请求；
6，使用Web Workers（主线程之外的线程，但web workers中没有DOM，CSSOM环境，所以无法操作DOM，可以将一些和DOM操作无关且费时的任务放入进行执行）
主线程采用new命令，调用Worker('work.js')构造函数，新建一个 Worker 线程，主线程调用worker.postMessage()方法，向 Worker 发消息，主线程通过worker.onmessage指定监听函数。
Worker 线程内部需要有一个监听函数，监听message事件
7，为item设置唯一key值
8，细分vue组件
9，减少watch的数据
10，事件的销毁  ，需要在组件销毁时手动移除一些事件监听，以免内存泄漏，类似addEventListener。需要remove
11，合理利用computed属性


双向绑定:
在vue2中使用Object.defineProperty实现
缺陷：
1，无法检测到新的属性的添加和删除
2，无法监听数组的变化
3，嵌套深的话，需要深度遍历，浪费内存
vue3中通过proxy对象来监听属性的变化，实现数据的监控。在get函数里进行依赖收集，
在set里面用于触发依赖更新。
vue3的优势，加了proxy后，可以直接拦截所有对象上面的操作，对数组也是支持的。同时有一个
缓存的机制，多层对象嵌套的时候可以使用懒代理。在这里比较需要注意的点是，在vue3源码里面，
对数组方法里面的add和delete单独做了处理。因为你改变了数组长度的时候，除了去触发数组内容的
set方法之外，还会触发数组长度的set方法。所以这个时候是需要去避免多次调用set方法的。


虚拟DOM：
在2里面可以保证组件更新的最小化，但是当一个组件内部有动态变量进行更新的时候，需要遍历整个
组件的DOM树来进行一个patch去对比，由于这个特性，在一些组件里面大部分都是静态节点，只有少部分
动态节点的情况下，整个组件的DOM树遍历是比较浪费性能的。而且要明确的是，在2里面是VDOM的性能和模板
的大小是成正相关的，和动态节点的数量是无关的。

vue3在对VDOM生成DOM节点的时候，它会给每一个动态节点加一个标志，

vue3对虚拟DOM主要做了哪些优化工作呢？
首先是将AST语法树上面的节点结构，根据动态指令，比如说if,for, slot切割为嵌套
的一些区块，每一个区块用一个数组来进行动态节点的保存，在3里面编译器会主动
检测静态节点，将静态节点提升到render函数之外。可以大大提高性能。同时vue3会给
元素标记一个PatchFlag，无论嵌套的多深，动态节点都是直接跟根节点绑定的。这样
只需要去遍历动态节点进行更新就可以。新策略将虚拟DOM节点渲染的性能与模板的大小
进行了解耦，变为与动态节点的数量有关。比2的性能大概高了2到5倍


Tree - Shaking:
2.0的现有限制是，无论你使不使用一些功能和方法，都要把它下下来。那在3的时候，它
将全局的API和内部的一些组件都通过ES的模块来进行导出。webpack这种打包工具在
打包的时候，Tree - Shaking就会更加友好。

//  Composition API:
//  主要有6个，比较要注意setup这个函数，替代了2里面我们常用的data()。同时3里面beforeCreate,
//  created两个生命周期，也将直接替换为setup()。

使用TypeScript

内部模块的解耦：
2.0的隐式耦合已经很严重了， 我们单独去理解源码的一部分的确比较困难，
在3里面，用到了一个monorepo结构。monorepo结构是把所有的模块都统一放在
一个主分支上面。如果有什么新的功能，拉一个分支出来去实现那个新的功能。

Composition API:
好处：之前代码重用的话使用mixin有很多问题，比如我们不知道它给我们的组件增加了什么。还可能导致与现有属性和函数名称冲突。
但composition API没有这种问题，因为它用到了什么对象方法都需要按需引入然后在setup函数中返回，所以我们知道从公共部分引入了哪些方法属性，所以很清晰。

定义 methods、watch、computed、data数据 等都放在了 setup() 函数中,
	然后返回它们，以便它们可以在模板中使用。 我们没有在setup函数返回的内容将在模板中不可用。setup()函数会在created()生命周期之前执行。
通过reactive()或者ref()可以创建一个响应式对象
computed() 用来创建计算属性，返回值是一个 ref() 实例。
readonly()传入一个响应式对象、普通对象或 ref ，返回一个只读的对象代理。
watchEffect() 会立即执行传入的函数，并响应式侦听其依赖，并在其依赖变更时重新运行该函数。
watch 和 Vue2.x 中是一样的，watch 需要侦听数据，并执行它的侦听回调。
isRef() 顾名思义，是用来判断某个值是否为 ref() 创建出来的响应式的值。
toRefs() 可以将 reactive() 创建出来的响应式对象转换成内容为 ref 响应式的值的普通对象

review时有哪些规范
（1）是否实现了预期的功能
（2）是否简单易懂，能组件化的是否组件化了，是否有重复的代码
（3）是否符合命名规范这样
（4）难懂的代码是否有加上必要的注释
（5）有些临界条件是否有考虑到
好好想想如何说自己的项目




代码重构的话，如何保证安全上线，主要是通过分模块依次上线，把风险降到最低。
通过什么方式来知道需要优化哪一块。通过埋点来看首屏渲染的速度，
有啥难点，就是性能优化这一块。
分组件开发的困难


怎么去设计一个组件封装
组件封装的目的是为了重用，提高开发效率和代码质量，主要是低耦合，单一职责，可复用性，可维护性。
低耦合的注意点：
1.数据从父组件传入（子组件本身尽量不要生产数据，如果需要生成数据，只能在组件内部进行使用，不要传递出去。）
2.在父组件中处理事件（父组件中处理的事件是和后端交互的事件，比如发起的axios的请求，但并不是所有的事件都放到父
组件中处理，比如组件内部的一些交互行为，或者处理的数据只在组件内部传递，就可以在子组件中处理。）
3.记得留一个slot（详细上方连接）一个通用的组件，往往不能完美的适应所有的应用场景，所以在封装组件的时候，
只需要完成组件的80%的功能，剩下的20%让父组件通过slot解决。
4.不要依赖vuex
如果要抽离组件尽量不要使用vuex来实现参数的传递，因为vuex是用来管理组件状态的，虽然可以用来传参，但是不推荐，
可以选择放到localstorage中，或者通过props传递等方式。
5.合理使用scoped
样式中添加scoped可以让样式只对当前组件生效，但是一味使用scoped，会产生重复代码，所以需要有一个全局的样式，
组件内只写针对于组件的样式，避免重复的样式代码。
6.组件具有单一职责
封装业务组件或者基础组件，如果不能给这个组件起一个有意义的名字，证明这个组件承担的职责可能不够单一，需要继续抽组件，
 直到它可以是一个独立的组件即可。


 你了解的设计模式(观察者模式的优缺点)
 工厂模式：
 简单工厂模式：起到的作用就是隐藏了创建实例的复杂度，只需要提供一个接口，可以根据参数的不同返回不同类的实例。
 优点：只需要传入参数就能创建，使用方便  缺点：不够灵活，新增一个产品就要修改共产类
 在 Vue 源码中，你也可以看到工厂模式的使用，比如创建异步组件。我们只需要调用createComponent传入参数就能创建
 一个组件实例，但是创建这个实例是很复杂的一个过程，工厂帮助我们隐藏了这个复杂的过程，只需要一句代码调用就能实现功能。
 
 单例模式：单例模式的核心就是保证全局只有一个对象可以访问，我们只需要用一个变量确保实例只创建一次就行。
 在 Vuex 源码中，通过一个外部变量来控制只安装一次 Vuex
 
 适配器模式：适配器用来解决两个接口不兼容的情况，不需要改变已有的接口，通过包装一层的方式实现两个接口的正常协作。
 在 Vue 中，我们其实经常使用到适配器模式。比如父组件传递给子组件一个时间戳属性，组件内部需要将时间戳转为正常的
 日期显示，一般会使用computed来做转换这件事情，这个过程就使用到了适配器模式。
 
 装饰模式：装饰模式不需要改变已有的接口，作用是给对象添加功能。可以使用es7的装饰器语法，类似于@readonly
 
 代理模式：代理是为了控制对对象的访问，不让外部直接访问到对象。比如事件代理就用到了代理模式
 发布订阅者模式（观察者模式）：通过一对一或者一对多的依赖关系，当对象发生变化时，订阅方都会收到通知。
 在vue中，实现响应式也是使用了该模式，对于要实现响应式的对象来说，在get的时候会进行依赖收集，当改变了
 对象的属性时，就会触发派发更新。
 
 外观模式：外观模式提供了一个接口，隐藏了内部的逻辑，更加方便外部调用。
 举个例子来说，我们现在需要实现一个兼容多种浏览器的添加事件方法，对于不同的浏览器，添加事件的方式可能会存在兼容问题。
 如果每次都需要去这样写一遍的话肯定是不能接受的，所以我们将这些判断逻辑统一封装在一个接口中，外部需要添加事件只需要调用addEvent即可。