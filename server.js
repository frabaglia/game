const net = require('net')

const server = net.createServer(socket => {
    socket
        .setEncoding('utf-8')
        .on('data', data => {
            console.log('@ data @', data)
        })
        .on('error', error => {
            console.log('@ error @', error)
        })
})

server
    .on('connection', socket => {
        console.log('@ connection @')
    })

server.listen(9001)