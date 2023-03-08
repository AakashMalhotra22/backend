
function op(time)
{
    let p = new Promise((resolve,reject)=>
    {
        if(true)
        {
            setTimeout(()=>
            {
                resolve();
            },time);
        }
        else{
            reject("bye");
        }
    })
    return p;

}
async function operate()
{
    await op(3000);
    console.log("a");
    await op(2000);
    console.log("b");
    await op(1500);
    console.log("c");
    await op(1000);
    console.log("d");
}

operate();