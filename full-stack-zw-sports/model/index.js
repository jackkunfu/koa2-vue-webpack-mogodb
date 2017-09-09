const ModelFun = require('./modelFun.js')

module.exports = {
    Role: new ModelFun('Role', {
        name: String,
        createTime: Date,
        power: Array
    }),



    // sports
    TrainHalls: new ModelFun('hall', {
        name: String,
        img: String,
        createTime: Date,
        address: String,
        desc: String
    }),

}