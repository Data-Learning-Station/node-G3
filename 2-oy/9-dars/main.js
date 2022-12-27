// + - * / %
// string + number = string // concat
// number + number = number // arithmetic

// Booleans
// compare
// < > <= >= == != === !==
// number > number = boolean

// conditionals
// && ||

// boolean && boolean = boolean

// boolean
let wakeUpClock = 9
let importantTopic = false
let haveJokes = true

console.log('Dars boshlandi');

if (wakeUpClock < 10) {
    console.log('Diyorbek keldi')
}
else if (importantTopic) {
    console.log('Call to Diyorbek');
}
else if (haveJokes) {
    console.log('Send via telegram');
}
else {
    console.log('No jokes');
}

console.log('Dars tugadi');


// 3
let a = 9

if (a > 0) {
    a = a + 1
}
else if (a < 0) {
    a = a - 2
}
else {
    a = 10
}

console.log(a)  // 10