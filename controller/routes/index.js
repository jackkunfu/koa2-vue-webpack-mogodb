const router = require('koa-router')()
var ConnextMongodb = require('../connect/connect.js')
var cnt = new ConnextMongodb();

router.get('/', async(ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/string', async(ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async(ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

router.post('/aa', async function(ctx, next) {
    console.log('3333222')
    var data = await cnt.getList('hutong')
    console.log('3333222')
    ctx.body = data;
})

module.exports = router