class MongooseModelBasic {
    constructor(model, schema) {
        this.model = model;
        this.schema = schema;
        this.init();
    }

    init() {
        const mongoose = require('mongoose');
        const Schema = mongoose.Schema;
        var ObjectId = Schema.ObjectId;
        this.schema.id = ObjectId;

        var schemaObj = new Schema(this.schema);

        schemaObj.pre('save', (next) => {
            next()
        })

        schemaObj.statics = {
            fentch(options = {}, cb) {
                if (options == {}) {

                    return this.findAll().exec(cb)
                } else {
                    return this.find(options).exec(cb)
                }
            },
            update(cur, newRole, cb) {
                return this.update(cur, newRole).exec(cb)
            }
        }

        return mongoose.model(this.name, schemaObj)
    }
}

module.exports = MongooseModelBasic