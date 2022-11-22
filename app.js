const random = Math.random()
console.log(random)

function addNumbers (max,min) {

    return Math.random() * (max-min) + min
}

let numbers = addNumbers(5,10)
console.log(numbers)