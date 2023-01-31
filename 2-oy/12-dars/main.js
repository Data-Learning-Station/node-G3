// 8

let d = 14
let m = 3

d = d - 1

console.log(d);

if (d == 0) {
    m = m - 1
    
    console.log(m);

    switch(m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            d = 31;
            break;
        case 4:
        case 6:
        case 9: 
        case 11:
            d = 30;
            break
        case 2:
            d = 28;
    }
}

console.log(m, d)