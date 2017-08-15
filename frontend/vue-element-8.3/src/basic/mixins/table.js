export default {

    // 具体组件使用时，在组件实例中添加api字段：
    api: {
        list,
        add,
        update,
        del
    },

    data() {
        return {
            tableData: [],
            curEditing: { index: null, id: null },
            curRow: {},
            curPage: 1,
            totalPage: null,
            listOption: {}
        }
    },

    methods: {
        btnEdit(i, id, row) { // 点击编辑按钮
            this.curEditing.index = i;
            this.curEditing.id = id;
            this.curRow = row;
        },

        submitCancel() { // 新增/编辑取消
            this.curEditing.index = null;
            this.curEditing.id = null;
            this.curRow = {};
        },

        async list(page) { // 请求当前页的数据
            if (page) this.curPage = page;
            this.options.page = this.curPage;
            var res = await this.api.list(this.options);
            alert(res.msg)
            if (res.success) this.tableData = res.data;
        },

        async submit() { // 提交编辑的数据，可能是添加也可能是编辑
            var isEdit = !!this.curEditing.id;
            var request = isEdit ? this.api.update : this.api.add;
            var res = isEdit ? await request(this.curEditing.id) : await request()
            alert(res.msg);
            isEdit && res.success && this.tableData.splice(this.curEditing.index, 1, this.curRow); // 替换更改行的数据
            isEdit && res.success && this.list(); // 更新本页数据
            if (!isEdit && res.success) this.curPage = 1; // 新增的情况，跳到第一页，展示最新新增的内容
        },

        async del(i, id) {
            this.curEditing.index = i;
            this.curEditing.id = id;

            var res = await this.api.del();
            alert(res.msg);
            res.success && this.tableData.splice(i, 1);
            res.success && this.list(); // 更新本页数据
        },

        async search(options) {
            options.page = 1;
            this.listOption = options;
            this.list(this.listOption); // 更新本页数据
        }

    }

    watch: {
        curPage() {
            this.api.list();
        }
    }

}