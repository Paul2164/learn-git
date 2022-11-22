const random = Math.random()
console.log(random)

function addNumbers (max,min) {

    return Math.random() * (max-min) + min
}

let numbers = addNumbers(5,10)
console.log(numbers)


let array = [8,9,10,11,13,15,14]

let isEven = array.filter(function(item) {

    return item % 2 === 0
})

console.log(isEven)