Object的变化侦测：
（1）使Object数据变得“可观测”
定义了一个Observer类，判断数据类型，如果是Object类型的数据会调用walk方法利用Object.defineProperty将每一个属性转换成getter / setter形式来侦测变化。如果属性值还是一个object，
则会再实例化一个Observer（new Observer(val) ）来递归子属性。这样就obj中的所有属性都可以被侦测变化。
（2）依赖收集
Object已经变得可观测了。现在需要做的是让数据变化时。通知相应的视图去更新。
谁依赖了这个数据, 我们给每个数据都建一个依赖数组。当数据变化时，就把每个依赖通知一遍。让他们进行更新。
当一个数据被页面引用，我们就需要创建一个依赖，将该依赖存入该数据的依赖数组，当数据变化时，就把每个依赖通知一遍。让他们进行更新
源码中有一个依赖管理器Dep类来实现上述功能。先初始化一个subs数据。用来存放依赖。并且定义了几个实例的方法对依赖进行添加，删除，通知等操作。然后就可以在getter中收集依赖（用到的时候），在setter中通知依赖更新。
(3)依赖到底是谁
是一个叫做Watcher的类。也就是说谁用到了数据，谁就是依赖，我们就为谁创建一个Watcher实例
总结一下：Watcher先把自己设置到全局唯一的指定位置（window.target），然后读取数据。因为读取了数据，所以会触发这个数据的getter。接着，在getter中就会从全局唯一的那个位置读取当前正在读取数据的Watcher，
并把这个watcher收集到Dep中去。收集好之后，当数据发生变化时，会向Dep中的每个Watcher发送通知。
如果需要对Object添加或者删除值时，需要使用Vue.set和Vue.delete

Array的变化侦测：
（1）在哪里收集依赖
Array类型数据还是在getter中收集依赖
（2）使Array型数据可观测
Array中可以改变数组自身内容的方法有7个(push, pop, shift, unshift, splice, sort, reverse) 。需要写一个数组方法拦截器，在拦截器中可以实现数据可观测
首先创建了继承自Array原型的空对象arrayMethods，接着在arrayMethods上使用object.defineProperty方法将那些可以改变数组自身的7个方法遍历逐个进行封装。
在封装的方法里先执行原生的方法，实现本身所具有的功能。然后可以额外地多做一些事情，比如发送变化通知。
只需要把数据的__proto__属性设置为拦截器arrayMethods即可。（若浏览器不支持__proto__，则把七个方法循环加入到数组中）
（3）如何收集依赖
在getter中收集依赖，我们首先通过observe函数为被获取的数据arr尝试创建一个Observer实例，在observe函数内部，先判断当前传入的数据上是否有__ob__属性，如果数据有__ob__属性，
表示它已经被转化成响应式的了，如果没有则表示该数据还不是响应式的，那么就调用new Observer(value)将其转化成响应式的，并把数据对应的Observer实例返回。
（4）如何通知依赖
在拦截器里通知依赖，要通知依赖，首先要访问到依赖。要访问到依赖也不难，因为我们只要能访问到被转化成响应式的数据value即可，因为vaule上的__ob__就是其对应的Observer类实例，
有了Observer类实例我们就能访问到它上面的依赖管理器，然后只需调用依赖管理器的dep.notify()方法，让它去通知依赖更新即可
（5）深度侦测
对于Array型数据，调用了observeArray()方法，该方法内部会遍历数组中的每一个元素，然后通过调用observe函数将每一个元素都转化成可侦测的响应式数据。
（6）数组中新增元素的侦测
对于数组中已有的元素我们已经可以将其全部转化成可侦测的响应式数据了，但是如果向数组里新增一个元素的话，我们也需要将新增的这个元素转化成可侦测的响应式数据
我们只需拿到新增的这个元素，然后调用observe函数将其转化即可。可以向数组内新增元素的方法有3个，分别是：push、unshift、splice。我们只需在拦截器中对这3中方法分别处理，
拿到新增的元素，再将其转化即可
数组的下标来操作数据是无法侦测的。需要使用Vue.set和Vue.delete来解决



简单手写实现

function observe(obj) {
	Object.keys(obj).forEach(key => {
		defineReactive(obj, key, obj[key])
	})
}

function defineReactive(obj,key, val) {
	let dp = new Dep()
	Object.defineProperty(obj, key, {
		get: function() {
			dp.addSub()
			return val
		},
		set: function(newVal) {
			val = newVal
			dep.notify()
		}
	})
}

class Dep {
	constructor() {
		this.subs = []
	}
	addSub(sub) {
		if (window.target) {
			this.subs.push(window.target)
		}
	}
	notify(){
		this.subs.forEach(sub => sub.update())
	}
}

class Watch {
	constructor(obj,key,cb) {
		this.get()
	}
	get() {
		window.target = this
		// 需要获取一些数据的getter
	    window.target = null
	}
	update() {
		this.cb()
	}
}
