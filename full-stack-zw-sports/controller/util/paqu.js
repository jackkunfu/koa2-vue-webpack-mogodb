var request = require('request')

function getImgData(url){
    console.log('开始处理每一个')
    return new Promise((r, j)=>{
        request(url, function(err, res, data){
            if(err) j(err)
            console.log('each img data');
            console.log(data);
            // console.log(data);
            if(res && res.statusCode === 200){
                r(data)
            }else{
                j()
            }
        })
    })
}

async function getImageListData(list){
    console.log('开始处理数组')
    var arr = [];
    list.forEach(
        async (v) => {
            console.log('v.middleURL')
            console.log(v)
            arr.push(v.middleURL ? ( await getImgData(v.middleURL) ) : null )
        }
    )
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
                console.log('list')
                console.log(list[0])
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