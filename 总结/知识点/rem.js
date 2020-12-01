px: px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。
PX特点
1. IE无法调整那些使用px作为单位的字体大小；
2. 国外的大部分网站能够调整的原因在于其使用了em或rem作为字体单位；
3. Firefox能够调整px和em，rem，但是96%以上的中国网民使用IE浏览器(或内核)。

EM
em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置,
则相对于浏览器的默认字体尺寸。

EM特点
1. em的值并不是固定的；
2. em会继承父级元素的字体大小。

REM
rem是CSS3新增的一个相对单位（root em，根em），这个单位引起了广泛关注。
这个单位与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，
但相对的只是HTML根元素。这个单位可谓集相对大小和绝对大小的优点于一身，
通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。
目前，除了IE8及更早版本外，所有浏览器均已支持rem。对于不支持它的浏览器，应对方法也很简单，
就是多写一个绝对单位的声明。这些浏览器会忽略用rem设定的字体大小。下面就是一个例子：
p {font-size:14px; font-size:.875rem;}


<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

e.rem = d.getBoundingClientRect().width / 16