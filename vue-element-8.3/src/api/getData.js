import fetch from "@/config/fetch"

// 模拟数据  最终要删掉
import MODEL from '../basic//model'

function promiseData(d) {
    return (function() {
        return new Promise(function(resolve, reject) {
            resolve(d);
        })
    })()
}


/**
 * 登陆
 */

export const login = data => fetch({ _api: 'pd.general.user.login', _v: '1.0' }, data);
export const signout = data => fetch({ _api: 'pd.general.user.login', _v: '1.0' }, data);
export const adminList = data => fetch('/admin/all', data);
export const getAdminInfo = () => fetch('/admin/info');


// 模拟数据  最终要删掉
export const userList = () => {
    // return new Promise(function(resolve, reject){
    //     resolve(MODEL.userData);
    // })
    return promiseData(MODEL.userData);
}
export const menuList = () => {
    return promiseData(MODEL.adNavMenu);
}
export const couponList = () => {
    return promiseData(MODEL.userData);
}


// export const userList = data => fetch('/admin/all', data);
// export const menuList = () => fetch('/admin/all', data);
// export const couponList = data => fetch('/admin/all', data);

export const addCoupon = data => fetch('/admin/all', data);
export const delCoupon = data => fetch('/admin/all', data);

export default {
    login,
    adminList,
    getAdminInfo,
    userList,
    menuList,
    couponList,
    addCoupon,
    delCoupon
}