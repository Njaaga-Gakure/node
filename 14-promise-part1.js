const {readFile} = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })

    })
} 

const start =  async () => {
    try {
            const first = await getText('./folder/first.txt')
            const second = await getText('./folder/second.txt')
            console.log(first, second)
    } catch (err) {
        console.log(err)
    }
}
start()
// getText('./folder/first.txt').then(data => console.log(data)).catch(err => console.log(err))
