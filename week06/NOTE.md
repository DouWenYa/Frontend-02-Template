学习笔记
css 总体结构
@charset
@import
rules：
@media
@page
rule

常见 at-rule
@charset
@import
@media
@page
@counter-style
@keyframes
@font-face
@supports
@namespace

css 规则
selector {key:value}

选择器
简单选择器
• \* //通配
• div //标签
• .cls //class 选择器
• #id //id 选择器
• [attr=value] //属性选择器
• :hover //伪类
• ::before //伪元素
复合选择器
复杂选择器

> || ~ +

伪类
• 链接/行为
• :any-link
• :link :visited
• :hover
• :active
• :focus
• :target

:not 伪类
• :where :has
树结构
• :empty
• :nth-child()
• :nth-last-child()
• :first-child :last-child :only-child
伪元素
::before
::after
::first-line
::first-letter

为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？
first-letter 可以设置 float 形成文字环绕，但是只有首字母脱离文档流，其他排版不变
而 first-line 是针对整行块元素的，第一行脱离文档流后，第二行会变成第一行再次脱离文档流，进入死循环了
