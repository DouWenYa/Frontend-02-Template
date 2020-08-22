学习笔记
1、html语义化标签
<aside>
<main>页面只有一个，主体部分 
<nav>
<header>
<footer>
<strong>全局强调，<em>语气强调
<abbr>用于缩写文本
<article>文章
<hgroup><h1><h2></hgroup>标题组合
<code>用于包裹代码片段
<pre>保留原有格式
<figure>
<img>图片
<figcaption>描述
</figure>
<ol><ul>有序，无序列表
<dfn>定义描述
<samp>例子
2、DOM API
Node：
     Element(元素节点)：HTMLElement，SVGElement
     Document(文档节点)
     CharacterData（字符数据)：Text文本节点，comment注释节点。processinginstruction处理信息
     DocumentFragment(文档片段)
     DocumentType(文档类型)
导航类操作(左侧可能包含空节点)，查找
 parentNode,parentElement
 childNodes,children
 firstChild,firstElementChild
 lastChild,lastElementChild
 nextSibling,nextElementSibling
 previousSibling,previousElementSibling
 修改操作
 appendChild,insertBefore,removeChild(父节点删除子节点)，replaceChild
 contains：检查一个节点是否包含另一个节点
 isEqualNode:检查两个节点是否一致
 cloneNode：复制节点，可传入参数 实现深拷贝
 compareDocumentPosition：比较两个节点关系
 事件
 rangeAPI 更细微控制dom
 3、cssom
 document.styleSheet获取到link及style表标签内容
  document.styleSheet[0].cssRules
  document.styleSheet[0].cssRules[0].style.color='#000'
  document.styleSheet[0].insertRule('p{color:red}',0)
  document.styleSheet[0].removeRule(0)
 window.getComputedStyle(el,psedoel)，psedoel伪元素（应用于拖拽，动画）
 4、cssom View
 window
  window.innerHeight,window.innerWidth
  window.outerHeight,window.outerWidth
  window.devicePixelRatio
  window.screen.height,window.screen.width
  window.open('url','_blank','style')
  moveTo(x,y),moveBy,resizeTo(),resizeBy()
  scrollX,scrollY,scroll(x,y) ===scrollTo(x,y)
  scrollBy(x,y)
 Scroll
  scrollTop,
  scrollLeft
  scrollWidth
  scrollheight
  scroll(x,y)
  scrollBy(x,y)
  scrollIntoView(Boolean)
layout
 getClientRacts()
 getBoundingClientRact()



