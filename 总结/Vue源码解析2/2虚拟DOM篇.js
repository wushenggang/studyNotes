Vue中的虚拟DOM
就是用一个JS对象来描述一个DOM节点
直接操作真实DOM是非常消耗性能的，以JS的计算性能来换取操作真实DOM所消耗的性能
我们可以用JS模拟出一个DOM节点，称之为虚拟DOM节点。当数据发生变化时，我们对比变化前后的虚拟DOM节点，
通过DOM - Diff算法计算出需要更新的地方，然后去更新需要更新的视图。

Vue中的DOM - Diff
比新旧两份VNode并找出差异的过程就是所谓的DOM - Diff过程, 把 DOM - Diff过程叫做patch过程。
整个patch无非就是干三件事
创建节点：新的VNode中有而旧的oldVNode中没有，就在旧的oldVNode中创建。
删除节点：新的VNode中没有而旧的oldVNode中有，就从旧的oldVNode中删除。
更新节点：新的VNode和旧的oldVNode中都有，就以新的VNode为准，更新旧的oldVNode。
（1）创建节点
有三种类型的节点可以被创建并插入到DOM中，分别为元素节点，文本节点，注释节点。
所以Vue在创建节点的时候会判断在新的VNode中有而旧的oldVNode中没有的这个节点是属于哪种类型的节点，从而调用不同的方法创建并插入到DOM中。
（2）删除节点
如果某些节点在新的VNode中没有而在旧的oldVNode中有，那么就需要把这些节点从旧的oldVNode中删除。删除节点非常简单，只需在要删除节点的父元素上调用removeChild方法即可。
（3）更新节点
静态节点：这个节点里面只包含了纯文字，没有任何可变的变量。只要这个节点第一次渲染了，那么它以后就永远不会发生变化。
需要对以下3中情况进行判断并处理：
1：如果VNode和oldVNode均为静态节点。我们说了，静态节点无论数据发生任何变化都与它无关，所以都为静态节点的话则直接跳过，无需处理。

2：如果VNode是文本节点，如果VNode是文本节点即表示这个节点内只包含纯文本，那么只需看oldVNode是否也是文本节点，
如果是，那就比较两个文本是否不同，如果不同则把oldVNode里的文本改成跟VNode的文本一样。如果oldVNode不是文本节点，
那么不论它是什么，直接调用setTextNode方法把它改成文本节点，并且文本内容跟VNode相同。

3：如果VNode是元素节点，则又细分以下两种情况：
该节点包含子节点：
如果新的节点内包含了子节点，那么此时要看旧的节点是否包含子节点，如果旧的节点里也包含了子节点，那就需要递归对比更新子节点；
如果旧的节点里不包含子节点，那么这个旧节点有可能是空节点或者是文本节点，如果旧的节点是空节点就把新的节点里的子节点创建一份然后插入到旧的节点里面，
如果旧的节点是文本节点，则把文本清空，然后把新的节点里的子节点创建一份然后插入到旧的节点里面。
该节点不包含子节点：
如果该节点不包含子节点，同时它又不是文本节点，那就说明该节点是个空节点，那就好办了，不管旧节点之前里面都有啥，直接清空即可。


更新子节点：
我们把新的VNode上的子节点数组记为newChildren，把旧的oldVNode上的子节点数组记为oldChildren
我们把newChildren里面的元素与oldChildren里的元素一一进行对比，外层循环newChildren数组，内层循环oldChildren数组，每循环外层newChildren数组里的一个子节点，就去内层oldChildren数组里找看有没有与之相同的子节点，伪代码如下：
有以下四种情况：
创建子节点：
如果newChildren里面的某个子节点在oldChildren里找不到与之相同的子节点，那么说明newChildren里面的这个子节点是之前没有的，是需要此次新增的节点，那么就创建子节点（合适的位置是所有未处理节点之前）

删除子节点：
如果把newChildren里面的每一个子节点都循环完毕后，发现在oldChildren还有未处理的子节点，那就说明这些未处理的子节点是需要被废弃的，那么就将这些节点删除。

移动子节点：
如果newChildren里面的某个子节点在oldChildren里找到了与之相同的子节点，但是所处的位置不同，这说明此次变化需要调整该子节点的位置，那就以newChildren里子节点的位置为基准，调整oldChildren里该节点的位置，使之与在newChildren里的位置相同（所有未处理节点之前就是我们要移动的目的位置）

更新节点：
如果newChildren里面的某个子节点在oldChildren里找到了与之相同的子节点，并且所处的位置也相同，那么就更新oldChildren里该节点，使之与newChildren里的该节点相同。

当包含的子节点数量很多时，这样循环算法的时间复杂度就会变的很大，不利于性能提升。Vue进行了优化
优化策略介绍：
比较两个数组里特殊位置的子节点：
先把newChildren数组里的所有未处理子节点的第一个子节点和oldChildren数组里所有未处理子节点的第一个子节点做比对，如果相同，那就直接进入更新节点的操作；节点均向后移动一个位置
如果不同，再把newChildren数组里所有未处理子节点的最后一个子节点和oldChildren数组里所有未处理子节点的最后一个子节点做比对，如果相同，那就直接进入更新节点的操作；节点均向前移动一个位置
如果不同，再把newChildren数组里所有未处理子节点的最后一个子节点和oldChildren数组里所有未处理子节点的第一个子节点做比对，如果相同，那就直接进入更新节点的操作，更新完后再将oldChildren数组里的该节点移动到与newChildren数组里节点相同的位置（要把oldChildren数组里把第一个子节点移动到数组中所有未处理节点之后）；newChildren节点向前移动一个位置，oldChildren节点向后移动一个位置
如果不同，再把newChildren数组里所有未处理子节点的第一个子节点和oldChildren数组里所有未处理子节点的最后一个子节点做比对，如果相同，那就直接进入更新节点的操作，更新完后再将oldChildren数组里的该节点移动到与newChildren数组里节点相同的位置（要把oldChildren数组里把最后一个子节点移动到数组中所有未处理节点之前）；newChildren节点向后移动一个位置，oldChildren节点向前移动一个位置
最后四种情况都试完如果还不同，那就按照之前循环的方式来查找节点。
如果在循环中，oldChildren比newChildren先循环完毕，那么newChildren里面剩余的节点都是需要新增的节点，把[newStartIdx, newEndIdx]之间的所有节点都插入到DOM中。
newChildren比oldChildren先循环完毕，那么oldChildren里面剩余的节点都是需要删除的节点，把[oldStartIdx, oldEndIdx]之间的所有节点都删除

