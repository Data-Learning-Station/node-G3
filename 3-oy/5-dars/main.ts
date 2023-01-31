let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

for(let i = 0; i < numbers.length; i++) {
    let n: number = numbers[i]
    console.log("Number:", n)
}

for(let n of numbers) {
    console.log("Number:", n)
}

numbers.forEach((n) => {
    console.log("Number:", n)
})
// Ismlardan tashkil topgan massiv berilgan
// 1. shu ismlar orasida Diyorbek nechanchi index da turibdi, 
// agar topilsa index ni topilmasa -1 chiqaring
const names: string[] = ['Aslbek', 'Aisha', 'Dilshod', 'Umidbek', 'Ilyosbek', 'Diyorbek', 'Shokirjon', 'Akmalbek', 'Diyorbek', 'Sanjarbek', 'Qudratbek']

const index: number = names.indexOf('Diyorbek')
const index2: number = names.lastIndexOf('Diyorbek')
console.log(index2);

const found: boolean = names.includes('Diyorbek')
console.log(found)

// let index = -1

// for(let i = 0; i < names.length; i++) {
//     const name: string = names[i]
//     if (name == 'Diyorbek') {
//         index = i
//         break
//     }
// }
// console.log(index)



// 2. shu ismlar orasida Aslbek bormi yuqmi aniqlang,
// agar toplsa true, topilmasa false chiqaring






















