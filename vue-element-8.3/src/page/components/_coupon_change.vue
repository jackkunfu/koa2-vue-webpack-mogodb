<template>
    <el-col :span="13" style="height: 100%;overflow: auto;padding:30px;" class="step-ctn">

        <el-steps :space="100" :active="step" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
            <el-step title="步骤 4"></el-step>
            <el-step title="步骤 5"></el-step>
        </el-steps>

        <coupon-step1 ref="step1"></coupon-step1>
        <coupon-step2 ref="step2"></coupon-step2>
        <coupon-step3 ref="step3"></coupon-step3>
        <coupon-step4 ref="step4"></coupon-step4>
        <coupon-step5 ref="step5"></coupon-step5>
    </el-col>
</template>

<script>
    import $ from 'jquery'
    import couponStep1 from './parts/_coupon_step_1.vue'
    import couponStep2 from './parts/_coupon_step_2.vue'
    import couponStep3 from './parts/_coupon_step_3.vue'
    import couponStep4 from './parts/_coupon_step_4.vue'
    import couponStep5 from './parts/_coupon_step_5.vue'

    export default {
        data () {
            return {
                isEdit: this.$route.params.name !== undefined,
                couponInfo: {},
                step: 0
            }
        },
        components: {
            couponStep1,couponStep2,couponStep3,couponStep4,couponStep5
        },
        mounted () {
            this.$nextTick(() => {
                this.$store.state.topTip = '新增/编辑优惠券';

                // 如果是编辑
                if(this.isEdit){
                    this.action = '更新';

                    // var couponInfo = $.extend({}, this.$route.params)
                    this.form = editForm;
                }
            })
        },
        methods: {
            nextStep () {
                if(this.step <4 ) this.step++;
            },
            preStep (){
                if(this.step > 0 ) this.step--;
            },
            watch: {
                step(v) {
                    $('.step-ctn >div').eq(v).show().siblings().hide();
                }
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