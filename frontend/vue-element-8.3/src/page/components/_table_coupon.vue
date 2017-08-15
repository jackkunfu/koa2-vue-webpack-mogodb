<template>
    <el-col>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="desc" label="描述"></el-table-column>
            <el-table-column prop="date" label="生效日期"></el-table-column>
            <el-table-column prop="date" label="失效日期"></el-table-column>
            <el-table-column label="管理" width="180">
                <template scope="scope">
                    <!-- <el-button type="primary" icon="edit" @click="edit(scope.row.id)" size="small"></el-button> -->
                    <!-- <el-button type="primary" icon="delete" @click="del(scope.row.id)" size="small"></el-button> -->

                    <router-link :to="{name:'couponChange', params: scope.row}">
                        <el-button type="primary" size="small">修改</el-button>
                    </router-link>


                    <!-- <el-button type="primary" size="small" @click="edit(scope)">修改</el-button> -->
                    <el-button type="info" size="small" @click="use(scope.row.id)">使用</el-button>
                    <el-button type="danger" size="small" @click="del(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination layout="prev, pager, next" :total="totalPage" :page-size="10" :current-page="currentPage"></el-pagination>
    </el-col>

</template>

<script>
    export default {
        data() {
            return {
                tableData: [],
                totalPage: 100,
                currentPage: 1
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.$store.state.topTip = '优惠券列表'

                this._apiData.couponList().then((d)=>{
                    this.tableData = d;
                })
            })
        },
        methods: {
            edit(id) {
                console.log(id);
            },
            del(id) {
                console.log(id);
            },
            use(id) {

            }
        }
    }
</script>