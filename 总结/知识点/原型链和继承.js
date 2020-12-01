当我们「读取」 obj.toString 时，JS 引擎会做下面的事情：

1. 看看 obj 对象本身有没有 toString 属性。没有就走到下一步。

2. 看看 obj.__proto__ 对象有没有 toString 属性，发现 obj.__proto__ 有 toString 属性，于是找到了

所以 obj.toString 实际上就是第 2 步中找到的 obj.__proto__.toString。

可以想象，

3. 如果 obj.__proto__ 没有，那么浏览器会继续查看 obj.__proto__.__proto__

4. 如果 obj.__proto__.__proto__ 也没有，那么浏览器会继续查看 obj.__proto__.__proto__.proto__

5. 直到找到 toString 或者 __proto__ 为 null。

上面的过程，就是「读」属性的「搜索过程」。

而这个「搜索过程」，是连着由 __proto__ 组成的链子一直走的。

这个链子，就叫做「原型链」。