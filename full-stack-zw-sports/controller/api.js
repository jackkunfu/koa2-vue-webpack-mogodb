const api = require('koa-router')();

api.prefix('/api');

const model = require('../model')
const PdRole = model.Role
const Hall = model.TrainHalls

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

api.post('/listHall', async(ctx, next) => {
    var all = await Hall.fentch()
    ctx.body = {
        data: all,
        success: true,
        msg: '查询成功'
    }
});

api.post('/delHall', async(ctx, next) => {
    console.log(ctx.request.body.id)
    var res = await Hall.findByIdAndRemove(ctx.request.body.id, function(e) {
        if (e) console.log(e)
    })
    console.log(res)
    if (res.success) {
        ctx.body = {
            success: true,
            msg: '删除角色成功'
        }
    } else {
        ctx.body = {
            success: false,
            msg: '删除角色失败'
        }
    }

});




api.post('/addHall', async(ctx, next) => {
    var newHall = ctx.request.body;
    var search = await Hall.fentch({ name: newHall.name })
    if (search.length !== 0) {
        ctx.body = {
            msg: '已存在该名称',
            success: false,
            data: search[0]
        }
        return
    }
    if (!!newHall.createTime) {
        console.log('111')
        var change = Hall.update({ _id: newHall._id }, newHall, function(e, res) {
            if (e) {
                console.log(e);
            } else {
                ctx.body = {
                    success: true,
                    msg: '更新角色成功'
                }
            }
        })
    } else {
        console.log('000')

        newHall.createTime = new Date()
        var save = await new Hall(newHall).save();

        ctx.body = {
            success: true,
            msg: '添加角色成功'
        }
    }
    return
})

module.exports = api;