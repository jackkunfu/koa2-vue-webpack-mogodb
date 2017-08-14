const api = require('koa-router')();

api.prefix('/api');

const model = require('../model')
const PdRole = model.PdRole

api.post('/aa', async(ctx, next) => {

    ctx.body = {};
})

api.post('/admin/list', async(ctx, next) => {
    var search = await PdRole.fentch({ name: newRole.name })
    ctx.body = {
        success: true,
        msg: '查询成功',
        data: search
    };
})
api.post('/admin/updateRole', async(ctx, next) => {
    var newRole = ctx.request.body;
    newRole.power = newRole.power || []

    if (!newRole.id) {
        var search = await PdRole.fentch({ name: newRole.name })

        if (search.length !== 0) {
            ctx.body = {
                msg: '已存在该名称',
                success: false,
                data: search[0]
            }
            return false
        }

        newRole.createTime = new Date()
        var save = await new PdRole(newRole).save();
        var all = await PdRole.fentch()

        ctx.body = {
            data: all,
            success: true,
            msg: '添加角色成功'
        }
    } else {

        PdRole.fentch({ name: newRole.name }, async(err, res) => {
            err && console.log(err);

            if (res.length == 0) {
                newRole.id = null;
                new PdRole(newRole).save((err, res) => {
                    err && console.log(err);
                    console.log(res)
                    if (!err) {
                        ctx.body = {
                            success: true,
                            msg: '添加角色成功',
                            data: res
                        };
                    }
                })

            } else {

                var update = await PdRole.updata(res, newRole);
                console.log(res);
                ctx.body = {
                    success: false,
                    msg: '更新角色成功',
                    data: res
                };
            }
        })
    }

})

module.exports = api;