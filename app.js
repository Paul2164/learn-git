const random = Math.random()
console.log(random)

function addNumbers (max,min) {

    return Math.random() * (max-min) + min
}

let numbers = addNumbers(5,10)
console.log(numbers)


let array = [5,7,2,8,9,18]

let isEven = array.filter(function(item) {

    return item % 2 === 0
})

console.log(isEven)