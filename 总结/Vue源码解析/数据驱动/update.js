6:
_update方法的作用是把VNode渲染成真实的DOM，其核心是调用vm.__patch__方法，这个方法在不同的平台上定义是不一样的。这个方法是调用createPatchFunction方法的返回值。
creatPatchFunction内部定义了一系列的辅助方法，最终返回一个patch方法。patch方法里面会调用createElm方法，createElm 的作用是通过虚拟节点创建真实的 DOM 并插入到它的父节点中。
此方法会去判断vnode 是否包含 tag，如果包含，先简单对 tag 的合法性在非生产环境下做校验，看是否是一个合法标签；然后再去调用平台 DOM 的操作去创建一个占位符元素。
接下来调用createChildren方法去创建子元素。createChildren的逻辑就是遍历子虚拟节点，递归调用createElm。接着再调用 invokeCreateHooks 方法执行所有的 create 的钩子并把 vnode push 到 insertedVnodeQueue 中。
最后调用 insert 方法把 DOM 插入到父节点中，因为是递归调用，子元素会优先调用 insert，所以整个 vnode 树节点的插入顺序是先子后父。在 createElm 过程中，如果 vnode 节点不包含 tag，
则它有可能是一个注释或者纯文本节点，可以直接插入到父元素中。实际上整个过程就是递归创建了一个完整的 DOM 树并插入到 Body 上。





为何Vue.js源码饶了这么大一圈，把相关代码分散到各个目录？
因为前面介绍过，patch 是平台相关的，在 Web 和 Weex 环境，它们把虚拟 DOM 映射到 “平台 DOM” 的方法是不同的，并且对 “DOM” 包括的属性模块创建和更新也不尽相同。
因此每个平台都有各自的 nodeOps 和 modules，它们的代码需要托管在 src / platforms 这个大目录下。而不同平台的 patch 的主要逻辑部分是相同的，所以这部分公共的部分托管在 core 这个大目录下。