如何解决1px问题
为了适配各种屏幕，我们写代码时一般使用设备独立像素来对页面进行布局。而在设备像素比大于1的屏幕上，我们写的1px实际上是被多个物理像素渲染，这就会出现1px在有些屏幕上看起来很粗的现象。
1，基于media查询(媒体查询)判断不同的设备像素比给定不同的border - image或者background - image
  .border_1px{
  border - bottom: 1px solid #000;
}
@media only screen and(-webkit - min - device - pixel - ratio: 2){
    .border_1px{
    border - bottom: none;
    border - width: 0 0 1px 0;
    border - image: url(../img/1pxline.png) 0 0 2 0 stretch;
  }
}
2，伪类 + transform  通过transform: scale来改变（scale不是改变元素宽高，而是改变x和y轴的刻度）

.border_1px: before{
  content: '';
  position: absolute;
  top: 0;
  height: 1px;
  width: 100 %;
  background - color: #000;
  transform - origin: 50 % 0 %;
}
@media only screen and(-webkit - min - device - pixel - ratio: 2){
            .border_1px: before{
    transform: scaleY(0.5);
  }
}
@media only screen and(-webkit - min - device - pixel - ratio: 3){
            .border_1px: before{
    transform: scaleY(0.33);
  }
}
3，可以通过svg
设备像素比(dpr) = 实际物理像素 / 设备独立像素


移动端适配方案：
1，flexible方案（rem）
rem 是相对于html节点的font - size来做计算的。将html节点的font - size设置为页面clientWidth(布局视口)的1 / 10，
即1rem就等于页面布局视口的1 / 10，这就意味着我们后面使用的rem都是按照页面比例来计算的。
然后只需要将UI出的图转换为rem即可。以iPhone6为例：布局视口为375px，则1rem = 37.5px，这时UI给定一个元素的宽为75px（设备独立像素），
我们只需要将它设置为75 / 37.5 = 2rem。
当页面大小变化时，也要重新去调整html的fontSize大小。（监听resize，pageshow方法）
2，vw, vh方法
vmin: vw和vh中的较小值       vmax: vw和vh中的较大值
iphoneX的适配：我们必须把页面限制在安全范围内，但是不影响整体效果。viewport - fit是专门为了适配iPhoneX而诞生的一个属性，它用于限制网页如何在安全区域内进行展示。
contain: 可视窗口完全包含网页内容，cover：网页内容完全覆盖可视窗口。默认情况下为contain。
我们需要将顶部和底部合理的摆放在安全区域内，iOS11新增了两个CSS函数env、constant，用于设定安全区域与边界的距离。我们必须指定viweport - fit后才能使用这两个函数。constant在iOS < 11.2的版本中生效，env在iOS >= 11.2的版本中生效，这意味着我们往往要同时设置他们，将页面限制在安全区域内：
body {
  padding - bottom: constant(safe - area - inset - bottom);
  padding - bottom: env(safe - area - inset - bottom);
}

横屏适配：
js检测横屏：
window.orientation：获取屏幕旋转方向，(180或者0为竖屏，90或者 - 90为横屏)
css可以通过媒体查询来检测横屏  @media screen and(orientation: portrait || landscape)




如何提高页面的性能
工作中遇到的最难的问题
diff算法
如何优化老代码
rem
输入url后的流程
页面渲染的过程

