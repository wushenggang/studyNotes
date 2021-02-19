小结：
1，TCP / IP 是网络世界最常用的协议，HTTP 通常运行在 TCP / IP 提供的可靠传输基础上；
2，DNS 域名是 IP 地址的等价替代，需要用域名解析实现到 IP 地址的映射；
3，URI 是用来标记互联网上资源的一个名字，由“协议名 + 主机名 + 路径”构成，俗称 URL；
4，HTTPS 相当于“HTTP + SSL / TLS + TCP / IP”，为 HTTP 套了一个安全的外壳；
5，代理是 HTTP 传输过程中的“中转站”，可以实现缓存加速、负载均衡等功能。

DNS 与 URI 有什么关系？
DNS 是将域名解析出真实IP地址的系统
URI 是统一资源标识符，标定了客户端需要访问的资源所处的位置，如果URI中的主机名使用域名，则需要使用DNS来讲域名解析为IP。
在讲代理时我特意没有举例说明，你能够用引入一个“小强”的角色，通过打电话来比喻一下吗？