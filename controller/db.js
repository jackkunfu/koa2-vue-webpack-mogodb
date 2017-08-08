const mongoose = require('mongoose')
var dbUrl = require('../config').pdDb

// mongoose.Promise = global.Promise
mongoose.connect(dbUrl, { server: { auto_reconnect: true } })
    // mongoose.createConnection(dbUrl, { server: { auto_reconnect: true } })

const connect = mongoose.connection

connect.once('open', () => {
    console.log('数据库连接成功')
})

connect.on('error', (err) => {
    console.error(`连接异常，错误：${err}`)
    mongoose.disconnect()
})

connect.on('close', () => {
    console.log('重新连接数据库')
    mongoose.connect(dbUrl, { server: { auto_reconnect: true } })
})

module.exports = connect



// 之前以为是每次请求每次连接
// app.js中启动server打开连接就行了
// class GooseCnt {
//     constructor(dbName) {
//         this.dbName = dbName
//     }

//     getList() {
//         mongoose.connect('mongodb://localhost:27017/' + this.dbName)
//         return new Promise(
//             (resolve, reject) => {

//             }
//         )
//     }

//     insert() {
//         mongoose.connect('mongodb://localhost:27017/' + this.dbName)
//         return new Promise(
//             (resolve, reject) => {
//                 var Schema = mongoose.Schema
//                 var ObjectId = Schema.ObjectId
//                 var schema = new schema({

//                 })

//             }
//         )
//     }
// }