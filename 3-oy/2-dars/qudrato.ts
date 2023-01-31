// let n: number = 20

// let toqSonlar: Array<number> = new Array(n)

// let x = 1

// for(let i = 0; i < n; i++) {
//     toqSonlar[i] = x
//     x += 2
// }

// console.log(toqSonlar)


let n: number = 10

let a: number = 3
let d: number = 2

let progression: Array<number> = new Array(n)

// progression[0] = a
for(let i = 0; i < n; i++) {
    // progression[i] = progression[i-1] + d
    progression[i] = a
    a += d
}

console.log(progression);
