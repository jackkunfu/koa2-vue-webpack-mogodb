const api = require('koa-router')();

api.prefix('/api');

const model = require('../model')
const PdNav = model.PdNav

api.post('/aa', async(ctx, next) => {
    console.log('3333222')
    var data = await cnt.getList('hutong')
    console.log('3333222')
    ctx.body = data;
})

api.post('/admin/updateRole', async(ctx, next) => {
    var newRole = ctx.request.body;
    newRole.url = newRole.url || ''

    PdNav.fentch({ name: newRole.name }, async(err, res) => {
        err && console.log(err);
        console.log(res)

        if (res.length == 0) {
            new PdNav(newRole).save((err, res) => {
                err && console.log(err);
                console.log(res)
                if (!err) {
                    ctx.body = {
                        success: true,
                        msg: '添加角色成功'
                    };
                }
            })
        } else {
            var update = await PdNav.updata(res, { name });
            console.log(res);
            ctx.body = {
                success: false,
                msg: '已存在该角色'
            };
        }
    })

})

module.exports = api;