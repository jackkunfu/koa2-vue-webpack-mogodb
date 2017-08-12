// var userModel = require('./models/user.js')
// var Movie = require('./models/movie.js')

// var PdNav = require('./models/pd/nav.js')
// var PdRole = require('./models/pd/role.js')

// console.log('PdRole')
// console.log(PdRole)

// module.exports = {
//     userModel,
//     Movie,
//     PdNav,
//     PdRole
// }


// 上面是一个一个写各个model， 下面尝试用构造函数批量处理
const MongooseModel = require('./modelFun.js')

module.exports = {
    PdRole: new MongooseModel('Role', {
        name: String,
        createTime: Date,
        power: Array
    })
}