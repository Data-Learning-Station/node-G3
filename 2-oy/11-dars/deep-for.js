let n = 4
let k = 3

let i = 1

// 1 ---
let s = 1

let j = 1
s *= i
j++

s *= i
j++

s *= i
j++

console.log(s);

i++

// 2 ---
s = 1

j = 1
s *= i
j++

s *= i
j++

s *= i
j++

console.log(s);

i++

// 3 ---
s = 1

j = 1
s *= i
j++

s *= i
j++

s *= i
j++
console.log(s)
i++

for (let i = 1; i <= n; i++) {
    s = 1
    
    for(let j = 1; j <= k; j++) {
        s *= i
    }
    console.log(s)
}