var cntUrl = require('./config.js').MogoDbConnectUrl
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')

var findRestaurants = function(db, callback) {
    var cursor = db.collection(name).find();
    cursor.each(function(err, result) {
        if (result != null) {
            console.log(result);
        } else {
            callback();
        }
    });
}

class ConnextMongodb {
    constructor() {}

    async cntMongo(name) {
        return new Promise(async(resolve, reject) => {
            await MongoClient.connect(cntUrl + '/' + name, (err, db) => {
                // assert.equal(null, err);
                console.log(cntUrl + '/' + name + "连接接成功");
                if (err) {
                    console.log(err)
                    db.close()
                    reject(err)
                }
                console.log('开始传递db')
                resolve(db);
            });
        })
    }



    async getList(name, opts = {}) {
        return await this.cntMongo(name).then(
            async(db) => {
                return await db.collection(name).find(opts).toArray((err, docs) => {
                    // assert.equal(err, null)
                    // assert.equal(2, docs.length)
                    console.log("Found the following records")
                    console.log(docs)
                    db.close()
                    return docs
                })
            }
        )
    }
}
module.exports = ConnextMongodb;