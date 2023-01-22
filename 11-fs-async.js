const {readFile, writeFile} = require('fs')

console.log('start');
readFile('./folder/first.txt',
            'utf8',
            (err, result) => {
                if (err){
                    console.log(err);
                    return;
                } else {
                    const first = result;
                    readFile('./folder/second.txt', (err, result) => {
                        if (err) {
                            console.log(err);
                            return;
                        } else {
                            const second = result;
                            writeFile('./folder/result-async.txt', `Result: ${first}, ${second}`,
                            (err, result => {
                                if (err) {
                                    console.log(err);
                                    return;
                                } else {
                                    console.log('Done with this task');
                                }

                            }))

                        }




                    })
                }
           }
)
console.log('starting next task');