const http = require('http')


//创建web服务器实例
const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url
    const method = req.method
    const str = `<div style="text-align: center;margin: 0 auto;">
    <h1 style="color: red;font-size: 50px;">原神，启动！</h1><img src="https://s1.ax1x.com/2023/08/17/pPlxBQO.png" alt="" style="width:50%;height:50%;">
</div>`
    console.log('原神，启动！')
    res.setHeader('Content-Type', 'text/html; charset=UTF-8')
    res.end(str)
})

server.listen(8080, () => {
    console.log('http server is running http://127.0.0.1:8080')
})
