<style>
    .op-item{
        display:inline-block;padding:5px 10px;background-color:#1d90e6;
        margin: 5px 10px 10px 0;
        position: relative;
        color: white;
    }
    .op-item span{
        display: none;
        position: absolute;
        top: -10px;
        right: -2px;
        cursor:pointer;
        color: red;
    }
    .op-item:hover span{
        display: block;
    }
</style>
<template>
    <el-col>

        <el-form label-width="80px" :model="blankAccess" style="width:300px;">
            <el-form-item label="权限名称">
                <el-input v-model="blankAccess.name" class="new-access"></el-input>
            </el-form-item>
            <el-button style="margin: 0 0 20px 80px;" @click="addAccess">新增权限</el-button>
        </el-form>

        <el-table :data="accessData" stripe style="width:100%">
            <el-table-column prop="id" label="权限ID" width='80'></el-table-column>
            <el-table-column prop="name" label="权限名称"width='80'></el-table-column>
            <el-table-column prop="operations" label="操作">
                <template scope="scope">
                    <div style="margin-top:10px;">
                        <el-input style="float:left;width:120px;margin-right:5px;"></el-input>
                        <el-button @click='addItem($event, scope.row.operations)'>添加</el-button>
                    </div>

                    <span v-for='(item,i) in scope.row.operations' :key="i" class="op-item">
                        {{item.name}}
                        <span @click='delItem(scope.row.operations, i, item.id)'>x</span>
                    </span>     
                </template>
            </el-table-column>
            <el-table-column label="管理" width="50">
                <template scope="scope">
                    <!-- <el-button type="primary" icon="edit" @click="edit(scope.row.id)" size="small" title="修改"></el-button> -->
                    <el-button type="primary" icon="delete" @click="delAccess(scope.row.id, scope.$index)" size="small" title="删除"></el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- <el-pagination layout="prev, pager, next" :total="totalPage" :page-size="10" :current-page="currentPage"></el-pagination> -->
    </el-col>
</template>

<script>
    import $ from 'jquery'
    var accessData = [{
        id:0,
        name: '权限1',  // 权限的名称
        operations: [
            { id: 1,name: '操作1'},
            { id: 2,name: '操作2'},
            { id: 3,name: '操作3'}
        ]
    },
    {
        id:1,
        name: '权限1',  // 权限的名称
        operations: [
            { id: 11,name: '操作11'},
            { id: 12,name: '操作12'},
            { id: 13,name: '操作13'}
        ]
    }]
    export default {
        data() {
            return {
                blankAccess: {},
                accessData: accessData
            }
        },
        mounted () {
            this.$store.state.topTip = '权限管理'
            this.$nextTick(() => {
                // userList().then((d)=>{
                //     // console.log(d)
                //     this.accessData = d;
                // })

                // console.log(this.accessData)
            })
        },
        methods: {
            edit(id) {
                console.log(id);
            },
            delAccess(id, i) {
                console.log(id);
                this.accessData.splice(i,1);
            },
            addAccess() {
                var newAccess = $('.new-access input').val().replace(/\s+/g,'')
                if(!this.isExist(newAccess, this.accessData, 'name')){
                    this.accessData.push({
                        name: newAccess,
                        operations: []
                    })
                }
                
            },
            addItem(e, arr) {
                // var preInputValue = e.target.parentNode.previousElementSibling.children[0].value
                var curValue;
                if(e.target.tagName == 'SPAN'){
                    curValue = $(e.target).parent().prev().find('input').eq(0).val()
                }else{
                    curValue = $(e.target).prev().find('input').eq(0).val()
                }

                if(!this.isExist(curValue, arr, 'name')){
                    arr.push({name:curValue})
                }

            },
            delItem(arr, i, id) {
                arr.splice(i, 1);
            },
            getData() {
                return (()=>{
                    userList().then((d)=>{
                        return d;
                    })
                })()
            },
            isExist(target, obj, key){
                target = target.replace(/\s+/g,'');
                if(target == ''){
                    return true;
                }
                if(key){
                    var keyArr = obj.map(function(cur){
                        return cur[key];
                    })
                    if(keyArr.indexOf(target) == -1){
                        return false;
                    }else{
                        return true;
                    }
                }else{
                    return obj.indexOf(target);
                } 
            }
        }
    }
</script>