//导入模块
const fs = require('fs')
const path = require('path')
//写入正则
const regJs = /<script>[\s\S]*<\/script>/

//读取
fs.readFile(path.join(__dirname,'./index.html'),'utf8',function(err,dataStr){
    if(err){
        return console.log('读取错误'+err.message)
    }
    resolve(dataStr)
})

function resolve(htmlStr){
    const r1 = regJs.exec(htmlStr)
    if(r1&&r1[0]){
        const newJs = r1[0].replace('<script>','').replace('</script>','')
        fs.writeFile(path.join(__dirname,'./fs/javascript.js'),newJs,'utf8',function(err){
            if(err){
                return console.log('读取错误'+err.message)
            }
            console.log('写入成功')
        })
    }
}