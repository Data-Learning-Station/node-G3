function if24(x) {
    if (x > 0) {
        console.log(2 * Math.sin(x))
    }
    else if (x <= 0) {
        console.log(x - 6)
    }
}

if24(-24)


function if13(a, b, c) {
    
    let m = -1

    if (a < b && b < c || c < b && b < a) {
        m = b
    }
    else if (b < a && a < c || c < a && a < b) {
        m = a
    }
    else if (a < c && c < b || b < c && c < a) {
        m = c
    }
    else {
        throw Error(`Hato son: ${a} ${b} ${c}`)
    }

    console.log('Ortacha son: ', m)
}

if13(13, 11, 15)
if13(3, 7, 4)

console.log('My\nJavascript Lessions')