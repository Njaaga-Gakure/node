/**
 * A callback function is a function that you pass it as an argument  
 * and you call it later.
 **/

function makeUppercase(value) {

    console.log(value.toUpperCase())
}

/**
 * split - conversts a string into an array 
 * reverse - reverses elements in array
 * join - joins the array back into a string 
 */
function reverseString (value) {
    console.log(value.split('').reverse().join(''))
}
function handleName(name, cb) {
        const fullName = `${name} gakure`
        cb(fullName)
}

handleName('Brian', makeUppercase)
handleName('Kush', reverseString)

/**
 * you can also pass in the function directly
 * instead of passing the function name as a parameter  
 */

// normal function (anonymous function))
handleName('Peter', function(value) {
        console.log(value)
})

// arrow function 
handleName('Maria', (value) => console.log(value))