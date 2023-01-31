const names: string[] = ['Aslbek', 'Aisha', 'Dilshod', 'Umid', 'Ilyosbek', 'Diyorbek', 'Shokirjon', 'Akmalbek', 'Diyorbek', 'Sanjarbek', 'Qudratbek']

for(let i = 0; i < names.length; i++) {
    let item: string = names[i]

    if (item.endsWith('bek')) {
        console.log(item)
        
    }
}
// indexOf
// lastIndexOf
const item = names.find(item => item.length > 7 && item.length < 10)
const index1 = names.indexOf('Aisha')
const index2 = names.findIndex(item => item.length > 7 && item.length < 10)

console.log(item);
console.log(index1);
console.log(index2);     
// string[] => find => string
// string[] => ? => number
let newNames: string[] = []

for(let i = 0; i < names.length; i++) {
    let item: string = names[i]
    if (item.length > 7 && item.length < 9) {
        newNames.push(item)
    }
}
// bit.ly/node-g3
console.log(newNames)

let newNames2: string[] = names.filter(item => item.length > 7 && item.length < 9)
console.log(newNames2)