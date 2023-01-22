const {readFileSync, writeFileSync} = require('fs')
console.log('start')
// the first parameter is the path and the second is the encoder
const first = readFileSync('./folder/first.txt', 'utf8') 
const second = readFileSync('./folder/second.txt', 'utf8')

/** 
 * first param: path,
 * second: content,
 * third: flag - in this example (a) flag appends new content to the existing content
 **/
writeFileSync('./folder/result-sync.txt',
`Here is the result: ${first}, ${second}`,
{flag: 'a'})

console.log('Done with tast');
console.log('Starting next task');