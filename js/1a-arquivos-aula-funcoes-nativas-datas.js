const data = new Date()
/*
data.toString()

let d = data.getDate()
let m = data.getMonth() + 1
let a = data.getFullYear()
console.log(`data: ${d}/${m}/${a}`)

let h = data.getHours()
let mi = data.getMinutes()
let s = data.getSeconds()
console.log(`hora: ${h}:${mi}:${s}`)
*/

//Operações com datas
//data.setDate(data.getDate() + 300)
//data.setMonth(data.getMonth() + 2)
//data.setFullYear(data.getFullYear() + 2)
/*let d = data.getDate()
let m = data.getMonth() + 1
let a = data.getFullYear()
console.log(`data: ${d}/${m}/${a}`)*/

data.setHours(data.getHours() + 2)
let h = data.getHours()
let mi = data.getMinutes()
let s = data.getSeconds()
console.log(`hora: ${h}:${mi}:${s}`)











