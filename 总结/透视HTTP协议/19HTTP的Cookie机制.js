小结：
1,Cookie 是服务器委托浏览器存储的一些数据，让服务器有了“记忆能力”；
2,响应报文使用 Set-Cookie 字段发送“key=value”形式的 Cookie 值；
3,请求报文里用 Cookie 字段发送多个 Cookie 值；
4,为了保护 Cookie，还要给它设置有效期、作用域等属性，常用的有 Max-Age（相对时间）、Expires（绝对时间）、
Domain(设置 Cookie 的作用域，让浏览器仅发送给特定的服务器和 URI，避免被其他网站盗用)、
HttpOnly（Cookie 只能通过浏览器 HTTP 协议传输，禁止其他方式访问，例如document.Cookie） 等；
5,Cookie 最基本的用途是身份识别，实现有状态的会话事务。

如果 Cookie 的 Max-Age 属性设置为 0，会有什么效果呢？
设置为0，服务器0秒就让Cookie失效，即立即失效，服务器不存Cookie。


Cookie 的好处已经很清楚了，你觉得它有什么缺点呢？
（1） 不安全。如果被中间人获取到 Cookie，完全将它作为用户凭证冒充用户。解决方案是使用 https 进行加密。
（2）有数量和大小限制。另外 Cookie 太大也不好，传输的数据会变大。
（3）客户端可能不会保存 Cookie。比如用 telnet 收发数据，用户禁用浏览器 Cookie 保存功能的情况。