(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{579:function(t,a,s){"use strict";s.r(a);var n=s(11),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"新的表单元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新的表单元素"}},[t._v("#")]),t._v(" 新的表单元素")]),t._v(" "),s("h3",{attrs:{id:"新的input类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新的input类型"}},[t._v("#")]),t._v(" 新的Input类型")]),t._v(" "),s("br"),t._v(" "),s("form",[s("fieldset",[s("legend",[t._v("新的表单控件")]),t._v(" "),s("br"),t._v('\n        邮箱 type="email" '),s("input",{attrs:{placeholder:"输入合法的邮箱地址",type:"email"}}),t._v(" "),s("br"),s("br"),t._v('\n        url type="url" '),s("input",{attrs:{placeholder:"输入合法的网址",type:"url"}}),t._v(" "),s("br"),s("br"),t._v('\n        search type="search" '),s("input",{attrs:{placeholder:"输入搜索内容",type:"search"}}),t._v(" "),s("br"),s("br"),t._v('\n        数字 type="number" '),s("input",{attrs:{placeholder:"只能输入数字",type:"number"}}),t._v(" "),s("br"),s("br"),t._v('\n        电话 type="tel" '),s("input",{attrs:{placeholder:"输入合法的电话",type:"tel"}}),t._v(" "),s("br"),s("br"),t._v('\n        滑块 type="range" '),s("input",{attrs:{type:"range"}}),t._v(" "),s("br"),s("br"),t._v('\n        颜色 type="color" '),s("input",{attrs:{placeholder:"",type:"color"}}),t._v(" "),s("br"),s("br"),t._v('\n        日期 type="date" '),s("input",{attrs:{placeholder:"",type:"date"}}),t._v(" "),s("br"),s("br"),t._v('\n        选择一个日期（UTC 时间） type="datetime" '),s("input",{attrs:{placeholder:"",type:"datetime"}}),t._v(" "),s("br"),s("br"),t._v('\n        选择一个日期和时间 (无时区) type="datetime-local" '),s("input",{attrs:{placeholder:"",type:"datetime-local"}}),t._v(" "),s("br"),s("br"),t._v('\n        月份 type="month" '),s("input",{attrs:{placeholder:"",type:"month"}}),t._v(" "),s("br"),s("br"),t._v('\n        周 type="week" '),s("input",{attrs:{placeholder:"",type:"week"}}),t._v(" "),s("br"),s("br"),t._v('\n        时间 type="time" '),s("input",{attrs:{placeholder:"",type:"time"}}),t._v(" "),s("br"),s("br")])]),t._v(" "),s("h3",{attrs:{id:"修改表单控件中的默认提示信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改表单控件中的默认提示信息"}},[t._v("#")]),t._v(" 修改表单控件中的默认提示信息")]),t._v(" "),s("br"),t._v(" "),s("form",{attrs:{action:"#",method:"get"}},[s("input",{staticClass:"uname",attrs:{type:"text",name:"uname",pattern:"^\\d{4,11}",required:""}}),t._v(" "),s("input",{attrs:{type:"submit",name:""}}),s("br"),s("br"),t._v("\n    正确格式为4到11位数字，请输入错误格式以测试\n")]),t._v(" "),s("script",[t._v('\n  var input = document.querySelector(".uname");\n  input.oninvalid=function(){   \t\n    if(this.validity.patternMismatch===true){\n      this.setCustomValidity("请输入4到11位数字");\n    }else{\n      this.setCustomValidity("");\n    }\n  }\n')]),t._v(" "),s("ol",[s("li",[t._v("表单验证触发"),s("code",[t._v("oninvalid")]),t._v("事件")]),t._v(" "),s("li",[t._v("通过"),s("code",[t._v("setCustomValidity")]),t._v("方法设置修改内容")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("uname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pattern")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("^\\d{4,11}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("required")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("uname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".uname"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("oninvalid")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \t\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("validity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("patternMismatch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCustomValidity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入4到11位数字"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCustomValidity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("h3",{attrs:{id:"datalist元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datalist元素"}},[t._v("#")]),t._v(" datalist元素")]),t._v(" "),s("p",[t._v("input 元素使用 datalist 预定义值")]),t._v(" "),s("input",{attrs:{list:"browsers"}}),t._v(" "),s("datalist",{attrs:{id:"browsers"}},[s("option",{attrs:{value:"Internet Explorer"}}),t._v(" "),s("option",{attrs:{value:"Firefox"}}),t._v(" "),s("option",{attrs:{value:"Chrome"}}),t._v(" "),s("option",{attrs:{value:"Opera"}}),t._v(" "),s("option",{attrs:{value:"Safari"}})]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("browsers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("datalist")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("browsers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Internet Explorer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Firefox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Opera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Safari"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("datalist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h3",{attrs:{id:"output元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output元素"}},[t._v("#")]),t._v(" output元素")]),t._v(" "),s("br"),t._v(" "),s("form",{attrs:{oninput:"x.value=parseInt(a.value)+parseInt(b.value)"}},[t._v("0\n"),s("input",{attrs:{type:"range",id:"a",value:"50"}}),t._v("100 +\n"),s("input",{attrs:{type:"number",id:"b",value:"50"}}),t._v("=\n"),s("output",{attrs:{name:"x",for:"a b"}})]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("oninput")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x.value=parseInt(a.value)+parseInt(b.value)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("50"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("100 +\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("50"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("=\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("output")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"keygen元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keygen元素"}},[t._v("#")]),t._v(" keygen元素")]),t._v(" "),s("p",[s("code",[t._v("<keygen>")]),t._v("元素的作用是提供一种验证用户的可靠方法。")]),t._v(" "),s("p",[s("code",[t._v("<keygen>")]),t._v("标签规定用于表单的密钥对生成器字段。")]),t._v(" "),s("p",[t._v("当提交表单时，会生成两个键，一个是私钥，一个公钥。")]),t._v(" "),s("p",[t._v("私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。公钥可用于之后验证用户的客户端证书（client certificate）。")]),t._v(" "),s("h2",{attrs:{id:"表单新属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单新属性"}},[t._v("#")]),t._v(" 表单新属性")]),t._v(" "),s("h3",{attrs:{id:"form"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#form"}},[t._v("#")]),t._v(" form")]),t._v(" "),s("ul",[s("li",[t._v("autocomplete = on | off          自动完成")]),t._v(" "),s("li",[t._v("novalidate = true | false        是否关闭校验")])]),t._v(" "),s("h3",{attrs:{id:"input"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" input")]),t._v(" "),s("ul",[s("li",[t._v("autofocus : 自动获取焦点")]),t._v(" "),s("li",[t._v("required : 规定必须在提交之前填写输入域（不能为空）")]),t._v(" "),s("li",[t._v("placeholder\n"),s("ul",[s("li",[t._v("占位符")]),t._v(" "),s("li",[t._v("适用于以下类型的input标签: text, search, url, telephone, email 以及 password。")])])]),t._v(" "),s("li",[t._v("multiple\n"),s("ul",[s("li",[t._v("规定是否可选择多个值")]),t._v(" "),s("li",[t._v("适用于以下类型的input标签: email 和 file。")])])]),t._v(" "),s("li",[t._v("autocomplete :\n"),s("ul",[s("li",[t._v("规定输入字段是否应该启用自动完成功能")]),t._v(" "),s("li",[t._v("适用于以下类型的input标签: text, search, url, telephone, email, password, datepickers, range 以及 color。")])])]),t._v(" "),s("li",[t._v("form : 规定输入域所属的一个或多个(用空格分隔)表单")]),t._v(" "),s("li",[t._v("formaction :\n"),s("ul",[s("li",[t._v("用于描述表单提交的URL地址")]),t._v(" "),s("li",[t._v("与 "),s("code",[t._v('type="submit"')]),t._v(" 和 "),s("code",[t._v('type="image"')]),t._v(" 配合使用")]),t._v(" "),s("li",[t._v("会覆盖"),s("code",[t._v("<form>")]),t._v("元素中的 "),s("code",[t._v("action")]),t._v(" 属性")])])]),t._v(" "),s("li",[t._v("formenctype :\n"),s("ul",[s("li",[t._v("属性描述了表单提交到服务器的数据编码")]),t._v(" "),s("li",[t._v("与 "),s("code",[t._v('type="submit"')]),t._v(" 和 "),s("code",[t._v('type="image"')]),t._v(" 配合使用")]),t._v(" "),s("li",[t._v("会覆盖 "),s("code",[t._v("form")]),t._v(" 元素的 "),s("code",[t._v("enctype")]),t._v(" 属性")])])]),t._v(" "),s("li",[t._v("formmethod :\n"),s("ul",[s("li",[t._v("定义了表单提交的方式")]),t._v(" "),s("li",[t._v("覆盖了 "),s("code",[t._v("<form>")]),t._v(" 元素的的 "),s("code",[t._v("method")]),t._v(" 属性")]),t._v(" "),s("li",[t._v("与 "),s("code",[t._v('type="submit"')]),t._v(" 和 "),s("code",[t._v('type="image"')]),t._v(" 配合使用")])])]),t._v(" "),s("li",[t._v("formnovalidate :\n"),s("ul",[s("li",[t._v("描述了 "),s("code",[t._v("<input>")]),t._v(" 元素在表单提交时无需被验证")]),t._v(" "),s("li",[t._v("会覆盖 "),s("code",[t._v("<form>")]),t._v(" 元素的"),s("code",[t._v("novalidate")]),t._v("属性")]),t._v(" "),s("li",[t._v("与"),s("code",[t._v('type="submit"')]),t._v("一起使用")])])]),t._v(" "),s("li",[t._v("formtarget :\n"),s("ul",[s("li",[t._v("指定一个名称或一个关键字来指明表单提交数据接收后的展示")]),t._v(" "),s("li",[t._v("覆盖 "),s("code",[t._v("<form>")]),t._v(" 元素的 "),s("code",[t._v("target")]),t._v(" 属性")]),t._v(" "),s("li",[t._v("与 "),s("code",[t._v('type="submit"')]),t._v(" 和 "),s("code",[t._v('type="image"')]),t._v(" 配合使用")])])]),t._v(" "),s("li",[t._v("pattern (regexp)\n"),s("ul",[s("li",[t._v("描述了一个正则表达式用于验证 "),s("code",[t._v("<input>")]),t._v(" 元素的值")]),t._v(" "),s("li",[t._v("适用于以下类型的input标签: text, search, url, tel, email, 以及 password")])])]),t._v(" "),s("li",[t._v("list\n"),s("ul",[s("li",[t._v("规定输入域的 datalist")]),t._v(" "),s("li",[t._v("值为 datalist 的 id")])])]),t._v(" "),s("li",[t._v("height and width\n"),s("ul",[s("li",[t._v("规定用于 "),s("code",[t._v("image")]),t._v(" 类型的 "),s("code",[t._v("<input>")]),t._v(" 标签的图像高度和宽度。")]),t._v(" "),s("li",[t._v("与 "),s("code",[t._v('type="image"')]),t._v(" 配合使用")])])]),t._v(" "),s("li",[t._v("min 、max\n"),s("ul",[s("li",[t._v("适用于以下类型的input标签: datepickers、number 以及 range。")])])]),t._v(" "),s("li",[t._v("step\n"),s("ul",[s("li",[t._v("为输入域规定合法的数字间隔")]),t._v(" "),s("li",[t._v("适用于以下类型的input标签: number, range, date, datetime, datetime-local, month, time 以及 week。")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);