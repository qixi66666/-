const path = require('path')

// 这是文件的存放路径
const fpath = '/a/b/c/index.html'

// 获取扩展名
const fext = path.extname(fpath)
console.log(fext)
