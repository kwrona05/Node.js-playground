const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Welcome</title></head>')
        res.write('<body><h1>Welcome on my exercise</h1></body>')
        res.write('</html>')
    }
    if(url === '/users') {
        res.write('<html>')
        res.write('<head><title>Users</title></head>')
        res.write('<body><ul><li>User1</li><li>User2</li></ul></body>')
        res.write('</html>')
    }
})

server.listen(3000)