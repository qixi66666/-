
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

- DOM
- 文档对象模型，是W3C组织推荐的处理可扩展表舅语言的标准编程接口。

- 操作元素内容：
- innerText 改变元素内容
- innerHTML 改变元素内容,可识别html，常用!!!

- 操作表单元素属性：
- `type、value、disabled`

- 操作元素样式属性：
- `element.style`
- `className`

- 事件类型
  - `onclick`     鼠标点击
  - `onmouseout`  鼠标经过触发
  - `onmouseout`  鼠标离开触发
  - `onfocus`     获得鼠标焦点触发
  - `onblur`      失去鼠标焦点触发
  - `onmousemove` 鼠标移动触发
  - `onmouseup`   鼠标弹起触发
  - `onmousedown` 鼠标按下触发

- 元素的属性值：
  - `getAttribute`  得到元素属性
  - `setAttribute`  设置元素属性
  - `removeAttribute`  移除属性

- 得到元素的父节点：
  - `element.parentNode`
- 得到元素的子节点：
  - `element.children`

- 获取第一个和最后一个子元素节点
  - `element.firstElementChild`
  - `element.lastElementChild`
  - `element.children[0]`
  - `element.children.length-1`

- 创建元素
  - `innerHTML`
  - `creatElement`

- 增加元素
  - `appendChild`  在后面添加
  - `insertBefore` 在前面添加

- 删除元素
  - `removeChild`

# 事件委托

- 事件委托的原理：不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点。

# BOM

- 浏览器对象模型

# location对象

- `location.href`     !!!获取或者设置整个URL
- `location.host`      返回主机（域名）    www.itheima.com
- `location.port`      返回端口号  如果未写返回空字符串
- `location.pathname`  返回路径
- `location.srarch`    !!!返回参数
- `location.hash`      返回片段  #后面内容  常见于链接 锚点

# 元素获取滚动距离

- `scrollTop`
- `scrollLeft`

# 页面中被卷去的头部

- `window.pageXOffset`
- `window.pageYOffset`

# 数据类型

# 算法

# 大O表示法

# 二分法

# 栈：它是一种受限的线性表，后进先出

# AJAX

- form 表单属性
  - `action`  action属性用来规定当提交表单时向何处发送表单数据
  - `target`  target属性用来规定在何处打开action URL
      值  _blank   在新窗口中打开
          _self    默认，在相同的框架中打开
  - `method`  method属性用来规定以何种方式把表单数据提交到action URL
      值  get      通过URL地址的形式，把表单数据提交到action URL
          post     适合提交大量的复杂的或者包含文件上传的数据，常用。
  - `enctype`  enctype属性用来规定在发送表单数据之前如何对数据进行编码
      值  如果涉及到文件上传的操作时，必须将值设置为multipart/form-data

- URL的编码与解码
- encodeURL()  编码的函数
- decodeURL()  解码的函数

# JSON

- JSON就是javascript对象和数组的字符串表示法，它使用文本表示一个JS对象或数组的信息。因此，JSON的本质是字符串。

- 作用：JSON是一种轻量级的文本数据交换格式，在作用上类似于XML，专门用于储存和传输数据，但是JSON比XML更小、更快、更易解析。

- 数据交换格式
- JSON.parse()       JSON字符串转换为JSON对象
- JSON.stringify()   JSON对象转换为JSON字符串

- 序列化和反序列化
- 把数据对象转换为字符串的过程，叫做序列化。
- 把字符串转换为数据对象的过程，叫做反序列化。

# 同源策略

- 同源策略是浏览器提供的一个安全功能
- JSONP的实现原理： 由于浏览器同源策略的限制，网页中无法通过AJAX请求非同源的接口数据，但是`<script>`标签不受浏览器同源策略的影响，可以通过 src 属性，请求非同源的 JS 脚本
  因此，JSONP 的实现原理，就是通过`<script>`标签的 src 属性，请求跨域的数据接口，并通过函数调用的形式，接受跨域接口响应回来的数据

