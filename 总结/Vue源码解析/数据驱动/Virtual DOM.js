4:

Virtual DOM 就是用一个原生的 JS 对象去描述一个 DOM 节点，所以它比创建一个 DOM 的代价要小很多。

Virtual DOM 除了它的数据结构的定义，映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程。
那么在 Vue.js 中，VNode 的 create 是通过之前提到的 createElement 方法创建的，我们接下来分析这部分的实现。