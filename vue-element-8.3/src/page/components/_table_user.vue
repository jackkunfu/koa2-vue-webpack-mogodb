
<template>
    <el-col>
        <el-table :data="tableData" stripe style="width:100%">
            <el-table-column prop="id" label="用户ID" width="70"></el-table-column>
            <el-table-column prop="name" label="姓名" width="80"></el-table-column>
            <el-table-column prop="avator" label="头像" width="100">
                <template scope="scope">
                    <img :src="scope.row.avator" alt="" width="80" height="80" />
                </template>
            </el-table-column>
            <el-table-column prop="desc" label="描述"></el-table-column>
            <el-table-column prop="role" label="角色"></el-table-column>
            <el-table-column prop="type" label="类型"></el-table-column>
            <el-table-column prop="date" label="日期" width="100"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column label="管理" width="100">
                <template scope="scope">

                    <router-link :to="{name:'userChange', params: scope.row}">
                        <el-button type="primary" icon="edit" size="small" title="修改"></el-button>
                    </router-link>

                    <!-- <el-button type="primary" icon="edit" @click="edit(scope.row.id)" size="small" title="修改"></el-button> -->
                    <el-button type="primary" icon="delete" @click="del(scope.row.id)" size="small" title="删除"></el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination layout="prev, pager, next" :total="totalPage" :page-size="10" :current-page="currentPage"></el-pagination>
    </el-col>
</template>

<script>
    import { userList } from '@/api/getData.js'
    
    var currentPage = 1;
    var totalPage = 1000;

    export default {
        data() {
            return {
                tableData: [],
                totalPage,
                currentPage
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.$store.state.topTip = '用户管理'

                userList().then((d)=>{
                    // console.log(d)
                    this.tableData = d;
                })

                console.log(this.tableData)
            })
        },
        methods: {
            edit(id) {
                console.log(id);
            },
            del(id) {
                console.log(id);
            },
            getData() {
                return (()=>{
                    userList().then((d)=>{
                        return d;
                    })
                })()
            }
        }
    }
</script>