const fs = require('fs')

fs.readFile('/fs/text.txt','utf-8',function(err,dataStr){
    console.log(err)
    console.log(dataStr)
})

