我叫吴盛钢，我是2018年毕业的，毕业后就去同花顺工作，我的技术栈是vue.js。
在同花顺，我最近开发的主要是两方面的工作，一方面是C端的H5页面。用的技术栈是vue.js。主要就是开发同花顺APP中一个叫做数据中心的模块，
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