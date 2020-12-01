new会帮你做的几件事
不用创建临时对象，因为 new 会帮你做（你使用「this」就可以访问到临时对象）；
不用绑定原型，因为 new 会帮你做（new 为了知道原型在哪，所以指定原型的名字为 prototype）；
不用 return 临时对象，因为 new 会帮你做；
不要给原型想名字了，因为 new 指定名字为 prototype。

// 构造器函数
let Parent = function (name, age) {
  this.name = name;
  this.age = age;
};
Parent.prototype.sayName = function () {
  console.log(this.name);
};
//自己定义的new方法
let newMethod = function (Parent, ...rest) {
  // 1.以构造器的prototype属性为原型，创建新对象；
  let child = Object.create(Parent.prototype);
  // 2.将this和调用参数传给构造器执行
  let result = Parent.apply(child, rest);
  // 3.如果构造器没有手动返回对象，则返回第一步的对象
  return typeof result === 'object' ? result : child;
};
//创建实例，将构造函数Parent与形参作为参数传入
const child = newMethod(Parent, 'echo', 26);
child.sayName() //'echo';

//最后检验，与使用new的效果相同
child instanceof Parent//true
child.hasOwnProperty('name')//true
child.hasOwnProperty('age')//true
child.hasOwnProperty('sayName')//false
