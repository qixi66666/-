// 1.1 导入 fs 模块
const fs = require('fs')
// 1.2 导入 path 模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', function (err, dataStr) {
  // 2.2 读取 HTML 文件失败
  if (err) return console.log('读取文件失败!' + err.message);
  // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出css,js,html文件
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)
})


// 3.1 定义处理CSS样式的方法
function resolveCSS(htmlStr) {
  // 3.2 使用正则提取需要的内容
  const r1 = regStyle.exec(htmlStr)
  // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
  //  3.4 调用fs.writeFile() 方法，将提取的样式写入clock中的index.css 文件里面
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function (err) {
    if (err) return console.log('写入CSS样式失败!' + err.massage);
    console.log('写入CS样式文件成功!');
  })
}

// 4.1 定义处理js脚本的方法
function resolveJS(htmlStr) {
  // 通过正则提取对应的 <script></script> 标签内容
  const r2 = regScript.exec(htmlStr)
  const newJS = r2[0].replace('<script>', '').replace('</script>', '')
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function (err) {
    if (err) return console.log('写入JS样式失败' + err.massage);
    console.log('写入JS样式文件成功!');
  })
}

// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
  // 5.2将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
  // 5.3 写入 index.html 文件
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function (err) {
    if (err) return console.log('写入HTML样式失败' + err.massage);
    console.log('写入 Html 页面成功!');
  })
}