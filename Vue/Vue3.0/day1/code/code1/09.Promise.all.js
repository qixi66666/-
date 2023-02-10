import thenFs from 'then-fs'

const promiseArr = [
  thenFs.readFile('./files/3.txt', 'utf8'),
  thenFs.readFile('./files/2.txt', 'utf8'),
  thenFs.readFile('./files/1.txt', 'utf8'),
]

// 全选机制
// Promise.all(promiseArr).then(result => {
//   console.log(result)
// })

// 赛跑机制
Promise.race(promiseArr).then(result => {
  console.log(result)
})
