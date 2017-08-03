<template>
    
    <el-col>

        <el-table :data="roleData" stripe style="width:100%">

            <el-table-column prop="id" label="角色ID"></el-table-column>
            <el-table-column prop="name" label="角色名称"></el-table-column>
            <!-- <el-table-column prop="isVirtualShop" label="虚拟店铺"></el-table-column> -->
            <el-table-column prop="createTime" label="添加时间"></el-table-column>

            <el-table-column label="管理">
                <template scope="scope">
                    <!-- <router-link :to="{name:'userChange', params: scope.row}">
                        <el-button type="primary" icon="edit" size="small" title="修改"></el-button>
                    </router-link> -->
                    <el-button type="primary" icon="edit" @click="edit(scope.$index, scope.row, scope.row.id)" size="small" title="配置权限"></el-button>

                    <el-button type="primary" icon="delete" @click="del(scope.$index, scope.row, scope.row.id)" size="small" title="删除"></el-button>
                </template>
            </el-table-column>

            <el-pagination layout="prev, pager, next" :total="totalPage" :page-size="10" :current-page="currentPage"></el-pagination>
        </el-table>

        <div class="edit-ctn" style="display:none;margin-top:20px;">
            <div style="color:#20a0ff">{{curRole.name ? '编辑'+curRole.nameCopy:''}}</div>

            <el-form label-width="80px" :model="curRole" style="width:50%;padding:20px;">

                <el-form-item label="角色名称">
                    <el-input v-model="curRole.name"></el-input>
                </el-form-item>

                <!-- <el-form-item label="虚拟店铺">
                    <el-radio-group v-model="curRole.isVirtualShop">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item> -->

                <el-form-item label="添加时间">
                    <el-input v-model="curRole.createTime" :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="操作">
                    <div v-for="(item,i) in curRole.powers" :key="item.id">
                        <span style="display:inline-block;width:120px;">{{item.name}}</span>
                        <span v-for="(cur,j) in item.operate" :key="cur.id" style="margin-right:10px;">
                            <el-checkbox v-model="cur.status"></el-checkbox>
                            {{cur.name}}
                        </span>  
                    </div>
                </el-form-item>

                <el-button style="margin:0 50px 30px 80px;" @click="editOk">确定</el-button>
                <el-button style="margin:0 50px 30px 80px;" @click="editCancel">取消</el-button>

            </el-form>
        </div>

    </el-col>
</template>

<script>

    import $ from 'jquery'

    var roleData = [
        {
            id: 0,
            name: '角色1',
            createTime: '2017-1-1',
            // isVirtualShop:            // admin网站里有这个，这里应该需不需要
            powers: [             //该角色权限列表数组
                {
                    id: 0,
                    name: '权限一',
                    operate: [ 
                        {id: 11, name: '增加',status: false},
                        {id: 11, name: '删除',status: true},
                        {id: 11, name: '编辑',status: true}
                        // {id: 11, name: '增加',status: true}
                    ]
                },
                {
                    id: 0,
                    name: '权限22',
                    operate: [ 
                        {id: 11, name: '增加',status: false},
                        {id: 11, name: '删除',status: true},
                        {id: 11, name: '编辑',status: false}
                        // {id: 11, name: '增加',status: true}
                    ]
                } 
            ]  
        },
        {
            id: 1,
            name: '角色2',
            createTime: '2017-11-11',
            // isVirtualShop:            // admin网站里有这个，这里应该需不需要
            powers: [             //该角色权限列表数组
                {
                    id: 10,  
                    name: '权限222',
                    operate: [ 
                        {id: 111, name: '增加',status: true},
                        {id: 111, name: '删除',status: false},
                        {id: 111, name: '编辑',status: true}
                        // {id: 11, name: '增加',status: true}
                    ]
                } 
            ] 
        }
    ]

    roleData = roleData.concat(roleData)
    roleData = roleData.concat(roleData)

    
    var currentPage = 1;
    var totalPage = 1000;

    import selfUtil from '../../basic/function.js'

    function a(){
        $('.edit-ctn').toggle();
    }

    var methodsManage = new selfUtil.ElmentUiTableManage(roleData, {}, a).init()
    var mixMethods = {
        methods: methodsManage
    }

    
 
    export default {
        mixins: [mixMethods],
        data() {
            return {
                curRole: {},
                labelPosition: 'left',
                roleData: [],
                totalPage,
                currentPage,
                curEditing: null
            }
        },
        beforeMount(){
            // this.$options.mixins = [mixMethods]
        },
        mounted () {
            this.$store.state.topTip = '角色管理'
            this.roleData = roleData;
            this.$nextTick(() => {
                // this._apiData.userList().then((d)=>{
                //     // console.log(d)
                //     this.tableData = d;
                // })

                // console.log(this.tableData)
            })
        },
        methods: {
            // ...roeManageFunArr,

            // edit(i, row, id) {
            //     var curRow = $.extend(true, {}, row)
            //     this.curRole = curRow;
            //     this.curRole.nameCopy = this.curRole.name
            //     $(window).scrollTop($('.edit-ctn').offset().top)
            //     $('.edit-ctn').show();
            //     this.curEditing = {id: id, index: i}
            // },
            // del(i, row, id) {
            //     console.log(id);
            //     this.roleData.splice(i, 1);
            //     // var res = await this._apiData.delAccount();
            //     // alert(res.msg)
            //     // res.success && this.roleData.splice(i, 1);
            // },
            // async getData() {
            //     // return (()=>{
            //     //     this._apiData.userList().then((d)=>{
            //     //         return d;
            //     //     })
            //     // })()
            //     return await this._apiData.roleList()
            // },
            // async editOk(){
            //     this.curRole.nameCopy = null
            //     this.$set(this.roleData, this.curEditing.index, this.curRole);
            //     $('.edit-ctn').hide();
            //     // var res = await this._apiData.update({id: this.curEditing.id});
            //     // alert(res.msg)
            //     // res.success && $('.edit-ctn').hide();             
            //     // res.success && this.$set(this.roleData, this.curEditing.index, this.curRole);             
            // },
            // editCancel(){
            //     $('.edit-ctn').hide();                
            // }
        }       
    }
</script>