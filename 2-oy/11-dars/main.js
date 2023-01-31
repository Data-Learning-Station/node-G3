// 13, 17, 20

// let i = 1

// while(true) {
//     console.log(i)
//     i++
//     console.log(i)
//     if (i < 10) {
//         continue
//     }
//     else {
//         break
//     }
// }

// console.log(i)

let a = 1

for(let i = 1; i < 10; i++) {
    console.log(i)
    console.log(a *= i)
}

let x = 10

console.log(x < 10)

while(x < 10) {
    console.log(x);
    x++
}

do {
    console.log(x)
} while(x < 10)

// let n = 3
// let s = 0
// let b = 1

// for(let i = 1; i <= n; i += 1) {
//     let res = (1 + 0.1 * i) * b
//     s = s + res
//     b *= -1
// }

// console.log(s);

let n = 5

console.log(1) // 1!
console.log(1 * 2) // 2!
console.log(1 * 2 * 3) // 3!
console.log(1 * 2 * 3 * 4) // 4!
console.log(1 * 2 * 3 * 4 * 5) // 5!

let factorial = 1
let s = 0

for(let i = 1; i <= 5; i++) {
    console.log(i)
    console.log(factorial)
    factorial *= i;
    console.log(factorial)
    s += factorial 
    console.log(s)
}

console.log(s);