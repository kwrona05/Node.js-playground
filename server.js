const http = require('http')
const fs = require('fs')

// function rqlistener(req, res) {

// }

// http.createServer(rqlistener)



// http.createServer(function(req, res) {

// })

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
})

server.listen(3000)