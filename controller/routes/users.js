import {router, cntDb} from '../_basic.js';

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'users index!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'users/bar response'
})

module.exports = router
