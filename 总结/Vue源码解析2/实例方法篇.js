Vue.set(target, propertyName / index, value)
原理：首先判断传入的target是否符合条件，如果为undefined, null或者原始类型，则抛出警告。接着判断传入的target是数组并且key是
有效索引的话，利用splice方法将传入的索引key对应的val值添加进数组（因为数组的splice方法已经被我们创建的拦截器重写了）。
如果传入的target是对象的话，先会判断传入的key是否已经在target中，如果已经在了，那就不是新增的属性，直接修改属性值。接下来判断
target的__ob__属性，如果为false，代表target不是响应式对象，只需添加上新的属性即可。假如__ob__属性为true。代表target是响应式
对象，会调用defineReactive方法。此方法内部会调用Object.defineProperty将此属性转化为响应式，然后再通知依赖更新。

vm.$delete(target, propertyName / index):
原理：首先判断target是否符合条件，如果target不存在，或者target是原始值，则抛出警告。
如果target是数组并且传入的key是有效索引的话，就利用splice方法将key对应的值删除。
假如target是个对象，并且key也存在于target中，同时判断当前的target是否为响应式对象，如果是的话，则通知依赖更新。否则删除完不通
知更新。