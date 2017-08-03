import {baseUrl} from "./env";
import $ from "jquery";
import {pudong} from "./environment";

export default async(api = {}, data = {}) => {

    data._api = api._api;
    data._v = api._v;

    return new Promise((resolve, reject) => {

        $.ajax({
            url: baseUrl,
            type: 'POST',
            dataType: 'jsonp',
            jsonp: 'callback',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            data: pudong.buildData(data),
            success: function (res) {

                if (res.success === true && res.model !== null) {
                    resolve(res.model);
                } else {
                    reject(res);
                }
            },
            error: function (xmlHttpRequest, errorMsg, e) {
                var res = {msgCode: '-1', msgInfo: errorMsg, exception: e, xmlHttpReq: xmlHttpRequest};
                reject(res);
            }
        });
    });
}
