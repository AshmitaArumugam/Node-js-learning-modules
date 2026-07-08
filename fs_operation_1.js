const fs= require('fs');


if(!fs.existsSync('./practice_node/docs'))
{
fs.mkdir('./docs',(err)=>
{
    if(err)
    {
        console.log(err.message);
    }
    else{
        console.log('folder created successfully');
    }
})
}
// fs.writeFile('./docs/file1.txt','vanakakam nanaba try your best everything goes in a good way',(err)=>
// {
//     if(err)
//     {
//         console.log(err.message);
//     }
//     else{
//         console.log('content written successfully');
//     }
// })

// if(!fs.existsSync('./docs/file.txt'))
// {
//     fs.readFile('./docs/file1.txt',(err,data)=>{
//     if(err)
//     {
//         console.log(err.message);
//     }
//     else{
//         console.log('content read successfully');
//         console.log(data.toString());
//     }
//     })
// }

if(fs.existsSync('./docs/file1.txt'))
{
    fs.unlink('./docs/file1.txt',(err)=>
    {
        if(err)
        {
            console.log(err.message);
        }
        else
        {
            console.log('file deleted successfully');
        }
    })
}

fs.rmdir('./docs',(err)=>
{
    if(err)
    {
        console.log(err.message);
    }
    else
    {
        console.log('folder deleted successfully');
    }
})