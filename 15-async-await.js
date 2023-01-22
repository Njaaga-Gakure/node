const {readFile, writeFile} = require('fs').promises
// const util = require('util');

//const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);



const start = async () => {
    try {
            const first = await readFile('./folder/first.txt', 'utf8')
            const second = await readFile('./folder/second.txt', 'utf8')
            await writeFile('./folder/result-mind-grenade.txt',
                        `This is awesome: ${first}, ${second}`)
            console.log(first, second)
    } catch (err) {
        console.log(err)
    }
}

start()