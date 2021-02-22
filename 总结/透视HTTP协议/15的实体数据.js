小结：
1，数据类型表示实体数据的内容是什么，使用的是 MIME type，相关的头字段是 Accept 和 Content - Type；
2，数据编码表示实体数据的压缩方式，相关的头字段是 Accept - Encoding 和 Content - Encoding；
3，语言类型表示实体数据的自然语言，相关的头字段是 Accept - Language 和 Content - Language；
4，字符集表示实体数据的编码方式，相关的头字段是 Accept - Charset 和 Content - Type；
5，客户端需要在请求头里使用 Accept 等头字段与服务器进行“内容协商”，要求服务器返回最合适的数据；
6，Accept 等头字段可以用“, ”顺序列出多个可能的选项，还可以用“; q =”参数来精确指定权重。

试着解释一下这个请求头“Accept - Encoding: gzip, deflate; q = 1.0, *; q = 0.5, br; q = 0”，再模拟一下服务器的响应头。
含义是：我这个请求最希望服务器给我返回的编码方式是gzip和deflate，他们俩在我这是最优的地位，我不接受br的编码方式，如果还有其他的编码方式的话对我来说权重0.5。服务器可能的响应头是
HTTP / 1.1 200 OK
Content - Encoding: gzip


假设你要使用 POST 方法向服务器提交一些 JSON 格式的数据，里面包含有中文，请求头应该是什么样子的呢？
POST / serv / v1 / user / auth HTTP / 1.1
Content - Type: application / json
Accept - Language: zh - CN, zh
Accept - Charset: gbk, utf - 8
（有误）
应该是将Accept - Language改为content - language


试着用快递发货收货比喻一下 MIME、Encoding 等概念。
MIME类比快递的话就是你要快递的物品（衣服，食物等），Encoding就是快递你这个物品的包装方式，
如果是衣服可能就随意一点一个袋子，如果是食物担心腐烂给你放个冰袋进去