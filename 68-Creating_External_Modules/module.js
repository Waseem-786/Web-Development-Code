console.log("This is a module");
function sum(a,b) {
    return a+b;
}
// module.exports = sum;
// If you want to export multiple things then make module.exports object
module.exports = {
    fun : sum,
    name : 'Waseem Shahzad',
    Uni : 'NUST'
}
module.exports.edu = 'BS';