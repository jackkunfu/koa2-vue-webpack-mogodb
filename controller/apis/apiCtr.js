const router = require('koa-router')();

router.post('/aa', async function(ctx, next) {
    console.log('3333222')
    var data = await cnt.getList('hutong')
    console.log('3333222')
    ctx.body = data;
})