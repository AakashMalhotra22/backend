const fs = require('fs');


fs.readFile('./content/read1.txt','utf8',(err,result)=>
{
    if(err)
    {
        console.log('err');
        return;
    }
    var first = result;
    console.log(first);
    fs.readFile('./content/read2.txt','utf8',(err,result)=>
    {
        if(err)
        {
            console.log('err');
            return;
        }
        var second = result;
        console.log(second);
        fs.writeFile('./content/write1.txt',
        `This is the content of read1 and read2: ${first} &&& ${second}`,{flag:'a'},
        (err,result)=>{
            if(err)
            {
                return;
            }
            console.log("done");
        });
    });
});



