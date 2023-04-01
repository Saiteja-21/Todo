// const cors = require('cors');
// app.use(cors());
// const fs = require('fs');

// const todos = JSON.parse(fs.readFileSync('./todos.json'));
// const http=require('http');
// const fs=require('fs');
 
// fs.readFile('todos.json','utf8',(err,data)=>{
//     if(err){
//         return
//     }
//     const jsondata=JSON.parse(data);
//     const server=http.createServer((req,res)=>{
//         if(req.method=='GET'){
//             res.statusCode=200;
//             res.end(JSON.stringify(jsondata));

//         }
       

//     })
//     server.listen(5000)
// });
const http=require('http');
const fs=require('fs');

const host='127.0.0.1'
const server=http.createServer((req,res)=>{
    if(req.method=='GET' && req.url==='/todos'){
        fs.readFile('todos.json',(err,data)=>{
            if(err){
                res.statusCode=200;
                res.end('failed')
            }
            else{
                res.statusCode=200;
                res.end(data);
            }
        })
    }
    // if(req.method=='POST'){
    //     const clientdata='';
    //     req.on('data',chunk=>{
    //         clientdata+=chunk.toString();
    //     });
    //     req.on('end',()=>{
    //         let userdata=JSON.parse(clientdata);
    //         let jsondata=[];
    //         jsondata=JSON.parse(fs.readFile('todos.json'));
    //         const totaldata=[...jsondata,userdata]
    //     })
    //     fs.writeFile('todos.jason',JSON.stringify(totaldata),(err)=>{
    //         if(err){
    //             return
    //         }
    //         else{
    //             res.statusCode=200;
    //             res.end('data added');
    //         }
    //     })

    // }
})
server.listen(5000,host,()=>{
    console.log('server starting');
});
    
   

/*
the schema for a todo should be as follows:
{
    id: number (unique identifier for the todo item - should be auto generated),
    text: string,
    complete: boolean
}
*/
