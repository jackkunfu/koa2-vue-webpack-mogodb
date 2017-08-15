module.exports = {
    adNavMenu: [{
            name: '用户', // 一级导航
            submenus: [{
                name: '用户管理',
                url: 'user'
            },{
                name: '新增/编辑用户',
                url: 'userChange'
            }]
        },
        {
            name: '优惠券', // 一级导航
            submenus: [ // 二级导航
                {
                    name: '新增/编辑优惠券',
                    url: 'couponChange'
                },
                {
                    name: '优惠券列表',
                    url: 'coupon'
                },
                {
                    name: '优惠券配置',
                    url: 'couponSet'
                }
            ]
        },
        {
            name: '系统配置',
            submenus: [ // 二级导航
                {
                    name: '账户管理',
                    url: 'accountManage'
                },
                {
                    name: '角色管理',
                    url: 'roleManage'
                },
                {
                    name: '权限管理',
                    url: 'accessManage'
                },
                {
                    name: '目录管理',
                    url: 'entryManage'
                }
            ]
        },
        {
            name: '首页',
            url: 'manage'
        }
    ],
    userData: [{
        id: 0,
        date: '2016-05-02',
        name: '王大虎',
        address: '上海市普陀区金沙江路 1516 弄',
        avator: 'http://img1.skqkw.cn:888/2014/12/06/09/jqvsm4tvqas-76270.jpg', // 头像
        desc: '', // 描述
        role: '', // 角色
        phone: '' // 类型
    }, {
        id: 11,
        date: '2016-05-04',
        name: '王二虎',
        address: '上海市普陀区金沙江路 1517 弄',
        avator: 'http://img1.skqkw.cn:888/2014/12/06/09/jqvsm4tvqas-76270.jpg', // 头像
        desc: '', // 描述
        role: '', // 角色
        phone: '' // 类型
    }, {
        id: 22,
        date: '2016-05-01',
        name: '王三虎',
        address: '上海市普陀区金沙江路 1518 弄',
        avator: 'http://img1.skqkw.cn:888/2014/12/06/09/jqvsm4tvqas-76270.jpg', // 头像
        desc: '', // 描述
        role: '', // 角色
        phone: '' // 类型
    }, {
        id: 33,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        avator: 'http://img1.skqkw.cn:888/2014/12/06/09/jqvsm4tvqas-76270.jpg', // 头像
        desc: '', // 描述
        role: '', // 角色
        phone: '' // 手机
    }],
    couponList: [{
        id: 0,
        name: '满100减20'
    }],
    // couponBasic: {
    //     id:
    //     name: 
    //     rule:   // 详细规则
    //     type:     // 优惠券类型
    //     category:     // 分类
    //     isRush:    // 是否是抢券
    //     rushTime:    
    //     productName:    // 对应商品
    //     getWay:    // 兑换方式
    //     shareWay:   // 推广渠道
    //     iaCommend:   // 是否推荐
    //     startTime:   // 开始时间
    //     endTime:  // 失效时间
    // },

    // 权限对象：
    // {
    //     id:
    //     name: '',  // 权限的名称
    //     operations: [{   // 该权限的各个操作数组
    //         id: 
    //         name: '',    //  操作名称   
    //     }]
    // }

    // 角色对象：
    // {
    //     id:            // 角色ID
    //     name:            //  角色名称
    //     createTime:            // 创建时间
    //     // isVirtualShop:            // admin网站里有这个，这里应该需不需要
    //     powers: [             //该角色权限列表数组
    //         {
    //             id:     //  某一个权限id    
    //             operate: [     //  某一个权限的含有的具体的操作列表数组  类似增删改查这些
    //                 {
    //                     id:    //  具体某个操作的id
    //                     status:   // 该操作的状态
    //                 }
    //             ]
    //         } 
    //     ]  
    // }

    // 导航入口entry
    // {
    //     id: ''
    //     label: '一级名称',
    //     url: '',   //  对应的路由地址，这个是前端路由，预留下~
    //     children: [
    //         {    // 二级名称数组
    //             id:
    //             label: '二级1-1',
    //             url: '',
    //         }, {
    //             id: 
    //             label: '二级 1-2',
    //             url: ''

    //             //  三级的情况应该不会有吧、这个应该可以忽略
    //             children: [{  
    //                 label: '三级 1-1-1'
    //                 url: '',
    //             }]
    //         }
    //     ]
    // }

}