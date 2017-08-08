const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

var navSchema = new Schema(require('../../pdSchema').entry)

navSchema.pre('save', (next) => { //  pre  save 事件  数据保存之前都会经过这个事件处理
    if (this.isNew) {
        this.creDate = this.upDate = Date.now()
    } else {
        this.upDate = Date.now()
    }
    next()
})

navSchema.statics = { // Schema 的静态方法 model里调用
    findAll: (cb) => {
        return this.find({})
            .sort('creDate') // 按照创建时间排序
            .exec(cb) // 执行回调方法
    },
    findById: (id, cb) => {
        return this.find({ id: id })
            .exec(cb) // 执行回调方法
    },
}

navSchema.methods = {}

module.exports = mongoose.model(navSchema)