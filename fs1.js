const fs = require('fs');


let p = await fs.readFile('./content/read1.txt','utf8');
console.log(p.result);
