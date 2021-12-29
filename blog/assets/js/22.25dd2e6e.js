(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{574:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"绘图工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘图工具"}},[t._v("#")]),t._v(" 绘图工具")]),t._v(" "),a("p",[t._v("canvas画布")]),t._v(" "),a("ul",[a("li",[t._v("默认大小为300*200")]),t._v(" "),a("li",[t._v("可通过width属性和height属性设置画布大小")]),t._v(" "),a("li",[t._v("解决画布重绘问题：描边后使用 "),a("code",[t._v("beginPath()")]),t._v(" 开启新的图层")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("canvas")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("600"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("400"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("canvas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"绘图方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘图方法"}},[t._v("#")]),t._v(" 绘图方法")]),t._v(" "),a("p",[t._v("线连接方式：   lineJoin: round | bevel | miter (默认)")]),t._v(" "),a("p",[t._v("线帽（线两端的结束方式）：  lineCap: butt(默认值) | round | square")]),t._v(" "),a("p",[t._v("闭合路径： ctx.closePath()")]),t._v(" "),a("p",[t._v("开启新的图层： ctx.beginPath()")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取canvas画布对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" canvas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"canvas"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取绘图上下文")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 落笔")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moveTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 连线")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lineTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置线的颜色为红色")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strokeStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置线宽")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lineWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 描边")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stroke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h2",{attrs:{id:"渐变方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渐变方案"}},[t._v("#")]),t._v(" 渐变方案")]),t._v(" "),a("h3",{attrs:{id:"线性渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性渐变"}},[t._v("#")]),t._v(" 线性渐变")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x0--\x3e渐变开始的x坐标")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// y0--\x3e渐变开始的y坐标")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x1--\x3e渐变结束的x坐标")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// y1--\x3e渐变结束的y坐标")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" grd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLinearGradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n      \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置渐变的开始颜色")]),t._v("\ngrd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addColorStop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"black"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置渐变的中间颜色")]),t._v("\ngrd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addColorStop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yellow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置渐变的结束颜色")]),t._v("\ngrd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addColorStop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        \n\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strokeStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("grd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stroke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("备注：addColorStop(offse,color)中渐变的开始位置和结束位置介于0-1之间，0代表开始，1代表结束。中间可以设置任何小数。")]),t._v(" "),a("h3",{attrs:{id:"径向渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#径向渐变"}},[t._v("#")]),t._v(" 径向渐变")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (x0,y0)--\x3e渐变的开始圆的 x,y 坐标")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// r0--\x3e开始圆的半径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (x1,y1)--\x3e渐变的结束圆的 x,y 坐标")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// r1--\x3e结束圆的半径")]),t._v("\n\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createradialGradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"填充效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#填充效果"}},[t._v("#")]),t._v(" 填充效果")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillstyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"值"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    设置填充颜色\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t          设置填充效果\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"非零环绕原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非零环绕原则"}},[t._v("#")]),t._v(" 非零环绕原则")]),t._v(" "),a("ol",[a("li",[t._v("任意找一点，越简单越好")]),t._v(" "),a("li",[t._v("以点为圆心，绘制一条射线，越简单越好（相交的边越少越好）")]),t._v(" "),a("li",[t._v("以射线为半径顺时针旋转，相交的边同向记为+1，反方向记为-1，如果相加的区域等于0，则不填充。（同向和反向指的是旋转方向和绘制方向是否相同）")]),t._v(" "),a("li",[t._v("非零区域填充"),a("br"),t._v("\n例子：回字图案")])]),t._v(" "),a("h2",{attrs:{id:"绘制虚线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制虚线"}},[t._v("#")]),t._v(" 绘制虚线")]),t._v(" "),a("ul",[a("li",[t._v("原理：设置虚线其实就是设置实线与空白部分直接的距离,利用数组描述其中的关系")]),t._v(" "),a("li",[t._v("绘制\n"),a("ul",[a("li",[t._v("ctx.setLineDash(数组);")]),t._v(" "),a("li",[t._v("ctx.stroke();")])])]),t._v(" "),a("li",[t._v("实线和空白不断根据数组的值循环")]),t._v(" "),a("li",[t._v("如果要将虚线改为实线，只要将数组改为空数组即可")])]),t._v(" "),a("h2",{attrs:{id:"绘制矩形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制矩形"}},[t._v("#")]),t._v(" 绘制矩形")]),t._v(" "),a("ul",[a("li",[t._v("绘制一个描边矩形： "),a("code",[t._v("content.strokeRect(x,y,width,height)")])]),t._v(" "),a("li",[t._v("绘制一个填充矩形： "),a("code",[t._v("content.fillRect(x,y,width,height)")])]),t._v(" "),a("li",[t._v("清除：\t\t   "),a("code",[t._v("content.clearRect(x,y,width,height)")])]),t._v(" "),a("li",[t._v("实现动画矩形\n"),a("ul",[a("li",[t._v("先清屏")]),t._v(" "),a("li",[t._v("绘制图形")]),t._v(" "),a("li",[t._v("处理变量")])])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开始位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//处理的是一个增量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" step"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//改变方向变量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个定时器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//先清屏")]),t._v("\n\tctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开始绘制图形")]),t._v("\n\tctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开始处理变量")]),t._v("\n\tx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ti"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ti"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("h2",{attrs:{id:"绘制文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制文本"}},[t._v("#")]),t._v(" 绘制文本")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("绘制填充文本："),a("code",[t._v("content.fillText(文本的内容,x,y)")])])]),t._v(" "),a("li",[a("p",[t._v("绘制镂空文本："),a("code",[t._v("content.strokeText()")])])]),t._v(" "),a("li",[a("p",[t._v("设置文字大小：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('content.font="20px 微软雅黑"')])]),t._v(" "),a("li",[t._v("备注： 该属性设置文字大小，必须按照cssfont属性的方式设置")])])]),t._v(" "),a("li",[a("p",[t._v("文字水平对齐方式")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('content.textalign="left | right | center"')])]),t._v(" "),a("li",[t._v("文字在圆心点位置的对齐方式")])])]),t._v(" "),a("li",[a("p",[t._v("文字垂直对齐方式")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('content.textBaseline="top | middle | bottom | alphabetic(默认)"')])])])]),t._v(" "),a("li",[a("p",[t._v("文字阴影效果")]),t._v(" "),a("ul",[a("li",[t._v("设置文字阴影的颜色 "),a("code",[t._v('ctx.shadowColor="red"')])]),t._v(" "),a("li",[t._v("设置文字阴影的水平偏移量 "),a("code",[t._v("ctx.ShadowOffsetX=值")])]),t._v(" "),a("li",[t._v("设置文字阴影的垂直偏移量 "),a("code",[t._v("ctx.shadowOffsetY=值")])]),t._v(" "),a("li",[t._v("设置文字阴影的模糊度 "),a("code",[t._v("ctx.shadowBlur=值")])])])])]),t._v(" "),a("h2",{attrs:{id:"绘制图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制图片"}},[t._v("#")]),t._v(" 绘制图片")]),t._v(" "),a("ul",[a("li",[t._v("将图片绘制到画布的指定位置\n"),a("ul",[a("li",[a("code",[t._v("content.drawImage(图片对象,x,y)")])])])]),t._v(" "),a("li",[t._v("将图片绘制到指定区域大小的位置\n"),a("ul",[a("li",[a("code",[t._v("content.drawImage(图片对象,x,y,width,height);")])]),t._v(" "),a("li",[t._v("x,y指的是矩形区域的位置")]),t._v(" "),a("li",[t._v("width和height指的是矩形区域的大小")])])]),t._v(" "),a("li",[t._v("将图片的指定区域绘制到指定矩形区域内\n"),a("ul",[a("li",[a("code",[t._v("content.drawImage(图片对象,sx,sy,swidth,sheight,dx,dy,dwidth,dheight);")])]),t._v(" "),a("li",[t._v("sx,sy 指的是要从图片哪块区域开始绘制")]),t._v(" "),a("li",[t._v("swidth，sheight 是指截取图片区域的大小")]),t._v(" "),a("li",[t._v("dx,dy 是指矩形区域的位置")]),t._v(" "),a("li",[t._v("dwidth,dheight是指矩形区域的大小")])])]),t._v(" "),a("li",[t._v("解决图片绘制到某一个区域的按比例缩放绘制\n"),a("ul",[a("li",[t._v("绘制宽：绘制高 == 原始宽：原始高")])])])]),t._v(" "),a("h2",{attrs:{id:"绘制圆弧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制圆弧"}},[t._v("#")]),t._v(" 绘制圆弧")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("content.arc(x,y,radius,startradian,endradian,direct);")]),t._v(" "),a("ul",[a("li",[t._v("(x,y) 为圆心的坐标")]),t._v(" "),a("li",[t._v("radius 为半径")]),t._v(" "),a("li",[t._v("startradian 为开始弧度")]),t._v(" "),a("li",[t._v("endradian 为结束弧度")]),t._v(" "),a("li",[t._v("direct 为方向（默认顺时针 false）true 代表逆时针")])])]),t._v(" "),a("li",[t._v("以圆心为中心向右为0角 顺时针为正，逆时针为负")]),t._v(" "),a("li",[t._v("角度 和 弧度的关系： 角度:弧度= 180:pi")])]),t._v(" "),a("h2",{attrs:{id:"坐标系变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#坐标系变换"}},[t._v("#")]),t._v(" 坐标系变换")]),t._v(" "),a("h3",{attrs:{id:"平移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平移"}},[t._v("#")]),t._v(" 平移")]),t._v(" "),a("p",[t._v("坐标系原点的平移："),a("code",[t._v("ctx.translate(x,y);")])]),t._v(" "),a("p",[t._v("通过该方法可以将原点的位置进行重新设置。")]),t._v(" "),a("p",[t._v("注意")]),t._v(" "),a("ul",[a("li",[t._v("translate(x,y) 中不能设置一个值")]),t._v(" "),a("li",[t._v("与moveTo(x,y) 的区别\n"),a("ul",[a("li",[t._v("moveTo(x,y) 指的是将画笔的落笔点的位置改变，而坐标系中的原点位置并没有发生改变")]),t._v(" "),a("li",[t._v("translate(x,y) 是将坐标系中的原点位置发生改变")])])])]),t._v(" "),a("h3",{attrs:{id:"旋转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旋转"}},[t._v("#")]),t._v(" 旋转")]),t._v(" "),a("p",[t._v("坐标系旋转："),a("code",[t._v("ctx.rotate(弧度)")])]),t._v(" "),a("h3",{attrs:{id:"伸缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伸缩"}},[t._v("#")]),t._v(" 伸缩")]),t._v(" "),a("p",[t._v("沿着x轴和y轴缩放："),a("code",[t._v("ctx.scale(x,y)")])]),t._v(" "),a("p",[t._v("x,y 为倍数  例如： 0.5  1")])])}),[],!1,null,null,null);s.default=e.exports}}]);