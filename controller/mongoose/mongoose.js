const mongoose = require('mongoose')


class GooseCnt {
    constructor(dbName) {
        this.dbName = dbName
    }

    getList() {
        mongoose.connect('mongodb://localhost:27017/' + this.dbName)
        return new Promise(
            (resolve, reject) => {

            }
        )
    }

    insert() {
        mongoose.connect('mongodb://localhost:27017/' + this.dbName)
        return new Promise(
            (resolve, reject) => {
                var Schema = mongoose.Schema
                var ObjectId = Schema.ObjectId
                var schema = new schema({

                })

            }
        )
    }
}