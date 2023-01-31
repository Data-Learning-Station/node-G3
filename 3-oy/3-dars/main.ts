// Array constructor

// const pupils: Array<string> = [ "hello", 'Diyorbek', 'Aslbek' ]
const pupils: string[] = new Array("hello", 'Diyorbek', 'Aslbek')

pupils[0] = 'Hello,'

console.log(pupils)
console.log(pupils[0], pupils[1])

//

let nums: number[] = [0, 0, 5]

nums[0] = nums[0] + 3

console.log(nums)


// n = 10

// [1, 1, 2, 3, 5, 8, 13, 21, 34]

// let n: number = 10

// let fibbonaci: Array<number> = new Array(n)

// fibbonaci[0] = 1
// fibbonaci[1] = 1

// for(let i = 2; i < n; i++) {

//     fibbonaci[i] = fibbonaci[i - 1] + fibbonaci[i - 2]
// }

// console.log(fibbonaci);


// let n: number = 15
// let A: number = 1
// let B: number = 1

// let a: Array<number> = new Array(n)

// a[0] = A
// a[1] = B
// a[2] = a[0] + a[1]

// for(let i = 3; i < n; i++) {
//     a[i] = a[i - 1] * 2
// }

// console.log(a);


// + unshift                                        // + push
// - shift                                          // - pop

let numbers: number[] = []

numbers.push(1, 2, 3, 4)

console.log(numbers)

let x: number | undefined = numbers.pop()

x

let y: number = numbers.push(15)

console.log(y);

console.log(numbers)


let n: number = 10
let A: number = 3
let B: number = 2

let maxFibbonaci: Array<number> = new Array()

maxFibbonaci.push(A)
maxFibbonaci.push(B)
maxFibbonaci.push(A + B)

for(let i = 3; i < n; i++) {
    maxFibbonaci.push(maxFibbonaci[i - 1] * 2)
}

maxFibbonaci


let randomNumber: number[] = [12, 23, 54, 123, 65, 76, 19, 72]

for(let i = 0; i < randomNumber.length; i++) {
    
    if (randomNumber[i] % 2 == 0) {
        console.log(i)
    }
}

for(let i = randomNumber.length - 1; i >= 0; i--) {

    if (randomNumber[i] % 2 == 1) {
        console.log(randomNumber[i])
    }
}

let randomNumber2: number[] = [72, 23, 54, 123, 65, 76, 19, 62]
let len: number = randomNumber.length

for(let i = 0; i < randomNumber2.length; i++) {
    if (randomNumber2[i] < randomNumber2[len - 1]) {
        console.log(randomNumber2[i])
        break
    }
}