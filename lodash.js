const ob = require('lodash');

var arr = [1,[2,[3,4,5]]];
console.log(ob.flattenDeep(arr));