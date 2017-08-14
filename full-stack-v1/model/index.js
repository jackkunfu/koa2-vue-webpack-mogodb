const ModelFun = require('./modelFun.js')

module.exports = {
    Role: new ModelFun('Role', {
        name: String,
        createTime: Date,
        power: Array
    })
}