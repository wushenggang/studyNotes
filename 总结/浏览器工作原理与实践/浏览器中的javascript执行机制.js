7:
变量提升：
所谓的变量提升，是指在 JavaScript 代码执行过程中，JavaScript 引擎把变量的声明部分和函数的声明部分提升到代码开头的“行为”。
变量被提升后，会给变量设置默认值，这个默认值就是我们熟悉的 undefined。
JavaScript 的执行机制：先编译，再执行
一段代码经过编译后，会生成两部分内容：执行上下文（在执行上下文中存在一个变量环境的对象）和可执行代码。执行上下文是 JavaScript 执行一段代码时的运行环境
1，JavaScript 代码执行过程中，需要先做变量提升，而之所以需要实现变量提升，是因为 JavaScript 代码在执行之前需要先编译。
2，在编译阶段，变量和函数会被存放到变量环境中，变量的默认值会被设置为 undefined；
3，在代码执行阶段，JavaScript 引擎会从变量环境中去查找自定义的变量和函数。
如果在编译阶段，存在两个相同的函数，那么最终存放在变量环境中的是最后定义的那个，这是因为后定义的会覆盖掉之前定义的

8：
调用栈就是用来管理函数调用关系的一种数据结构
可以通过开发者工具Source标签中的call stack来查看当前调用栈的情况，使用 console.trace() 来输出当前的函数调用关系
1，每调用一个函数，JavaScript 引擎会为其创建执行上下文，并把该执行上下文压入调用栈，然后 JavaScript 引擎开始执行函数代码。
2，如果在一个函数 A 中调用了另外一个函数 B，那么 JavaScript 引擎会为 B 函数创建执行上下文，并将 B 函数的执行上下文压入栈顶。
3，当前函数执行完毕后，JavaScript 引擎会将该函数的执行上下文弹出栈。
4，当分配的调用栈空间被占满时，会引发“堆栈溢出”问题。
function runStack(n) {
  if (n === 0) return 100;
  return runStack(n - 2);
}
runStack(50000)
如何优化上述代码，解决栈溢出的问题？
1, 将递归改成循环的方式
function runStack(n) {
  while (n !== 0) {
    n -= 2;
  }

  return 100;
}
runStack(50000);
2, 使用数组来模拟栈
function runStack(n) {
  const stack = [n]
  while (n !== 0) {
    n -= 2
    if (n !== 0) {
      stack.push(n)
    } else {
      return console.log(100) && 100;
    }
  }
}
runStack(50000)
3，加入定时器的方法来把当前任务拆分为其他很多小任务：
function runStackPromise(n) {
  if (n === 0) return Promise.resolve(100)
  return Promise.resolve(n - 2).then(runStackPromise)
}
runStackPromise(500000).then(console.log)
4, 使用异步来分块处理，注意异步队列也有上限，分块粒度不能太细
function runStack(n, count = 0) {
  if (n === 0) return console.log(100) && 100;
  if (count > 5000) return setTimeout(runStack, 0, n - 2);
  return runStack(n - 2, count + 1)
}
runStack(50000)

9：
由于 JavaScript 的变量提升存在着变量覆盖、变量污染等设计缺陷，所以 ES6 引入了块级作用域关键字来解决这些问题。
函数内部通过 var 声明的变量, 在编译阶段全都被存放到变量环境里面了.通过 let 声明的变量, 在编译阶段会被存放到词法环境(Lexical Environment) 中
块级作用域就是通过词法环境的栈结构来实现的，而变量提升是通过变量环境来实现，通过这两者的结合，JavaScript 引擎也就同时支持了变量提升和块级作用域了。
变量查找方式：沿着词法环境的栈顶向下查询，如果在词法环境中的某个块中查找到了，就直接返回给 JavaScript 引擎，如果没有查找到，那么继续在变量环境中查找。
let myname = '极客时间'
{
  console.log(myname)
  let myname = '极客邦'
}
打印结果：Uncaught ReferenceError: Cannot access 'myname' before initialization at<anonymous>: 4: 15
分析原因：在块作用域内，let声明的变量被提升，但变量只是创建被提升，初始化并没有被提升，在初始化之前使用变量，就会形成一个暂时性死区。

  10：
  其实在每个执行上下文的变量环境中，都包含了一个外部引用，用来指向外部的执行上下文，我们把这个外部引用称为 outer。
  当一段代码使用了一个变量时，JavaScript 引擎首先会在“当前的执行上下文”中查找该变量，如果在当前的变量环境中没有查找到，
  那么 JavaScript 引擎会继续在 outer 所指向的执行上下文中查找。我们把这个查找的链条就称为作用域链。
  作用域链是由词法作用域决定的
  词法作用域就是指作用域是由代码中函数声明的位置来决定的，所以词法作用域是静态的作用域，通过它就能够预测代码在执行过程中如何查找标识符（也就是根据代码的位置来决定）
  词法作用域是代码编译阶段就决定好的，和函数是怎么调用的没有关系。
  也就是说作用域是由代码中函数声明的位置来决定的
  闭包：
  在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外部函数中声明的变量，当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束了，
  但是内部函数引用外部函数的变量依然保存在内存中，我们就把这些变量的集合称为闭包。比如外部函数是 foo，那么这些变量的集合就称为 foo 函数的闭包。
  通过开发者工具中sources选项中的Scope可以查看实际代码的作用域链情况
  闭包使用原则：如果该闭包会一直使用，那么它可以作为全局变量而存在；但如果使用频率不高，而且占用内存又比较大的话，那就尽量让它成为一个局部变量。