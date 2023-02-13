const fs = require('fs');
const http = require('http');
const url = require('url');


const productTemplate = fs.readFileSync('./1-node-farm/starter/templates/product.html', 'utf-8');
// console.log(data);
const data = JSON.parse(fs.readFileSync('./1-node-farm/starter/dev-data/data.json', 'utf-8'));
// console.log(data);

const server = http.createServer((req, res)=>{
    const pathName= req.url;
    if(pathName==='/' || pathName==='/overview'){

    }
})

    server.listen(3000,'127.0.0.1',()=>{
    console.log('Listening to requests on port 3000');
})