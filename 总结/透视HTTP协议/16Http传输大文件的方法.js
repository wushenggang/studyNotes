总结：
1，压缩 HTML 等文本文件是传输大文件最基本的方法；
2, 分块传输可以流式收发数据，节约内存和带宽，使用响应头字段“Transfer - Encoding: chunked”来表示，分块的格式是 16 进制长度头 + 数据块；
3, 范围请求可以只获取部分数据，即“分块请求”，实现视频拖拽或者断点续传，使用请求头字段“Range”和响应头字段“Content - Range”，响应状态码必须是 206；
4, 也可以一次请求多个范围，这时候响应报文的数据类型是“multipart / byteranges”，body 里的多个部分会用 boundary 字符串分隔。
要注意这四种方法不是互斥的，而是可以混合起来使用

分块传输数据的时候，如果数据里含有回车换行（\r\n）是否会影响分块的处理呢？
分块传输中数据里含有回车换行（\r\n）不影响分块处理，因为分块前有数据长度说明

如果对一个被 gzip 的文件执行范围请求，比如“Range: bytes = 10 - 19”，那么这个范围是应用于原文件还是压缩后的文件呢？

需要分情况，看原文件是什么形式。如果原来的文件是gzip的，那就正确。如果原文件是文本，而是在传输过程中被压缩，那么就应用于压缩前的数据。