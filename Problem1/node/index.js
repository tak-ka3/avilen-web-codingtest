const http = require('http');
const url = require('url');
const querystring = require('querystring')

const server = http.createServer((req, res)=>{
   const queryObject = url.parse(req.url, true).query;
   let postData = '';
   let ans = [];
   req.on('data', (chunk) => {
      console.log(chunk)
      postData += chunk
   }).on('end', () => {
      if (postData){
         const q = url.parse('http://localhost:8080'+req.url+'?'+postData, true)
         const objData = q.query.pattern
         const queryArray = JSON.parse(objData).obj;
         for(let i = 1; i < 31; i++){
            let result = i;
            for(let j = 0; j < queryArray.length; j++){
               if (i % queryArray[j].num === 0){
                  result = queryArray[j].text;
               }
            }
            ans.push(result);
         }
         const ansString = ans.toString()
         res.setHeader('Access-Control-Allow-Origin', '*');
         res.setHeader('Access-Control-Request-Method', '*');
         res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
         res.setHeader('Access-Control-Allow-Headers', '*');
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(ansString);
      }
      res.end();
   })
});
server.listen(8080); 
