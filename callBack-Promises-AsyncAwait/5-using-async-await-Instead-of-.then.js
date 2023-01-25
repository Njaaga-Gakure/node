const btn = document.querySelector('.btn')

btn.addEventListener('click', async () => { 
     await addColor(1000, '.first', 'red')
     await addColor(3000, '.second', 'blue')
     addColor(2000, '.third', 'green')
})

function addColor(time, selector, color) {
    const element = document.querySelector(selector)
    return new Promise((resolve, reject) =>  {
        if (element) {
            setTimeout(() => {
                element.style.color = color
                resolve()
            }, time)
        } else {
                reject(`No such element: ${selector}`)
        }

    })
}