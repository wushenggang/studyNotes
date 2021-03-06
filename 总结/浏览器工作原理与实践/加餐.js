实现跨域的方法：
todo List

window.requestAnimationFrame:
raf的回调任务会在每一帧的开始执行

总结：
首先我们分析了基于单消息队列会引起队头阻塞的问题，为了解决队头阻塞问题，我们引入了多个不同优级的消息队列，并将紧急的任务添加到高优先级队列，
不过大多数任务需要保持其相对执行顺序，如果将用户输入的消息或者合成消息添加进多个不同优先级的队列中，那么这种任务的相对执行顺序就会被打乱，
所以我们又迭代了第二个版本。在第二个版本中，按照不同的任务类型来划分任务优先级，不过由于采用的静态优先级策略，对于其他一些场景，
这种静态调度的策略并不是太适合，所以接下来，我们又迭代了第三版。第三个版本，基于不同的场景来动态调整消息队列的优先级，到了这里已经非常完美了，
不过依然存在着任务饿死的问题，为了解决任务饿死的问题，我们给每个队列一个权重，如果连续执行了一定个数的高优先级的任务，那么中间会执行一次低优先级的任务，
这样我们就完成了 Chromium 的任务改造。