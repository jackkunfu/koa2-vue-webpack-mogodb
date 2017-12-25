// import { request } from "http";
var request = require('request')

module.exports = function(url){
    console.log('爬取：')
    console.log(url)
    return new Promise((r, j)=>{
        request(url, function(err, res){
            if(err) j(err)
            // console.log(res);
            r(res);
        })
    })
}