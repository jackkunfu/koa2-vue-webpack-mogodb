var request = require('request')
var fs = require('fs')

function getImgData(imgUrl){
    console.log('开始处理每一个')
    return new Promise((r, j)=>{
        // request(url, function(err, res, data){
        //     if(err) j(err)
        //     console.log('each img data');
        //     console.log(data);
        //     // console.log(data);
        //     if(res && res.statusCode === 200){
        //         r(data)
        //     }else{
        //         j()
        //     }
        // })
        var name = imgUrl.split('/')[imgUrl.split('/').length-1]
        console.log(name)
        request.get(imgUrl)
        .on('error', function(err) {
            console.log(err)
            j(err)
        })
        .on('response', function(response) {
            console.log(response.statusCode) // 200
            console.log(response.headers['content-type']) // 'image/png'
            r(name)
        })
        .pipe(fs.createWriteStream('paqu/'+name))
        // .pipe(request.put('http://mysite.com/img.png'))
    })
}

async function getImageListData(list){
    console.log('开始处理数组')
    var arr = [];
    // list.forEach(
    //     (v, i) => {
    //         console.log('v.middleURL')
    //         console.log(i)
    //         console.log(v.middleURL)
    //     }
    // )
    list.forEach(
        async (v) => {
            console.log('v.middleURL')
            console.log(v)
            arr.push(v.middleURL ? ( await getImgData(v.middleURL) ) : null )
        }
    )
    arr.push(await getImgData(list[0].middleURL))
    console.log(arr);
    var data = await Promise.all(arr)
    console.log('all data')
    console.log(data)
    return data
}

module.exports = function(url){
    console.log('爬取：')
    console.log(url)
    return new Promise((r, j)=>{
        request(url, async (err, res, data) => {
            if(err) j(err)
            // console.log('res');
            console.log('请求成功开始处理数据');
            if(res && res.statusCode === 200){
                console.log('11')
                var d = JSON.parse(data);
                d.success = true;
                console.log('22')

                var list = d.data;
                // console.log('list')
                // console.log(list[0])
                var imageArr = []
                try{
                    imageArr = await getImageListData(list);
                }
                catch(e){
                    console.log(e)
                }
                d.imageArr = imageArr
                r(d);
            }else{
                r({success: false})
            }
        })
    })
}