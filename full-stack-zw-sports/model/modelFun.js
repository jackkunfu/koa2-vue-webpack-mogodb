class MongooseModelBasic {
    constructor(modelName, schema) {
        this.modelName = modelName;
        this.schema = schema;
        this.schemaObj = null;
        return this.init();
    }

    init() {
        const mongoose = require('mongoose');
        const Schema = mongoose.Schema;

        this.schemaObj = new Schema(this.schema);

        this.schemaObj.pre('save', (next) => {
            next()
        })

        this.schemaObj.statics = {
            fentch(options = {}, cb) {
                if (options == {}) {
                    // 这里的this，应该是谁调用这个方法，谁就是this
                    // 具体使用时是接口中的model对象调用的，所以这里应该是具体的model
                    // 所以此构造函数中不用bind改变this的指向
                    return this.findAll().exec(cb)
                } else {
                    return this.find(options).exec(cb)
                }
            },
            // update(conditions, newRole, cb) {
            //     return this.update(conditions, newRole).exec(cb)
            // },
            del(options, cb) {
                return this.fentch({ _id: options.name }).remove()
            }
        }

        var obj = mongoose.model(this.modelName, this.schemaObj)
        return obj
    }
}

module.exports = MongooseModelBasic