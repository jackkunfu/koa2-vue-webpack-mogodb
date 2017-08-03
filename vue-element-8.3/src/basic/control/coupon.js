class Coupon{
    constructor(options, save){
        this.options = options;     // 券本身的基本信息
        this.coupon = null;
    }

    async create(save){  // 创建   优惠券第二步的时候使用
        // return (this.save(this.options).then((d)=>{
        //     return d.id;
        // }))()

        var coupon = await save(this.options)
        this.coupon = coupon;
    }

    async use(obj, update){  // 配置设置券的业务信息  优惠券最后一步保存的时候使用
        obj.couponId = this.coupon.id;
        var res = await update(obj)
    }
}


module.exports = Coupon;