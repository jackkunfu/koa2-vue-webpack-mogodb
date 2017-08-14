const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var roleSchema = new Schema({
    id: ObjectId,
    name: String,
    createTime: Date,
    power: Array
})

roleSchema.pre('save', (next) => {
    next()
})

roleSchema.statics = {
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

const Role = mongoose.model('Role', roleSchema)
    // console.log('Role')
    // console.log(Role)

module.exports = Role