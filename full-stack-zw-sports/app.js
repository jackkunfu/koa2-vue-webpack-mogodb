const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// const connect = require('./controller/db.js')

const index = require('./controller/routes/index')
const users = require('./controller/routes/users')
const admin = require('./controller/routes/admin')
const api = require('./controller/api')
const feature = require('./controller/feature')

var cors = require('koa-cors')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
    // app.use(require('koa-static')(__dirname + '/static'))
    // app.use(views(__dirname + '/views'))


// pug
// app.use(views(__dirname + '/views', {
//     extension: 'pug'
// }))

// vue project
// app.use(views(__dirname + '/dist/static'))
// app.use(require('koa-static')(__dirname + '/dist'))


// sports project
app.use(views(__dirname + '/sports/app'))
app.use(require('koa-static')(__dirname + '/sports/app'))

// alisports project
// app.use(views(__dirname + '/alisport'))
// app.use(require('koa-static')(__dirname + '/alisport'))

// 允许跨域中间件
app.use(cors());

// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(admin.routes(), admin.allowedMethods())

// api
app.use(api.routes(), api.allowedMethods())

// 尝试小功能 feature
app.use(feature.routes(), feature.allowedMethods())

module.exports = app
