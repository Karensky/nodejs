//利用moment包来格式化时间
const moment = require('moment')

setInterval(function () {
    const dt = moment().format('YYYY-MM-DD HH:mm:ss')
    console.log(dt)
},1000)