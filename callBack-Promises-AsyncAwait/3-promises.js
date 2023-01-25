const value = 2

const promise = new Promise((resolve, reject) => { 
    const random = Math.floor(Math.random() * 3)
    console.log(random)
    if (random === value) {
        resolve('You are correct!!!')
    } else {
        reject('Please try again.')
    }

})

console.log(promise)
promise.then(data => console.log(data)).catch(err => console.log(err))