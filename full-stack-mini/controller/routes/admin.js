const router = require('koa-router')();

router.prefix('/admin');

router.get('/', function(ctx, next) {
    ctx.body = 'admin index!'
})

router.get('/a', function(ctx, next) {
    ctx.body = 'admin/a index!'
})

module.exports = router