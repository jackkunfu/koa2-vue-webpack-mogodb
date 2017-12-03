(function(Vue, $) {
    // var base = 'http://zhengwusport.com'
    var base = ''
    // var base = 'http://zhengwu.com:8888/web';
    Vue.prototype._ajaxData = function(type, url, options, cb) {
        $.ajax({
            type: type,
            url: base + url,
            dataType: 'json',
            data: options,
            xhrFields: {
                withCredentials: true
            },
            // crossDomain: true
        }).done(function(res) {
			cb(res);
        }).fail(function(e) {
            console.error(e);
            alert('请求失败'+JSON.stringify(e))
        })
    }

    if ('ontouchstart' in window) {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 30 + 'px';
    }


})(Vue, $)
