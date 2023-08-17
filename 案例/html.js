const fs = require('fs')
const path = require('path')
const regHTML = /<body>[\s\S]*<\/body>/

fs.readFile(path.join(__dirname, './index.html'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取错误' + err.message)
    }
    resolve(dataStr)
})

function resolve(dataStr) {
    const r1 = regHTML.exec(dataStr)
    if (r1 && r1[0]) {
        const newHTML = r1[0].replace('<body>', '').replace('</body>', '')
        fs.writeFile(path.join(__dirname, './fs/html.html'), newHTML,'utf8', function (err) {
            if (err) {
                return console.log('写入错误' + err.message)
            }
            console.log('写入成功')
        })
    }
}
