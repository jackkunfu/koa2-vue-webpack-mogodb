// var userModel = require('./models/user.js')
// var Movie = require('./models/movie.js')

// var PdNav = require('./models/pd/nav.js')
// var PdRole = require('./models/pd/role.js')

// module.exports = {
//     userModel,
//     Movie,
//     PdNav,
//     PdRole
// }


// 上面是一个一个写各个model，下面尝试用方法工厂模式批量处理
const MongooseModel = require('./modelFun.js')

module.exports = {
    PdRole: new MongooseModel('PdRole', {
        // id: ObjectId,
        name: String,
        createTime: Date,
        power: Array
    })
}