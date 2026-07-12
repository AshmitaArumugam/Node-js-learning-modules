const http=require('http');
const fs=require('fs');


const servers=http.createServer((req,res)=>{
    let filepath='./docs';
    if(req.url=='/' || req.url=='/home')
    {
        filepath+='/about.html';
    }
    else if(req.url=='/list')
    {
        filepath+='/list.html';
    }
    else{
        res.writeHead(404,{'Content-Type' :'text/html'});
        res.end('<h1>Page Not Found </h1>');
        return;
    }
    fs.readFile(filepath,(err,data)=>{
    if(err)
    {
        res.writeHead(500);
        res.end('Server Error !!!');
    }
    else
    {
        res.writeHead(200,{'Content-Type' :'text/html'});
        res.end(data);
    }
});
}) 


servers.listen(4000,()=>
{
    console.log('Server is listening at port 4000');
});