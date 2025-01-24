const http = require('http')

// function rqlistener(req, res) {

// }

// http.createServer(rqlistener)



// http.createServer(function(req, res) {

// })

const server = http.createServer((req, res) => {
    console.log(req)
})

server.listen(3000)