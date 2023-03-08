const fs = require('fs');

const first = fs.readFileSync('./content/read1.txt','utf8');
const second = fs.readFileSync('./content/read2.txt','utf8');

console.log(first,second);

fs.writeFileSync('./content/write1.txt',
`This is the content of read1 and read2: ${first} &&& ${second}`);