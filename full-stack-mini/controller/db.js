const mongoose = require('mongoose');
// var dbUrl = require('../config').zwDb;
var dbUrl = require('../config').pdDb;

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, { server: { auto_reconnect: true } });

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