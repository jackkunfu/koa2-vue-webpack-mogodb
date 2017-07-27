import $ from "jquery";
var md5 = require("md5");

var browser = {
    versions: function () {
        var u = navigator.userAgent;
        return {
            trident: u.indexOf("Trident") > -1,
            presto: u.indexOf("Presto") > -1,
            webKit: u.indexOf("AppleWebKit") > -1,
            gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1,
            mobile: u.match("AppleWebKit") && !u.match("windows"),
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            mac: u.indexOf("Mac") > -1,
            android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
            iPhone: u.indexOf("iPhone") > -1,
            iPad: u.indexOf("iPad") > -1,
            webApp: u.indexOf("Safari") == -1,
            weixin: u.match(/MicroMessenger/i) == "MicroMessenger"
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

var pudong = {

    appVersion: "1.0.0",
    appId: function () {
        return 16; // web
    },
    appKey: function () {
        return 'pudong*b'; // web
    },
    root: function () {
        var js = window.document.scripts;
        js = js[js.length - 1].src.substring(0, js[js.length - 1].src.lastIndexOf("/"));
        js = js.substring(0, js.lastIndexOf("/") + 1);
        return js;
    }(),
    buildInput: function (inputs) {
        inputs._appId = pudong.appId();
        inputs._sy = inputs._sy || pudong._sy;
        inputs._t = inputs._t || new Date().getTime();
        inputs._v = inputs._v || pudong.appVersion;
        return inputs;
    },
    buildAt: function (inputs) {
        var params = {};
        var array = [];
        var i = 0;
        var at = "";
        $.each(inputs, function (name, value) {
            params[name] = value;
            array[i] = name;
            i++;
        });
        array.sort();
        for (var ele in array) {
            at += array[ele];
            at += params[array[ele]];
        }
        return md5(md5(at) + pudong.appKey());
    },
    buildData: function (inputs) {
        var _business = $.param(pudong.buildInput(inputs));
        var _at = pudong.buildAt(inputs);
        return _business + "&_at=" + _at;
    },
    _sy: function () {

        var device = _device();
        var host = window.location.host;
        var width = window.screen.width;
        var height = window.screen.height;

        let value = "P||1||" + width + "*" + height + "||" + device + "||4||" + host;
        console.log('_sy = ' + value);
        return value;
    }()
};

function _device() {
    let device;
    if (browser.versions.android) {
        device = "android";
    } else if (browser.versions.ios) {
        device = "ios";
    } else if (browser.versions.mobile) {
        device = "mobile";
    }
    return device;
}

export {
    pudong,
    browser
}