# 防抖和节流

- 防抖策略：当一个事件频繁的被触发后，延迟n秒以后再执行回调，如果再这n秒内事件又被触发，则重新计时，保证事件只被触发一次

- 节流策略：可以减少一段时间内事件的触发频率

# 通信协议

- 客户端与服务器之间要实现网页内容的传输，通信双方必须遵守网页内容的传输协议
- 网页内容又叫做超文本，因此传输协议又叫做超文本传输协议，简称 HTTP 协议

- HTTP请求消息的组成部分
- 1.请求行  
  - 请求方式 + URL + 协议版本
- 2.请求头部
- 3.空行
- 4.请求体(get请求没有请求体)

- HTTP响应消息的组成部分
- 1.状态行
  - 协议版本 + 状态码 + 状态码描述
- 2.响应头部
- 3.空行
- 4.响应体

# git

- git help config            获取命令的帮助手册
- git config -h              获取命令的快速参考

- git init                   初始化 git 仓库
- git status                 查询git中文件的状态
- git status -s              以精简的方式显示文件的状态
- git add 文件名              跟踪文件，暂存
- git commit -m "描述信息"    提交

- git checkout -- 文件名      撤销
- git add .                  将新增或者修改后的文件加入暂存区中
- git reset HEAD             移除文件
- git commit -a -m           跳过暂存区直接提交到仓库
- git rm -f 文件名            从Git仓库和工作区同时移除文件
- git rm --cached 文件名      只从Git仓库中移除文件，但保留工作区中的文件
- git log                     按时间先后顺序序列出所有的提交历史
- git log -2                  只展示最近的两条提交历史

- git 忽略文件 .gitignore

- git clone 远程仓库的地址     将远程仓库克隆到本地
- git baranch                 查看分支列表
- git branch 分支名称          创建新分支
- git checkout 分支名称        切换分支
- git checkout -b 分支名称     创建指定名称的新分支，并立即切换到新分支上
- git branch -d 分支名称       删除本地分支，不能处于要删除的当前分支上

- 合并分支
- 1.先切换到 main 主分支
- git checkout main
- 2.在 main 分支上运行 git merge 命令，将分支上的代码合并到 main 主分支上
- git merge 分支名称

- git push -u 远程仓库的别名origin  新分支名称      将本地分支推送到远程仓库
- git remote show 远程仓库名称   查看远程仓库中所有的分支列表
- git checkout 远程分支的名称    跟踪分支，把远程仓库中的分支下载到本地仓库中
- git pull                     把远程分支最新的代码下载到本地对应的分支中
- git push 远程仓库名称 --delete 远程分支名称     删除远程分支
- origin 远程仓库默认名称

# node.js

- node.js是一个基于 chrome v8 引擎的 javascript 运行环境
- 运行环境是指代码正常运行所需的必要环境

# 包

- npm -v                         查询包管理工具版本号
- npm install + 包的完整名称      在项目中安装包的命令
- npm i + 包的完整名称            在项目中安装包的命令
- npm init -y                    在执行命令所处的目录中，快速新建 package.json 文件（只能在英文的目录下成功运行）
- npm uninstall 包的完整名称      卸载指定的包

- 包管理配置文件
- 在项目跟目录在，创建一个 package.json 的配置文件，可以记录项目中安装了那些包，从而方便剔除了 node_modules （第三方包）目录之后，在团队成员之间共享项目的源代码。
- 注意：今后在项目开发中，一定要把 node_modules 文件夹，添加到 .gitignore 忽略文件中
- package.json 文件中，有一个dependencies 节点，专门用来记录使用 npm install 命令安装了哪些包

- 如果某些包旨在项目开发阶段用，建议把这些包记录到 devDependencies 节点中，如果某些包在开发和项目上线之后都用到，建议记录到 dependencies 节点中
- `npm i 包名 -D`    or    `npm install 包名 --save-dev`

- 解决下包速度慢的问题
- npm config get registry      查看当前的下包镜像源
- npm config set registry=<https://registry.npm.taobao.org/>

