let y = 's'
let k = 1

switch(y) {
    case 's': {
        switch(k) {
            case 0: 
                y = 's';
                break;
            case 1: 
                y = 'g';
                break;
            case 2:
                y = 'q';
                break;
        }
        break
    }
    case 'j': {
        switch(k) {
            case 0: 
                y = 'j';
                break;
            case 1: 
                y = 'q';
                break;
            case 2:
                y = 'g';
                break;
        }
        break
    }
    case 'j': {
        switch(k) {
            case 0: 
                y = 'j';
                break;
            case 1: 
                y = 'q';
                break;
            case 2:
                y = 'g';
                break;
        }
        break
    }
    case 'q': {
        switch(k) {
            case 0: 
                y = 'q';
                break;
            case 1: 
                y = 's';
                break;
            case 2:
                y = 'j';
                break;
        }
        break
    }
    case 'g': {
        switch(k) {
            case 0: 
                y = 'g';
                break;
            case 1: 
                y = 'j';
                break;
            case 2:
                y = 's';
                break;
        }
    }
}

console.log(y)