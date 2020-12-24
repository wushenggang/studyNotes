createElement 方法实际上是对 _createElement 方法的封装，真正创建VNode的函数是_createElement
_createElement方法有五个参数，context表示VNode的上下文环境，tag表示标签，data表示VNode的数据，children表示当前VNode的子节点，
normalizationType表示子节点规范的类型，主要参考render函数是编译生成还是用户手写的

createElement中的两个重点的流程：children的规范化以及VNode的创建
children的规范化：
_createElement 接收的第 4 个参数 children 是任意类型的，因此我们需要把它们规范成 VNode 类型。这里根据 normalizationType 的不同，调用了 normalizeChildren(children) 和 simpleNormalizeChildren(children) 方法
simpleNormalizeChildren 方法调用场景是 render 函数是编译生成的。normalizeChildren 方法的调用场景有 2 种，一个场景是 render 函数是用户手写的，当children只有一个节点的时候，Vue.js 从接口层面允许用户把 children 写成基础类型用来创建单个简单的文本节点，
这种情况会调用 createTextVNode 创建一个文本节点的 VNode；另一个场景是当编译 slot、v -for 的时候会产生嵌套数组的情况，会调用 normalizeArrayChildren 方法，接下来看一下它的实现：
normalizeArrayChildren 主要的逻辑就是遍历 children，获得单个节点 c，然后对 c 的类型判断，如果是一个数组类型，则递归调用 normalizeArrayChildren; 如果是基础类型，则通过 createTextVNode 方法转换成 VNode 类型；