- i5ting_toc                            可以把md文档转为html页面的小工具
- npm install -g i5ting_toc             安装为全局包
- i5ting_toc -f 要转换的md文件路径 -o     md转html

# Express

- Express 是基于Node.js 平台，快速、开放、极简的 Web 开发框架
- 本质就是一个第三方的包，快速创建服务器

- 自定义模块加载机制
- 补全 .js 扩展名
- 补全 .json 扩展名
- 补全 .node 扩展名

# 路由

- 路由就是映射关系，在Express中，路由指的是客户端请求和服务器处理函数之间的关系
- 请求类型、请求的URL地址、处理函数三部分组成

- 中间件的分类
- 绑定到app实例上的中间件，叫做应用级别的中间件
- 绑定到express.Router实例上的中间件，叫做路由级别的中间件

- 接口跨域问题
- 1.CORS  推荐  (Cross-origin Resource Sharing,跨域资源共享)
- 2.JSONP

# 数据库

- 数据库是用来组织、存储和管理数据的仓库
- 常见数据库及分类
- 关系型数据库
- MySQL 数据库  （目前使用最广泛的开源免费数据库;Community + Enterprise）
- 数据库 数据表 数据行 字段  4部分组成
- Oracle 数据库
- SQL Server 数据库

- 非关系型数据库
- Mongodb 数据库 （Community + Enterprise）

- DataType数据类型
- int 整数
- varchar(len) 字符串
- tinyint(1) 布尔值

- 字段的特殊标识
- pk (Primary Key) 主键、唯一标识
- NN (Not Null) 值不允许为空
- UQ (Unique) 值唯一
- AI (Auto increment) 值自动增长

- SQL (英文全称：Structured Query Language) 是结构化查询语言，专门用来访问和处理数据库的编程语言，能够让我们以编程的形式，操作数据库里面的数据

- SQL的SELECT语句 (查询)
- SELECT * FROM 表名称        查询所有的数据
- SELECT 列名称 FROM 表名称   查询出指定列名称(字段)的数据

- SQL的INSERT INTO 语句 (插入新的数据行)
- INSERT INTO table_name(列1，列2，...) VALUES (值1，值2，...)

- SQL的UPDATE语句 (修改)
- UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值

- SQL的DELETE语句 (删除)
- DELETE FROM 表名称 WHERE 列名称 = 值

- SQL的ORDER BY 语句 (升序和降序)
- order by                      升序
- order by 字段 DESC            降序

- SQL的COUNT(*)函数 (返回查询结果的总数据条款)
- SELECT COUNT(*) FROM 表名称

# WEB 开发模式

- 服务端渲染的 Web 开发模式，是在服务器通过字符串的拼接，动态生成的。因此客户端不需要使用 Ajax 这样的技术额外请求页面的数据。
  - 优点：
  - 1：前端耗时少。因为服务器端负责动态生成HTML内容，浏览器只需要渲染页面即可。
  - 2：有利于SEO
  - 缺点：
  - 1：占用服务器资源
  - 2：不利于前后端分离，开发效率低

- 前后端分离的 Web 开发模式，依赖于 Ajax 技术的广泛应用，后端只负责提供API接口，前端使用 Ajax 调用接口的开发模式
- 优点
- 1：开发体验好。前端专注于 UI 页面的开发，后端专注于 api 的开发，前端有更多的选择性
- 2：用户体验好。Ajax 技术的广泛应用，极大的提高了用户的体验，可以轻松实现页面的局部刷新
- 3：减轻了服务器端的渲染压力。因为页面最终是在每个用户的浏览器中生成的
- 缺点：
- 1：不利于SEO

- 身份认证
- 服务器端渲染推荐使用 Session 认证机制
- 前后端分离推荐使用 JWT 认证机制

