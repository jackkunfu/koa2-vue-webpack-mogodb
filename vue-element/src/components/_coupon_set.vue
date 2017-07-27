<template>
    <el-col :span="13" style="height: 100%;overflow: auto;padding:30px;">
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="优惠券名称">
                <el-input v-model="form.name" :disable='true'></el-input>
            </el-form-item>

            <el-form-item label="供应商">
                <el-select v-model="form.company">
                    <el-option label="请选择" value="0" :checked="true"></el-option>
                    <el-option label="一树" value="1"></el-option>
                    <el-option label="大参林" value="2"></el-option>
                </el-select>
            </el-form-item>

            <!-- <el-form-item label="优惠券类型">
                <el-select v-model="form.type">
                    <el-option label="满减" value="0"></el-option>
                    <el-option label="直减" value="1"></el-option>
                </el-select>
            </el-form-item> -->

            <el-form-item label="配置1">
                <el-radio-group v-model="form.type">
                    <el-radio label="0" value="0">满减</el-radio>
                    <el-radio label="1" value="1">直减</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="配置1">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.startTime" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2" style="text-align:center;">-</el-col>
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.endTime" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>

            <el-form-item label-width="120px">
                <el-button type="primary" @click="onSubmit">立即配置</el-button>
            </el-form-item>
        </el-form>
    </el-col>
</template>

<script>
    var oriForm = {
                    name: '',
                    value: 0,
                    type: 0,
                    way: 0,
                    startTime: '',
                    endTime: ''
                };
                
    export default {
        data () {
            return {
                form: oriForm
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.$store.state.topTip = '配置使用优惠券'
            })
        },
        methods: {
            onSubmit () {
                console.log(this.form)
            }
        }
    }
</script>