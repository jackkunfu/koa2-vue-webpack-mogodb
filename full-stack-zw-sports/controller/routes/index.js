const router = require('koa-router')()

router.get('/', async(ctx, next) => {
    await ctx.render('index', {});
    next();
})







// sports项目路由
router.get('/list', async(ctx, next) => {
    await ctx.render('list', {});
    next();
})
router.get('/detail', async(ctx, next) => {
    await ctx.render('detail', {});
    next();
})
router.get('/self', async(ctx, next) => {
    await ctx.render('self', {});
    next();
})
router.get('/enroll', async(ctx, next) => {
    await ctx.render('enroll', {});
    next();
})
router.get('/manage/hall', async(ctx, next) => {
    await ctx.render('manage/hall', {});
    next();
})

module.exports = router
