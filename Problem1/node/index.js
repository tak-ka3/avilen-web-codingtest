const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res)=>{
   const queryObject = url.parse(req.url, true).query;
   let postData = '';
   let ans = [];
   for (let i = 0; i < 30; i++){
      ans.push(i+1)
   }
   req.on('data', (chunk) => {
      postData += chunk;
   }).on('end', () => {
      if (postData){
         const q = url.parse('http://localhost:8080'+req.url+'?'+postData, true)
         const objData = q.query.pattern;
         const queryArray = JSON.parse(objData).obj;
         for (let i = 0; i < queryArray.length; i++){
            let num = queryArray[i].num;
            let text = queryArray[i].text;
            let cnt = 1;
            while (cnt*num < 31){
               ans[cnt*num-1] = text;
               cnt++;
            }
         }
         const ansString = ans.toString();
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