- Session 认证机制  (不支持跨域)
- Cookie: 是储存在用户浏览器中的一段不超过 4kb 的字符串，它由一个名称(name)、一个值(value)和其他几个用于控制 Cookie 有效期、安全性、使用方位的可选属性组成。
- 1：发起请求自动发送
- 2：域名独立
- 3：过期时限
- 4：4KB 限制

- JWT 认证机制 (支持跨域)
- 用户的信息通过 ToKen 字符串的形式，保存在客户端浏览器中，服务器通过还原 ToKen 字符串的形式来认证用户的身份。
- secret 密钥
- 1：当生成 JWT 字符串的时候，需要使用 secret 密钥对用户的信息进行加密，最终得到加密的 JWT 字符串
- 2：当把 JWT 字符串解析还原成 JSON 对象的时候，需要用 secret 密钥进行解密

# 前端工程化

- 前端工程化是指在企业级的前端项目开发中，把前端开发所需的工具、技术、流程、经验等进行规范化、标准化

- webpack 是前端项目工程化的具体解决方案
- 它提供了友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器端javascript的兼容性、性能优化等强大的功能

- webpack 默认打包入口文件为 src -> index.js
- webpack 默认的输出文件路径为 dist -> main.js
- 注意：可以在 webpack.config.js 中修改打包的默认约定
- npm install webpack-dev-server@3.11.2 -D   自动更新打包
- npm install html-webpack-plugin@5.3.2 -D   主要作用就是在webpack构建后生成html文件，并且自动注入打包的 bundle.js 文件
- vue-cli 工具会自动配置好 webpack

- loader 概述
- 在实际开发过程中，webpack 默认只能打包处理以 js 后缀名结尾的模块，其他非 js 后缀名结尾的模块 webpack 默认处理不了，需要调用 loader 加载器才能正常打包，否则会报错。
- 当 webpack 处理不了的时候，会查找 webpack.config.js 这个配置文件，看 moudule.rules 数组中，是否配置了相对应的 loader 加载器。
- css-loader 可以打包处理.css 相关的文件
- less-loader 可以打包处理.less 相关的文件
- babel-loader 可以打包处理. webpack 无法处理的高级 JS 语法

- npm i url-loader@4.1.1 file-loader@6.2.0 -D 处理 url 路径相关的文件
- npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@4.14.5 -D  处理webpack也无法处理的高级语法的包
- npm i clean-webpack-plugin@3.0.0 -D  发布的时候自动删除旧dist并生成最新的dist文件

- source Map
- 是一个信息文件，里面储存着位置信息，也就是说 source Map 文件中储存着压缩混淆后的代码，所对应的转换前的位置。(配置文件中设置devtool: 'nosources-source-map')、

# 什么是 Vue

1.构建用户界面

- 用 vue 往 html 页面中填充数据，非常的方便
2.框架
- 框架是一套现成的解决方案，程序员只能遵守框架的规范，去编写自己的业务功能！
- 要学习 vue，就是在学习 vue 框架中规定的用法！
- vue 的指令、组件（是对 UI 结构的复用）、路由、Vuex、vue 组件库

# vue 的两个特性

1. 数据驱动视图：

- 数据的变化会驱动视图自动更新
- 好处：程序员只管把数据维护好，那么页面结构会被 vue 自动渲染出来！

2. 双向数据绑定：

> 在网页中，form 表单负责采集数据，Ajax 负责提交数据。

- js 数据的变化，会被自动渲染到页面上
- 页面上表单采集的数据发生变化的时候，会被 vue 自动获取到，并更新到 js 数据中

> 注意：数据驱动视图和双向数据绑定的底层原理是 MVVM（Mode 数据源、View 视图、ViewModel 就是 vue 的实例）

# vue 指令

1. 内容渲染指令

- `v-text` 指令的缺点：会覆盖元素内部原有的内容！
- `{{ }}` 插值表达式：在实际开发中用的最多，只是内容的占位符，不会覆盖原有的内容！
- `v-html` 指令的作用：可以把带有标签的字符串，渲染成真正的 HTML 内容！

2. 属性绑定指令

> 注意：插值表达式只能用在元素的内容节点中，不能用在元素的属性节点中!

