const express=require('express')

let Port=process.env.PORT||8080;
let expressServer=express();

expressServer.listen(Port,()=>{
    console.log('server is started',Port);
})