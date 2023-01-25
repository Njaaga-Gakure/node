// after 1s first red
// after 3s second blue - 4s (3s after the first one)
// after 2s third green - 6s (2s after the second one)
// IN SEQUENCE!!!

/**
 *
 * first method (using callback functions)
 *   
   const first = document.querySelector('.first')
   const second = document.querySelector('.second')
   const third = document.querySelector('.third')
   const btn = document.querySelector('.btn')

   btn.addEventListener('click', () => {
	   setTimeout(() => {
		   first.style.color = 'red'
		   setTimeout(() => {
			   second.style.color = 'blue'
			   setTimeout(() => {
				   third.style.color = 'green'
			   }, 2000)
		   }, 3000)
	   }, 1000)
   }) 
**/
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => { 
    addColor(1000, '.first', 'red')
    .then(() => addColor(3000, '.second', 'blue'))
    .then(() => addColor(2000, '.third', 'green'))
    .catch(err => console.log(err))
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