(function(Vue, $) {

    Vue.prototype._ajaxData = function(url, type, options, cb) {
        $.ajax({
            type: type,
            url: url,
            dataType: 'json',
            data: options
        }).done(function(res) {
            cb(res);
        }).fail(function(e) {
            console.error(e);
            alert(e.msg)
        })
    }

    if ('ontouchstart' in window) {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 64 + 'px';
    }


})(Vue, $)