var cntUrl = require('./config.js').MogoDbConnectUrl;
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')

class ConnextMongodb {
    constructor() {

    }

    async connect(fn) {
        MongoClient.connect(cntUrl, function(err, db) {
            assert.equal(null, err);
            console.log("Connected correctly to server");

            // 执行各个查询处理操作
            await fn();

            // 关闭连接
            db.close();
        });
    }
}

// 查询列表方法
async function getList(name, page = 1, str = '') {
    var data = await cnt().from(name);
}

module.exports = ConnextMongodb;