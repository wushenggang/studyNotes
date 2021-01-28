什么是模板编译：
把用户在 < template ></template > 标签中写的类似于原生HTML的内容进行编译，把原生HTML的内容找出来，再把非原生HTML找出来，经过一系列的逻辑处理生成渲染函数，也就是render函数的这一段过程称之为模板编译过程。
具体流程：
1，模板解析阶段：将一堆模板字符串用正则等方式解析成抽象语法树AST；
2，优化阶段：遍历AST，找出其中的静态节点，并打上标记（DOM - Diff 算法会直接跳过静态节点，从而减少了比较的过程，优化了 patch 的性能）；
3，代码生成阶段：将AST转换成渲染函数；

模板解析阶段：
整体流程：HTML解析器是主线，先用HTML解析器进行解析整个模板，在解析过程中如果碰到文本内容，那就调用文本解析器来解析文本，如果碰到文本中包含过滤器那就调用过滤器解析器来解析。

HTML解析器：一边解析不同的内容一边调用对应的钩子函数生成对应的AST节点，最终完成将整个模板字符串转化成AST, 这就是HTML解析器所要做的工作。
解析HTML注释(条件注释，DOCTYPE) ：只需用正则判断待解析的模板字符串html是否以 < !--开头，若是，那就继续向后寻找-- >，如果找到了，OK，注释就被解析出来了。然后调用相应的钩子函数创建注释类型的AST节点。然后再将游标移动到'-->'之后，继续向后解析

解析开始标签：首先使用开始标签的正则去匹配模板字符串，看模板字符串是否具有开始标签的特征。前文说了，当解析到开始标签时，会调用4个钩子函数中的start函数，而start函数需要传递3个参数，分别是标签名tag、标签属性attrs、标签是否自闭合unary。
标签名通过正则匹配的结果可以拿到，而标签属性attrs以及标签是否自闭合unary需要进一步解析。
（1）解析标签属性：
先将标签名从模板字符串中截掉，剩下的部分去匹配标签属性的正则，将标签属性提取出来。如果有多个标签属性的话，就要循环匹配，匹配出第一个标签属性后，就把该属性截掉，用剩下的字符串继续匹配，直到不再满足正则为止。
（2）解析标签是否是自闭和
经过标签属性提取之后，剩下的字符串无非就两种，'></div>'以及'/>', 可以用剩下的字符串去匹配特定的正则来判断是否为自闭和标签。
然后再将数据处理一下去调用start钩子函数

解析结束标签：只需要判断剩下的模板字符串是否符合结束标签的特征，如果符合，就将结束标签名提取出来，再调用4个钩子函数中的end函数就好了。

解析文本：在解析模板字符串之前，我们先查找一下第一个 < 出现在什么位置，如果第一个 < 在第一个位置，那么说明模板字符串是以其它5种类型开始的；如果第一个 < 不在第一个位置而在模板字符串中间某个位置，那么说明模板字符串是以文本开头的，那么从开头到第一个 < 出现的位置就都是文本内容了；如果在整个模板字符串里没有找到 <，那说明整个模板字符串都是文本。
（值得深究的是如果 < 不在第一个位置而在模板字符串中间某个位置，那么说明模板字符串是以文本开头的，那么从开头到第一个 < 出现的位置就都是文本内容了，接着我们还要从第一个 < 的位置继续向后判断，
因为还存在这样一种情况，那就是如果文本里面本来就包含一个 <，例如1 < 2</div >。为了处理这种情况，我们把从第一个 < 的位置直到模板字符串结束都截取出来记作rest。接着用rest去匹配以上5种类型的正则，如果都匹配不上，则表明这个 < 是属于文本本身的内容。
接着以这个 < 的位置继续向后查找，看是否还有 <，如果没有了，则表示后面的都是文本；如果后面还有下一个 <，那表明至少在这个 < 到下一个 < 中间的内容都是文本，至于下一个 < 以后的内容是什么，则还需要重复以上的逻辑继续判断。
最后截取文本内容text并调用4个钩子函数中的chars函数创建文本型的AST节点。）

