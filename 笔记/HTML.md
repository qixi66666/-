
# html 基础

## 表单标签

使用场景局限，登陆页面注册页面和搜索页面。

### input系列标签

```html
<input type="">
文本框<input type="text">
密码框 <input type="password">
单选框：<input type="radio">
多选框：<input type="checkbox">
上传文件：<input type="file">
提交按钮：<input type="submit">
```

# CSS进阶

选择器：

- 后代选择器：用空格隔开
- 子代选择器：用>选择到指定子代
- 并集选择器：用，隔开，统一加CSS
- 交集选择器：选择同时满足多个选择器的标签，(.)连着写不能加任何其他符号
- 伪类选择器：鼠标指针悬停时改变颜色

背景：

- 背景色：background-color:pink
- 背景图：background-image: url（./）
- 背景平铺：background-repeat
- 背景不平铺：background-repeat：no-repaet
- 背景位置：background-position: center/top/left/right/bottom;
- 背景位置：background-position:50px 100px；

# 盒子模型

- 边框：border
- 内边距：padding
- 外边距：margin
- 去掉列表符号：list-style:none;
- 版心居中：margin：0 auto；

# CSS书写顺序

- 浏览器的执行速度会更高
- 浮动
- 盒子模型：border padding margin 宽度高度背景色
- 文字样式

# css浮动

- 浮动：float

# 定位

- 定位         position
- 相对定位     position:relative;
- 绝对定位     position:absolute;
- 固定定位     position:fixed;
- 显示层级     z-index: *;
- 垂直方向居中  vertical-algin: middle;  

# 制作网页的三种布局方式

- 标准流
- 浮动
- 定位

# 位移

- 位移          transform: translate(*px,*px);
- 旋转          transform: rotate(*deg);
- 转换圆点      transform-origin: right bottom;
- 多重转换，顺序不能变。    transform: translate(600px) rotate(360deg);
- 缩放          transform: scale(*);
- 渐变          background-image: linear-gradient（red，green）
- 透明          transparent
- 透明度        opacity: 0~1;

# 空间

- 3D位移       transform: translate3d(50px, 100px, 200px);
- 透视         perspective: 800px~1200px;    (近大远小，给父级加此属性）

# 动画

- 使用动画     animation: 动画名称 动画花费时长;
- 定义动画     @keyframes {from   to}   @keyframes {0%   20%   60%}

# Git

- 暂存： `git add .`

- 提交暂存到本地仓库：`git commit -m "备注"`

# Flex布局模型

- 给父元素添加 display:flex; 子元素可以自动挤压或者拉伸
- 组成部分：
  - 弹性容器
  - 弹性盒子
  - 主轴
  - 侧轴/交叉轴

- 主轴居中：`justify-content: center;`
- 间距在弹性盒子（子级）之间:`justify-content: space-between;`
- 所有地方的间距都相等:`justify-content: space-evenly;`
- 间距在弹性盒子的两侧:`justify-content: space-around;`

- 侧轴居中：`align-items: center;`
- 侧轴拉伸（默认值）：`align-items: stretch;`

- 改变主轴方向（垂直）：`flex-direction:column`
- 弹性盒子换行显示：`flex-wrap: wrap;`
- 调节行对齐方式：`align-content:###;`

# less

- less是CSS的预处理器，扩充了CSS语言，使CSS具备一定的逻辑性和计算能力
- 导入：`@import './less';`
- 导出：`out: ./文件名/`
- 禁止导出：`out: false`

# vw/vh

- 1vw=1/100  视口宽度
- 1vh=1/100  视口高度

# Javascript

- 编程语言的两种形式：汇编语言和高级语言

- Escapescript-基础语法
- Dom-文档对象模型
- BOM-浏览器对象模型
- 骆驼命名法:首字母小写,后面单词的首字母需要大写:myFirstName

- 判断非数字:`console.log(isNaN(12)); // false`
- 检测获取字符串的长度:`console.log(var.length);`
- 数字型转为字符串型：`console.log(num + '');`

- parseInt(变量)  
字符型的转换为数字型--整数:`console.log(parseInt('3.14')); // 3 取整`

- parseFloat(变量)
字符型的转换为数字型--小数:`console.log(parseFloat('3.14')); // 3.14`

# DOM & BOM

- 操作元素内容：
- innerText 改变元素内容
- innerHTML 改变元素内容,可识别html，常用!!!

- 操作表单元素属性：
- type、value、disabled

- 操作元素样式属性：
- element.style
- className

- 事件类型
- onclick   鼠标点击
