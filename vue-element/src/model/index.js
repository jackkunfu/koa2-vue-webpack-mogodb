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
            name: '首页',
            url: 'manage'
        }
    ],
    userData: [{
        id: 0,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        avator: 'http://img1.skqkw.cn:888/2014/12/06/09/jqvsm4tvqas-76270.jpg', // 头像
        desc: '', // 描述
        role: '', // 角色
        type: '' // 类型
    }, {
        id: 11,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        avator: 'http://img1.skqkw.cn:888/2014/12/06/09/jqvsm4tvqas-76270.jpg', // 头像
        desc: '', // 描述
        role: '', // 角色
        type: '' // 类型
    }, {
        id: 22,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        avator: 'http://img1.skqkw.cn:888/2014/12/06/09/jqvsm4tvqas-76270.jpg', // 头像
        desc: '', // 描述
        role: '', // 角色
        type: '' // 类型
    }, {
        id: 33,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        avator: 'http://img1.skqkw.cn:888/2014/12/06/09/jqvsm4tvqas-76270.jpg', // 头像
        desc: '', // 描述
        role: '', // 角色
        type: '' // 类型
    }],
    couponList: [{
        id: 0,
        name: '满100减20'
    }]
}