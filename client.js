const net = require('net')
const keypress = require('keypress')
keypress(process.stdin)

const opts = {
    host: '127.0.0.1',
    port: 9001
}
const client = net.createConnection(opts, () => {
    console.log('@ connected: reading keyboard @')
    process.stdin.on('keypress', function (ch, key) {
        console.log('@ keypress @', key)
        if (key) client.write(JSON.stringify(key.name))
        if (key && key.name == 'return') {
            process.stdin.pause()
            process.exit(0)
        }
    })
})    

process.stdin.setRawMode(true)
process.stdin.resume()