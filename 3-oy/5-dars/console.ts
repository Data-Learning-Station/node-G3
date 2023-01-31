// npm install prompt-sync
// npm install @types/prompt-sync

import PromptSync from "prompt-sync"

const prompt = PromptSync()

let names: string[] = []
let count: number = 5

for(let i = 1; i <= count; i++) {
    let name: string = prompt(`${i}-ismni kiriting: `)
    names.push(name)
}

console.log(names)

while(true) {

    console.log('Amallar:')
    console.log('1. Ism topish')
    console.log('2. Ism qo`shish')
    console.log('3. Ism o`chirish')
    
    const op: string = prompt('Qaysi amal? ')
    
    if (op == '1') {
        let name: string = prompt('Qaysi ism? ')
        let index: number = names.indexOf(name)
        console.log(index)
    }
    else if (op == '2') {
        let name: string = prompt('Ism kiriting: ')
        names.push(name)
        console.log(names)
    }
    else if (op == '3') {
       let index: number = Number(prompt('Nechanchi ism? '))
       names.splice(index, 1)
       console.log(names)
    }
    else if (op == 'exit') {
        break
    }
    else {
        throw Error('Amal ' + op + ' topilmadi')
    }
}