const router = require('koa-router')();

router.prefix('/users')

router.get('/', function(ctx, next) {
    ctx.body = 'users index!';
    next();
})

router.get('/bar', function(ctx, next) {
    ctx.body = 'users/bar response';
    next();
})

module.exports = router
