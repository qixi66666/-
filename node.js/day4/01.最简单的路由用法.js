const express = require('express')
const app = express()

// 挂载路由
app.get('/', (req, res) => {
  res.send('hello world.')
})
app.post('/', (res, req) => {
  res.send('post Request')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})
