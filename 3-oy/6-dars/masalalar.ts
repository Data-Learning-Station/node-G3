export {}

const names: string[] = ['Aslbek', 'Aisha', 'Dilshod', 'Umid', 'Ilyosbek', 'Diyorbak', 'Shokirjon', 'Akmalbek', 'Diyorbek', 'Sanjarbek', 'Qudratbek']

// 'a', 'k', 'c'

const index: number = names.findIndex(item => item[item.length - 2] == 'a' || item[item.length - 2] == 'c' || item[item.length - 2] == 'k')

console.log(index);