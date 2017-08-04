import $ from 'jquery'

class ElmentUiTableManage {
    constructor(data, api, editCtn, vm) {
        this.data = data;
        this.api = api; // 各个增删改查接口对象
        this.curEditing = null; // 临时标记id和当前编辑的行的index的对象
        this.curData = null; // 当前点击编辑需要更改的数据
        this.editCtn = editCtn;
        this.vm = vm
        this.edit = this.edit.bind(this.vm)
    }

    async del(i, row, id) { // 删除操作
        var d = await this.api.del();
        d.success && this.data.splice(i, 1)
    }

    edit(i, row, id) { // 点击编辑处理一些当前的历史数据
        this.curEditing = { index: i, id: id }
        this.curData = $.extend(true, {}, row)
            // this.editCtn()
            // console.log(document.getElementsByClassName(this.editCtn))
    }

    async editOk() { // 提交编辑的数据
        var d = await this.api.edit();
        d.success && this.data.splice(this.curEditing.index, 1, this.curData);
        d.success && this.cb();
    }

    editCancel() {
        $(this.editCtn).hide();
        this.curEditing = null;
        this.curData = null;
    }

    init() {
        return {
            data(){
                return {
                    curEditing: this.curEditing,
                    curData: this.curData,
                }
            },
            methods: {
                del: this.del,
                edit: this.edit,
                editOk: this.editOk,
                editCancel: this.editCancel
            }
            
        }
    }
}

export default {
    objIndexOfArr(obj, arr, key, value) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][key] == value) {
                return i
            }
        }
        return -1
    },
    ElmentUiTableManage
}