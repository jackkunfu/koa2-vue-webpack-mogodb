<el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="优惠券名称">
        <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="优惠券金额">
        <el-input v-model="form.value"></el-input>
    </el-form-item>

    <el-form-item label="领取方式">
        <el-select v-model="form.way" @change="wayChange">
            <el-option label="请选择" value="0"></el-option>
            <el-option label="免费" value="1"></el-option>
            <el-option label="积分兑换" value="2"></el-option>
            <el-option label="收费" value="3"></el-option>
            <el-option label="优惠码兑换" value="4"></el-option>
            <el-option label="码加券" value="5"></el-option>
        </el-select>
    </el-form-item>

    <!-- <el-form-item label="优惠券类型">
        <el-select v-model="form.type">
            <el-option label="满减" value="0"></el-option>
            <el-option label="直减" value="1"></el-option>
        </el-select>
    </el-form-item> -->

    <el-form-item label="优惠券类型">
        <el-radio-group v-model="form.type">
            <el-radio label="0" value="0">满减</el-radio>
            <el-radio label="1" value="1">直减</el-radio>
        </el-radio-group>
    </el-form-item>

    <el-form-item label="有效期">
        <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.startTime" style="width: 100%;" change="timeChange"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
        <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.endTime" style="width: 100%;"></el-date-picker>
        </el-col>
    </el-form-item>

    <el-form-item label-width="120px">
        <el-button type="primary" @click="onSubmit">立即{{action}}</el-button>
        <!-- <el-button>取消</el-button> -->
    </el-form-item>
</el-form>

<script>
    var oriForm = {
        name: '',
        value: null,
        type: 0,
        way: '请选择',
        startTime: '',
        endTime: ''
    }

    export default {
        data () {
            return {
                isEdit: this.$route.params.name !== undefined,
                form: oriForm,
                action: '新增'
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.$store.state.topTip = '新增/编辑优惠券';

                // 如果是编辑
                if(this.isEdit){
                    this.action = '更新';
                    // this.form = this.$route.params;

                    // var editForm = $.extend({}, this.$route.params);
                    var editForm = Array.prototype.reduce.call(this.$route.params, function(a,b){
                        return a;
                    },{})

                    this.form = editForm;
                }
            })
        },
        methods: {
            onSubmit () {
                console.log(this.form.startTime)
                // this._apiData.changeCoupon(this.form).then((d)=>{
                //     if(d.success){
                //         this.$router.push('/coupon')
                //     }else{
                //         this.$message({
                //             info: d.message,
                //             type: error
                //         })
                //     }
                // })
                // console.log(this.form)
            },
            wayChange (el) {
                console.log(el)
            },
            timeChange(t) {
                console.log(1);
                // this.form.startTime = t;
            }
        }
    }
</script>