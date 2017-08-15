const router = require('koa-router')()

router.get('/', async(ctx, next) => {
    await ctx.render('index', {})
})







// sports项目路由
router.get('/list', async(ctx, next) => {
    await ctx.render('list', {})
})
router.get('/detail', async(ctx, next) => {
    await ctx.render('detail', {})
})
router.get('/self', async(ctx, next) => {
    await ctx.render('self', {})
})
router.get('/enroll', async(ctx, next) => {
    await ctx.render('enroll', {})
})
router.get('/manage/hall', async(ctx, next) => {
    await ctx.render('manage/hall', {})
})

module.exports = router