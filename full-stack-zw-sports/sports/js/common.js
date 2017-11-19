(function(Vue, $) {
    var base = 'http://zhengwusport.com'
    // var base = 'http://zhengwu.com:8888/web';
    Vue.prototype._ajaxData = function(type, url, options, cb) {
        $.ajax({
            type: type,
            url: base + url,
            dataType: 'json',
            data: options
        }).done(function(res) {
			cb(res);
        }).fail(function(e) {
            console.error(e);
            alert('请求失败'+e)
        })
    }

    if ('ontouchstart' in window) {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 30 + 'px';
    }


})(Vue, $)
