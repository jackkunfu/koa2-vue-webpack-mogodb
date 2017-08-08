const api = require('koa-router')();

api.prefix('/api');

api.post('/aa', async function(ctx, next) {
    console.log('3333222')
    var data = await cnt.getList('hutong')
    console.log('3333222')
    ctx.body = data;
})

module.exports = api;