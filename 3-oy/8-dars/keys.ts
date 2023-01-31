export {}

type Student = { 
    name?:   string
    sclass?: string
    rollno?: number
}

const student: Student = {
    name :   "David Rayy",
    sclass : "VI",
    rollno: 12
}

console.log(student.name?.length)

// if (student.rollno == undefined) {
//     console.log('Student has no rollno')
// }
// else {
//     console.log(student.rollno)
// }

delete student.rollno

// let keys: (keyof Student)[] = Object.keys(student) as (keyof Student)[]

// keys[1] = 'name'
// console.log(keys[1]);

// console.log(student[keys[1]])

type Book = {
    author: string,
    title: string,
    readingStatus: boolean
}

let library: Book[] = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: false
    },
    {
        author: 'Bill Gates',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
]

// for(let book of library) {
//     console.log(`${book.title} by ${book.author} ${book.readingStatus == true ? 'is read' : ' is not read'}`)
// }

let log = console.log

library.forEach(book => log(`${book.title} by ${book.author} ${book.readingStatus == true ? 'is read' : ' is not read'}`))

// "<title>" by <author> (true) "is read" (false) "is not read"
// "The Road Ahead" by Bill Gates is read

type Cylinder = {
    name: string
    radius: number
    height: number
}

let cylinders: Cylinder[] = [
    {
        name: "Diyorbek",
        radius: 3,
        height: 15
    },
    {
        name: "Shokirjon",
        radius: 31,
        height: 15
    },
    {
        name: "Aslbek",
        radius: 7,
        height: 20
    }
]

cylinders.forEach(cylinder => {
    let v: number = Math.PI * (cylinder.radius**2) * cylinder.height
    console.log(cylinder.name, v.toFixed(4));
})  