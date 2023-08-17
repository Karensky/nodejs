const path = require('path')

//path.join()

const pathStr1 = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr1)

const pathStr2 = path.join(__dirname, './', 'test1.txt')
console.log(pathStr2)

const fs = require('fs')

//读取文件
fs.readFile(pathStr2, 'utf8', function (err, dataStr) {
    if (err) {
        return console.log(err.message)
    }
    console.log(dataStr)
})

//path.basename()

const baseStr1 = path.basename(pathStr2)
console.log(baseStr1)

const baseStr2 = path.basename(pathStr2, '.txt')
console.log(baseStr2)


//path.extname()

const extStr = path.extname(pathStr2)
console.log(extStr)
