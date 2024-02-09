const http = require('http');
const url = require('url');
require("dotenv").config()


const routes = {
    '/admin-panel':function(req,res){
        return res.end('Welcome to page home')
    }
}

const server = http.createServer((req, res) => {
    console.log('user entered')
    // req.on('data',(data)=>{
    //     console.log(JSON.parse(data).number)
    // })
    // console.log(url.parse(req.url))
    // const {pathname,query:{name,age,role}} = url.parse(req.url,true)
    // console.log(name,age,role)
    // if(pathname in routes){
    //     if(role === 'admin'){
    //         return res.end(`Welcome to admin panel M.${name}`)
    //     }
    //     return res.end('you are not allowed to access this page')
    // }
    // return res.end('404 not found')
//    if(req.url in routes) {
//     return routes[req.url](req,res)
//    }
//    return res.end('page not found')
    
})

const port = process.env.PORT || 3500

server.listen(port,()=>{
    console.log('listening on port '+port)
})

