小结：
1，HTTPS 协议会先与服务器执行 TCP 握手，然后执行 TLS 握手，才能建立安全连接；
2，握手的目标是安全地交换对称密钥，需要三个随机数，第三个随机数“Pre - Master”必须加密传输，绝对不能让黑客破解；
3，“Hello”消息交换随机数，“Key Exchange”消息交换“Pre - Master”；
4，“Change Cipher Spec”之前传输的都是明文，之后都是对称密钥加密的密文。

密码套件里的那些算法分别在握手过程中起了什么作用？



你能完整地描述一下 RSA 的握手过程吗？



你能画出双向认证的流程图吗？