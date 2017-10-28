(function(Vue, $) {
    var base = 'http://118.31.19.178'
    Vue.prototype._ajaxData = function(type, url, options, cb) {
        $.ajax({
            type: type,
            url: base + url,
            dataType: 'json',
            data: options
        }).done(function(res) {
			if(res.code == 1){
				cb(res);
			}else{
				alert(res.msg)
			}
        }).fail(function(e) {
            console.error(e);
            alert(e.msg)
        })
    }

    if ('ontouchstart' in window) {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 37.5 + 'px';
    }


})(Vue, $)
