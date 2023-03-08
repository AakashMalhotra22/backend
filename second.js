
const para = require('./first');
const obj = require('./third');

console.log(obj.obj);
console.log(obj.x);


const func = para.greet;
func(para.last);