const fs = require('fs')

fs.readFile('./test1.txt', function (err, dateStr) {
    if (err) {
        return console.log('错误信息：' + err.message)
    }
    console.log('成功读取:' + dateStr)
})