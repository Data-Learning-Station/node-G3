// Array<number> | array declaration operator
let numbers: Array<number> = [12, 54, 76, 14]
let numbers1: number[] = [12, 54, 76, 14]
//                             0   1   2   3
// array assignment 
numbers[2] = 56
// array access operator []
console.log(numbers[2] + numbers[3])

console.log(numbers[numbers.length - 1])
console.log(numbers)

console.log(numbers.at(-4))


let empty: Array<string> = []
let empty2: string[] = []

empty[0] = 'Apple'
empty[1] = 'Orange'
empty[3] = 'Cherry'

console.log(empty[2])

let array: Array<boolean> = new Array(10)

array[0] = false

console.log(array[0])