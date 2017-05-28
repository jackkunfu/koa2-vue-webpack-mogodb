var api = require('koa-router')
var mogoDb = require('mongodb')
var ConnextMongodb = require('./connect')
var cnt = new ConnextMongodb();

api.post('/list', function(ctx, next) {
    var data = await cnt.getList();
    ctx.end(data);
})