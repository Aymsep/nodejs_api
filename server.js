const http = require('http');
const url = require('url');

require('dotenv').config()

const routes = {
    "/home":function(req, res){
        return res.end('welcom to homepage')
    },
    "/login":function(req, res){
        return res.end('user logged succeffuly')
    },
    '/about':function(req, res){
        return res.end('user data')
    }
}

const Port = process.env.PORT || 5000

const server = http.createServer((req,res)=>{

    // let {query:{name,email,role}} = url.parse(req.url,true)
    // if(role === 'admin'){
    //     res.writeHead(200)
    //     res.write(`hello ${name} with email ${email} you allowed to be here`)
    //     return res.end()
    // }
    // return res.end('u are not allowed to be here')
    // res.write({
    //     name,
    //     email,
    //     role
    // })
    // res.end()
//   if(req.url in routes){
//     return routes[req.url](req, res);
//   }
//   return res.end('route not found')

})



server.listen(process.env.PORT || 5000,()=>{
    console.log('listening on port '+Port)
})