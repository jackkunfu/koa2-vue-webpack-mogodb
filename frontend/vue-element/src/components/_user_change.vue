<template>
    <el-col :span="13" style="height: 100%;overflow: auto;padding:30px;">
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="用户名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="头像">
                <img :src="form.avator || 'http://img1.skqkw.cn:888/2014/12/06/09/jqvsm4tvqas-76270.jpg'" />

                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
                    <el-button size="small" type="primary">更换</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>

            <el-form-item label="角色">
                <el-select v-model="form.role">
                    <el-option label="管理员" value="0"></el-option>
                    <el-option label="会员" value="1"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="日期">
                <el-input v-model="form.date" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="描述">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>

            <el-form-item label="地址">
                <el-input type="textarea" v-model="form.address"></el-input>
            </el-form-item>

            <el-form-item label-width="120px">
                <el-button type="primary" @click="onSubmit">立即{{action}}</el-button>
                <!-- <el-button>取消</el-button> -->
            </el-form-item>
        </el-form>
    </el-col>
</template>

<script>
    var oriForm = {
                    name: '',
                    avator: 0,
                    role: 0,
                    date: transDate(new Date()),
                    desc: '',
                    address: ''
                }

    function transDate(d){
        var dArr = d.toString().split(' ');
        var m = d.getMonth() + 1;
        return dArr[3] + '-' +  m + '-' + dArr[2]
    }

    export default {
        data () {
            return {
                isEdit: this.$route.params.date !== undefined,   // 这里随便取date字段进行判断
                form: oriForm,
                action: '新增'
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.$store.state.topTip = '新增/编辑用户'

                // 用户列表点击编辑，router-link params传递过来的参数
                if(this.isEdit){  
                    this.form = this.$route.params;
                    this.action = '更新';
                }
            })
        },
        methods: {
            onSubmit () {
                // this._apiData.changeUse(this.form).then((d)=>{
                //     if(d.success){
                //         this.$router.push('/user')
                //     }else{
                //         this.$message({
                //             info: d.message,
                //             type: error
                //         })
                //     }
                // })
                // console.log(this.form)
            }
        }
    }
</script>