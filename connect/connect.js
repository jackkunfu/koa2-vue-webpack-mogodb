var cntUrl = require('./config.js').MogoDbConnectUrl
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')

class ConnextMongodb {
    constructor() {}

    cntMongo(name) {
        return new Promise(
            (resolve, reject) => {
                MongoClient.connect(cntUrl + '/' + name, (err, db) => {
                    assert.equal(null, err);
                    console.log(cntUrl + '/' + name + "连接接成功");
                    if (err) {
                        console.log(err)
                        db.close()
                        reject(err)
                    }
                    console.log('开始传递db')
                    resolve(db);
                });
            }
        )
    }

    getList(name, opts = {}) {
        return new Promise(
            (resolve, reject) => {
                this.cntMongo(name).then(
                    (db) => {
                        db.collection(name).find(opts).toArray((err, docs) => {
                            assert.equal(err, null)
                            console.log("Found the following records")
                            console.log(docs)
                            db.close()
                            console.log('连接关闭')
                            resolve(docs)
                        })
                    }
                )
            }
        )
    }

    _operatePromise(name, cb) {
        return new Promise(
            (resolve, reject) => {
                this.cntMongo(name).then(
                    (db) => {
                        var obj = db.collection(name)
                        cb(obj);
                    }
                )
            }
        )
    }


    insert(name, obj) {
        this.cntMongo(name).then(async function(db) {
            var cnt = db.collection(name)
            var res = await cnt.insert(obj)
            db.close();
            return res;
        })
    }

}

module.exports = ConnextMongodb;