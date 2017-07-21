import {router, cntDb} from '../_basic.js';

route.prefix('/admin');

router.get('/', function (ctx, next) {
  ctx.body = 'admin index!'
})

router.get('/a', function (ctx, next) {
  ctx.body = 'admin/a index!'
})