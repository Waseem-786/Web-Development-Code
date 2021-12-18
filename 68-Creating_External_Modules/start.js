console.log("This is start");
// const name(which is used in exporting)

// const sum = require('./module');
// console.log(sum(2,3));

// For multiple exports
const mod = require('./module');
console.log(mod);
console.log(mod.fun(2,4));
console.log(mod.name);
console.log(mod.Uni);


console.log(mod.edu);
