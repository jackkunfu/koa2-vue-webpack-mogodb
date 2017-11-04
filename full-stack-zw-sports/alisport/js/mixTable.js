var mixtable = {
    data: {
        changeStatus: '新增',
        tableData: [],
        curEditItem: {}
    },
    methods: {
        addOrUpdate: function() {
            var _this = this;
            var url = this.curEditItem.id ? this.api.edit : this.api.add
            this._ajaxData(url, 'post', this.curEditItem, function(d) {
                alert(d.msg)
                if (d.success) {
                    _this.list();
                    _this.curEditItem = {};
                    _this.changeStatus = '新增';
                }
            })
        },
        edit: function(item) {
            this.curEditItem = $.extend({}, item);
            this.curEditItem.nameCopy = this.curEditItem.name;
            this.changeStatus = '编辑'
        },
        cancel: function() {
            this.curEditItem = {};
            this.changeStatus = '新增'
        },
        del: function(id) {
            var _this = this;
            this._ajaxData(this.api.del, 'post', { id: id }, function(d) {
                alert(d.msg)
                d.success && _this.list();
            })
        },
        list: function() {
            var _this = this;
            this._ajaxData(this.api.list, 'post', {}, function(d) {
                _this.tableData = d.data;
            })
        }
    }
}