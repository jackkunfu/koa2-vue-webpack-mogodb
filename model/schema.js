module.exports = {
	userSchema: {
		id: Number,
		name: { type: String, default: '还没名字' },
		password: String,
		image: String,
		desc: String,
		createTime: { type: Date, default: Date.now }
	},
	productSchema: {
		id: Number,
		name: String,
		price: Number,
		pre: String,
		image: String,
		short: String
	}
}