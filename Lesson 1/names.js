const name = require('./firstModule')
const sayHi = require('./functionExport')
const data = require('./exports')
require('./sum')
console.log(name)
console.log(data)

sayHi('Lusia')
sayHi(name.kacper)