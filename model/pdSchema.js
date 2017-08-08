module.exports = {
    entry: {
        id: Number,
        name: { type: String, default: '入口导航' },
        url: String
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