const utils = require("./utils");
const express = require("express");
const server = express();

//RUTAS
server.get("/",(req,res)=>{
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Index</title>
    </head>
    <body>
        
        <h1> 
            ${utils.filter2(["eoroweitfoi", "sa", "mmbmvmxcbm", "eqwe"], utils.strFive)}
        </h1>


    </body>
    </html>`
    res.send(html);
})



server.listen(2500, "localhost", function(){
    console.log("estoy escuchando ok");
})
