const TIME = require('./my-module/dateFormat')

const dt = new Date()
console.log(dt)
const newDT = TIME.dateFormat(dt)
console.log(newDT)

