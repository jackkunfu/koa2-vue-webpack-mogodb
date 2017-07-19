var api = require('koa-router')({
    prefix: '/api'
})
var ConnextMongodb = require('./connect.js')
var cnt = new ConnextMongodb();

api.get('/aa', async function(ctx, next) {
    ctx.body = '11111111111'
})

api.post('/aaa', async function(ctx, next) {
    var data = await cnt.getList('hutong')
    ctx.body = data;
})

// file upload
api.post('/flUp', async function(ctx, next) {
    var data = ctx.body
    ctx.body = data;
})

module.exports = api