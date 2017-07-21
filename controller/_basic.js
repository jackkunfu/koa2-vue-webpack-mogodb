const router = require('koa-router')();
const ConnextMongodb = require('../connect/connect.js');
const cntDb = new ConnextMongodb();

module.exports = {
	router,
	cntDb
}