const prompt = require('prompt-sync')()

let summ = 0

for(let i = 0; i < 10; i++) {
    const x = +prompt('Son kiriting: ')
    summ = summ + x
}

// x != 0

console.log(summ)