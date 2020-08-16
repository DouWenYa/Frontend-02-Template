学习笔记
css
盒模型：
box-sizing：
• content-box
• border-box
正常流排版
IFC 行内排版
BFC 块级排版（独立布局环境）
Block Container 里面有 BFC 的
• block
• inline-block
• table-cell
• flex item
• grid cell
• table-caption
Block-level Box 外面有 BFC 的
• display:block
• display: flex
• display: table
• display: grid
设立 BFC/开启 BFC
• float
• absolutely positioned elements
• block containers (such as inline-blocks, table-cells, and table-captions)
• flex items
• grid cell
• ......
• and block boxes with 'overflow' other than 'visible'

flex 排版
主轴与交叉轴

动画 animation
• @keyframes 定义
• animation: 使用

animation：animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction
• animation-name 动画名称
• animation-duration 动画的时长；
• animation-timing-function 动画的时间曲线；
• animation-delay 动画开始前的延迟；
• animation-iteration-count 动画的播放次数；
• animation-direction 动画的方向。
• animation-play-state 规定动画是否正在运行或暂停。
• animation-fill-mode 规定对象动画时间之外的状态

Transition：过渡
• transition ：transition-property transition-duration transition-timing-function transition-delay
transition-property 要变换的属性；
• transition-duration 变换的时长；
• transition-timing-function 时间曲线；
• transition-delay 延迟。
