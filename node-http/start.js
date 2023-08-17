//导入模块
const fs = require('fs')
const path = require('path')
const http = require('http')

//创建服务器实例
const server = http.createServer()
server.on('request', (req, res) => {
    let fpath = ''
    if (req.url === '/') {
        fpath = path.join(__dirname,'./clock/index.html')
    }else{
        fpath = path.join(__dirname,'./clock',req.url)
    }

    //读取文件
    fs.readFile(fpath, 'utf-8', function (err, dataStr) {
        if (err) {
            return res.end(`<h1>404 Not Found</h1>`)
        }
        res.end(dataStr)
    })
})

server.listen(8080, () => {
    console.log('Web Server is running in http://127.0.0.1:8080')
})