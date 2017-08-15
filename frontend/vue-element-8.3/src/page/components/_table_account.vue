
<template>
    <el-col>
        <el-table :data="accountData" stripe style="width:100%">
            <el-table-column prop="id" label="账户ID" width="70"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="phone" label="手机"></el-table-column>
            <el-table-column prop="area.value" label="所属区域"></el-table-column>
            <el-table-column prop="role.value" label="角色"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>

            <el-table-column label="管理" width="100">
                <template scope="scope">
                    <el-button type="primary" icon="edit" @click="edit(scope.$index, scope.row, scope.row.id)" size="small" title="编辑"></el-button>
                    <el-button type="primary" icon="delete" @click="del(scope.$index, scope.row.id)" size="small" title="删除"></el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- <el-pagination layout="prev, pager, next" :total="totalPage" :page-size="10" :current-page="currentPage"></el-pagination> -->

        <div class="edit-ctn" style="display:none;margin:15px;">
            <div>{{curAccount.name ? '编辑'+curAccount.nameCopy:''}}</div>
            <el-form label-width="80px" :model="curAccount" style="width:50%;padding:20px;">
                <el-form-item label="账户ID">
                    <el-input v-model="curAccount.id" :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="账户名称">
                    <el-input v-model="curAccount.name"></el-input>
                </el-form-item>

                <el-form-item label="手机">
                    <el-input v-model="curAccount.phone"></el-input>
                </el-form-item>

                <el-form-item label="所属区域">
                    <el-select v-model="curAccount.area.value" placeholder="请选择所属区域">
                        <el-option v-for="item in areaArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="角色">
                    <el-select v-model="curAccount.role.value" placeholder="请选择角色">
                        <el-option v-for="item in roleArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="创建时间">
                    <el-input v-model="curAccount.createTime" :disabled="true"></el-input>
                </el-form-item>

                <el-button style="margin:0 50px 30px 80px;" @click="editOk">确定</el-button>
                <el-button style="margin:0 50px 30px 80px;" @click="editCancel">取消</el-button>

            </el-form>
        </div>

        
    </el-col>
</template>

<script>
    import $ from 'jquery'
    import Vue from 'vue'
    var currentPage = 1;
    var totalPage = 1000;

    var areaArr = [{value:0,label:'A区'},{value:1,label:'B区'},{value:2,label:'C区'},{value:3,label:'D区'}]
    var roleArr = [{value:1,label:'角色1'},{value:2,label:'角色2'},{value:3,label:'角色3'}]

    var accountData = [
        {
            id: 0,
            name: '账户1',
            phone: 133333333333,
            area: {id:0, value:'A区'},
            role: {id:11, value:'角色1'},
            createTime: '2017-2-1'
        },{
            id: 12,
            name: '账户12',
            phone: 132342342332,
            area: {id:0, value:'C区'},
            role: {id:11, value:'角色1'},
            createTime: '2017-2-1'
        }
    ]

    var curAccount = {
            id: null,
            name: '',
            phone: '',
            area: {id:null, value:'请选择', label:'请选择' },
            role: {id:null, value:'请选择', label:'请选择' },
            createTime: ''
        }

    accountData = accountData.concat(accountData);

    export default {
        data() {
            return {
                areaArr,
                roleArr,
                curAccount,
                curEditingIndex: null,
                accountData: [],
                totalPage,
                currentPage
            }
        },
        async mounted () {
            this.$store.state.topTip = '账户管理'
            this.accountData = accountData;
            this.areaArr = areaArr;
            this.roleArr = roleArr;
            this.$nextTick(async () => {
                // userList().then((d)=>{
                //     // console.log(d)
                //     this.accountData = d;
                // })

                // console.log(this.accountData)
                var d = await this._apiData.accountList();
                this.accountData = d.model;
            })
        },
        methods: {
            edit(i, row, id) {
                console.log(i)
                this.curAccount = $.extend(true, {}, row)
                $('.edit-ctn').show();
                this.curAccount.nameCopy = this.curAccount.name;
                this.curEditing.index = i
                this.curEditing.id = id
            },
            async del(i, id) {
                console.log(id);
                // var res = await this._apiData.delAccount();
                // alert(res.msg)
                // res.success && this.accountData.splice(i, 1);
            },
            async getData()  {
                // return (()=>{
                //     userList().then((d)=>{s
                //         return d;
                //     })
                // })()
                // return await this._apiData.accountList();
            },
            async editOk(){
                this.curAccount.nameCopy = null;
                // 直接给数组的某一项替换，不会触发dom变化
                // 需要用到set或者Vue的变异数组方法splice等,
                this.$set(this.accountData, this.curEditing.index, this.curAccount);
                // var res = await this._apiData.update({id: this.curEditing.id});
                // alert(res.msg)
                // res.success && $('.edit-ctn').hide();
                // res.success && this.$set(this.accountData, this.curEditing.index, this.curAccount);

                // this._apiData.updateAccount({id: this.curEditing.id}).then((d)=>{
                //     d.success && this.$set(this.accountData, this.curEditing.index, this.curAccount);
                //     alert(d.msg)
                //     $('.edit-ctn').hide();
                // })
            },
            editCancel(){
                $('.edit-ctn').hide();                
            }
        },
        watch: {
            accountData(){
                return this.accountData
            }
        }
    }
</script>