- 在 vue 中，可以使用 `v-bind:` 指令，为元素的属性动态绑定值
- 简写是英文的 `:`
- 在使用 v-bind 属性绑定期间，如果绑定内容需要进行动态拼接，则字符串的外面应该包裹单引号，例如：

```xml
  <div :title="'box' + index">这是一个 div</div>
```

3. 事件绑定

- `v-on:` 简写是 `@`
- `$event` 的应用场景：如果默认的事件对象 e 被覆盖了，则可以手动传递一个  $event。

- 事件修饰符
- `.prevent`   阻止默认行为
- `<a @click.prevent="xxx">链接</a>`
- `.stop`      阻止冒泡
- `<button @click.stop="xxx">按钮</button>`

4. v-model 指令

- input 输入框
- textarea
- select

5. 条件渲染指令

- `v-show` 的原理是：动态为元素添加或移除 `display: none` 样式，来实现元素的显示和隐藏。
- 如果要频繁的切换元素的显示状态，用 v-show 性能会更好

- `v-if` 的原理是：每次动态创建或移除元素，实现元素的显示和隐藏  
- 如果刚进入页面的时候，某些元素默认不需要被展示，而且后期这个元素很可能也不需要被展示出来，此时 v-if 性能更好

 > 在实际开发中，绝大多数情况，不用考虑性能问题，直接使用 v-if 就好了!!!

# 过滤器

- 过滤器的注意点

1. 要定义到 filters 节点下，本质是一个函数
2. 在过滤器函数中，一定要有 return 值
3. 在过滤器的形参中，可以获取到“管道符”前面待处理的那个值
4. 如果全局过滤器和私有过滤器名字一致，此时按照“就近原则”，调用的是"私有过滤器"

# watch 侦听器

 1. 方法格式的侦听器

- 缺点1：无法在刚进入页面的时候，自动触发!!!
- 缺点2：如果侦听的是一个对象，如果对象中的属性发生了变化，不会触发侦听器!!!

2. 对象格式的侦听器
   - 好处1：可以通过 immediate 选项，让侦听器自动触发!!!
   - 好处2：可以通过 deep 选项，让侦听器深度监听对象中每个属性的变化!!!

# 计算属性

特点：

1. 定义的时候，要被定义为“方法”
2. 在使用计算属性的时候，当普通的属性使用即可

好处：

1. 实现了代码的复用
2. 只要计算属性中依赖的数据源变化了，则计算属性会自动重新求值！

# axios

> axios 是一个专注于网络请求的库！

1. 发起 GET 请求：

   ```js
   axios({
     // 请求方式
     method: 'GET',
     // 请求的地址
     url: 'http://www.liulongbin.top:3006/api/getbooks',
     // URL 中的查询参数
     params: {
       id: 1
     }
   }).then(function (result) {
     console.log(result)
   })
   ```

2. 发起 POST 请求：

   ```js
   document.querySelector('#btnPost').addEventListener('click', async function () {
     // 如果调用某个方法的返回值是 Promise 实例，则前面可以添加 await！
     // await 只能用在被 async “修饰”的方法中
     const { data: res } = await axios({
       method: 'POST', 
       url: 'http://www.liulongbin.top:3006/api/post',
       data: {
         name: 'zs',
         age: 20
       }
     })
   
     console.log(res)
   })
   ```

# vue-cli 的使用

1. 在终端下运行如下的命令，创建指定名称的项目：

- vue cerate 项目的名称

2. vue 项目中 src 目录的构成：

- assets 文件夹：存放项目中用到的静态资源文件，例如：css 样式表、图片资源
- components 文件夹：程序员封装的、可复用的组件，都要放到 components 目录下
- main.js 是项目的入口文件。整个项目的运行，要先执行 main.js
- App.vue 是项目的根组件。

3. vue项目的运行流程

- 在工程化的项目中， vue 要做的事情：通过 main.js 把 APP.vue 渲染到 index.html 的指定区域中
