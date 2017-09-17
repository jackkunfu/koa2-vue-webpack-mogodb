const router = require('koa-router')();

router.prefix('/admin');

router.get('/hall', async (ctx, next) => {
    await ctx.render('manage/hall', {})
    next();
})

router.get('/a', function(ctx, next) {
    ctx.body = 'admin/a index!';
    next();
})

module.exports = router
