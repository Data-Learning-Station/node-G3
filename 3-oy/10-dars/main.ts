function xonalar(n: number = 78) {

    let a: number = Math.floor(n/10)
    let b: number = n % 10

    console.log(a, b)
}


xonalar(78)

xonalar(45)

xonalar(96)



// function length2
// arr: number[] qabul qiladi
// massivning uzunligini ikkiga kopaytirsin

let s: string = 'Sanjarbek'
console.log(s.startsWith('S'))

function length2(arr: number[]) {
    console.log(arr.length * 2)
}

length2([1, 2, 3, 4, 5])
length2([1, 2, 3, 7])

// names function
// string[]
// faqat a harfdan boshlangan elementlar boyicha filter
// qilib chiqarish

// #3
// function join
// name va lastname dan tashkil topgan object qabul qiladi
// objectning name va lastname ni birlashitirib chiqarsin
type Person = { name: string, lastname: string }
function join(o: Person) {
}
join({
    name: 'Diyorbek',
    lastname: 'Ravshanbekov'
})

// #4
// function repeat
// str: string va n: number qabul qiladi
// str ni n marta chiqarsin

// #5
// longest function
// nums massiv va total number qabul qiladi
// nums ning barcha elementlari summasi totaldan katta bolsa true 
// aks holda false qaytaradi