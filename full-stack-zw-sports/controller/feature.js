// import paQu from './util/paqu'
var paQu = require('./util/paqu')

const feature = require('koa-router')();

// 爬取数据
feature.get('/paqu', async (ctx, next)=>{
    // console.log(ctx.query.url)
    var data = await paQu(ctx.query.url)
    console.log(data)
    ctx.body = data;
})

module.exports = feature