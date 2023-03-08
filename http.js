const http = require('http');

const server = http.createServer((req,res)=>
{
    if(req.url ==='/')
    {
        res.end("Welcome to Home page");   
    }
    else if(req.url ==='/about')
    {
        res.end("Welcome to about page");   
    }
    else
    {
        res.end(
            `<h1> !oops </h1>`
        )

    }

})

server.listen(5000);    

// const http = require('http');

// const server = http.createServer((req,res)=>
// {
//     console.log(req);
//     res.write("Welcome");
//     res.end();

// })

// server.listen(5000);    