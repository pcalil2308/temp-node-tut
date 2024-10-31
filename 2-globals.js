// GLOBALS -NO WINDOW!!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname);
console.log("\n");
console.log("------------------------------------")
console.log("\n");

console.log(__filename);
console.log("\n");
console.log("------------------------------------")
console.log("\n");

console.log(require);
console.log("\n");
console.log("------------------------------------")
console.log("\n");

console.log(module);
console.log("\n");
console.log("------------------------------------")
console.log("\n");

console.log(process);
console.log("\n");
console.log("------------------------------------")
console.log("\n");


setInterval(()=>{
    console.log("Hello world!");
}, 1000)