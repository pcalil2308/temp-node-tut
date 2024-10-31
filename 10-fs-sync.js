// const fs = require('fs') -> Mesma coisa!!!
const { readFileSync, writeFileSync } = require('fs') // File Sistem (sync)
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

writeFileSync('./content/result-sync.txt', 
    `Here is the result : ${first}, ${second},`, { flag: 'a'} // This flag duplicates the value already expressed
)
console.log('Done with this task');
console.log('Starting the next one');

