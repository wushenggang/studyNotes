小结：
1,缓存是优化系统性能的重要手段，HTTP 传输的每一个环节中都可以有缓存；
2,服务器使用“Cache-Control”设置缓存策略，常用的是“max-age”，表示资源的有效期；
3,浏览器收到数据就会存入缓存，如果没过期就可以直接使用，过期就要去服务器验证是否仍然可用；
4,验证资源是否失效需要使用“条件请求”，常用的是“if-Modified-Since”和“If-None-Match”，收到 304 就可以复用缓存里的资源；
5,验证资源是否被修改的条件有两个：“Last-modified”和“ETag”，需要服务器预先在响应报文里设置，搭配条件请求使用；
6,浏览器也可以发送“Cache-Control”字段，使用“max-age=0”或“no_cache”刷新数据。

Cache 和 Cookie 都是服务器发给客户端并存储的数据，你能比较一下两者的异同吗？
相同点：Cache 和 Cookie 的相同点是：都会保存到浏览器中，并可以设置过期时间。
不同点：
1. Cookie 会随请求报文发送到服务器，而 Cache 不会，但可能会携带 if-Modified-Since（保存资源的最后修改时间）和 If-None-Match（保存资源唯一标识） 字段来验证资源是否过期。
2. Cookie 在浏览器可以通过脚本获取（如果 cookie 没有设置 HttpOnly），Cache 则无法在浏览器中获取（出于安全原因）。
3. 用途不同。Cookie 常用于身份识别，Cache 则是由浏览器管理，用于节省带宽和加快响应速度。
4. Cookie 的 max-age 是从浏览器拿到响应报文时开始计算的，而 Cache 的 max-age 是从响应报文的生成时间（Date 头字段）开始计算。
简单说是cookie是方便进行身份识，cache是为了减少网络请求。

即使有“Last-modified”和“ETag”，强制刷新（Ctrl+F5）也能够从服务器获取最新数据（返回 200 而不是 304），请你在实验环境里试一下，观察请求头和响应头，解释原因。

强制刷新是因为请求头里的 If-Modified-Since 和 If-None-Match 会被清空所以会返回最新数据