如何保证AST节点层级关系：
通过一个栈来维护AST节点层级，HTML解析器在从前向后解析模板字符串时，每当遇到开始标签时就会调用start钩子函数，那么在start钩子函数内部我们可以将解析得到的开始标签推入栈中，而每当遇到结束标签时就会调用end钩子函数，那么我们也可以在end钩子函数内部将解析得到的结束标签所对应的开始标签从栈中弹出
栈可以检测模板字符串中是否有未正确闭合的标签。

文本解析器：
当HTML解析器解析到文本内容时会调用4个钩子函数中的chars函数来创建文本型的AST节点，并且也说了在chars函数中会根据文本内容是否包含变量再细分为创建含有变量的AST节点和不包含变量的AST节点。
创建含有变量的AST节点时节点的type属性为2，并且相较于不包含变量的AST节点多了两个属性：expression和tokens。那么如何来判断文本里面是否包含变量以及多的那两个属性是什么呢？这就涉及到文本解析器了
当Vue用HTML解析器解析出文本时，再将解析出来的文本内容传给文本解析器，最后由文本解析器解析该段文本里面是否包含变量以及如果包含变量时再解析expression和tokens。
文本解析器内部就干了三件事：
1，判断传入的文本是否包含变量
2，构造expression
3，构造tokens

首先用正则去匹配是否包含变量({{}}), 若包含的话，会开启一个while循环去匹配其中存在的变量。每匹配到一次按特定的规则存入到构造expression和构造tokens中。

优化阶段：
是为了提高虚拟DOM中patch过程的性能。在优化阶段将所有静态节点都打上标记，这样在patch过程中就可以跳过对比这些节点。
优化阶段就干了两件事：分别是从构建出的AST中找出并标记所有静态节点和所有静态根节点。
思路：只需从根节点开始，先标记根节点是否为静态节点，然后看根节点如果是元素节点，那么就去向下递归它的子节点，子节点如果还有子节点那就继续向下递归，直到标记完所有节点。

代码生成阶段：
代码生成阶段主要的工作就是根据已有的AST生成对应的render函数供组件挂载时调用，组件只要调用的这个render函数就可以得到AST对应的虚拟DOM的VNode。
思路：生成render函数的过程其实就是一个递归的过程，从顶向下依次递归AST中的每一个节点，根据不同的AST节点类型创建不同的VNode类型。
最后真正创建出来的VNode无非就三种，分别是元素节点，文本节点，注释节点。
（1）元素节点：
创建元素节点需要用到_c()函数。需要三个参数，非别为节点的标签名tagName，节点属性data，节点的子节点列表children。
节点属性data的获取：先给data赋值为一个{ ，然后判断存在哪些属性数据，就将这些数据拼接到data中，最后再加一个 } ，最终得到节点全部属性data。
子节点列表children的获取：获取子节点列表children其实就是遍历AST的children属性中的元素，然后根据元素属性的不同生成不同的VNode创建函数调用字符串
（2）文本节点：文本型的VNode可以调用_v(text)函数来创建，所以生成文本节点的render函数就是生成一个_v(text)函数调用的字符串。_v()函数接收文本内容作为参数，
如果文本是动态文本，则使用动态文本AST节点的expression属性，如果是纯静态文本，则使用text属性
（3）注释节点：注释型的VNode可以调用_e(text)函数来创建，所以生成注释节点的render函数就是生成一个_e(text)函数调用的字符串。_e()函数接收注释内容作为参数。

整体流程：
Vue在实例挂载时会调用全局实例方法$mount, $mount方法首先从Vue实例的属性选项中获取render选项，如果没有获取到，说明用户没有手写render函数，那么此时，
就像上一篇文章中说的，需要Vue自己将模板转化成render函数。接着获取模板，先尝试获取内部模板，如果获取不到则获取外部模板。最后，调用compileToFunctions函数将模板转化成render函数，再将render函数赋值给options.render。