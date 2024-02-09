const http = require('http');

const server = http.createServer((req, res) => {
console.log('entred userdd')
}).listen(3500,()=>{
    console.log('listening on port 3500')
})


