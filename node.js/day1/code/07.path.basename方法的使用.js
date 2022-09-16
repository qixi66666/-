const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

// 获取路径中的文件名
// const fullName = path.basename(fpath)
// console.log(fullName)

const nameWithoutExt = path.basename(fpath, '.html')
// 第二个参数  隐藏扩展名
console.log(nameWithoutExt)
