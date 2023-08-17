const fs = require('fs')

fs.writeFile('./成绩.json', '{"name":"hk","age":18,"grades":99}', function (err, dataStr) {
    if (err) {
        return console.log('写入失败：' + err.message)
    }
    console.log('写入成功！')
})