const random = Math.random()
console.log(random)

function addNumbers (max,min) {

    return Math.random() * (max-min) + min
}

let numbers = addNumbers(5,10)
console.log(numbers)


let array = [1,2,3,4,5,6,7]

let isEven = array.filter(function(item) {

    return item % 2
})

console.log(isEven)