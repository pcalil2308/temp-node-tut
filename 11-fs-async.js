const { readFile, writeFile } = require('fs') // async

console.log('Start');
readFile('./content/first.txt', 'utf8',  (err, result) => { // Without the utf8, we receive the buffer error
    if(err){
        console.log(err);
        return;
    }
    console.log(result);

    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    
        const second = result;
        writeFile('./content/result-async.txt',
             `Here is the result : ${first}, ${second},`,
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log('Done with this task');
            })
    })
})

console.log('Starting next task');