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