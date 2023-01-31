type Teacher = {
    name: string
    subject: string
}

type Student = {
    name: string,
    age: number,
    address: string
}

type Group = {
    teacher: Teacher
    students: Student[]
}

let data: Group[] = [
    {
        teacher: {
            name: 'Jalol Imomaddinov',
            subject: 'Node.js'
        },
        students: [
            {
                name: 'Aslbek Qadamboev',
                age: 13,
                address: 'Xonqa'
            },
            {
                name: 'Dilshod Matyaqubov',
                age: 20,
                address: 'Shovot'
            }
        ]
    }
]

console.log(data[0].students.find(st => st.name == 'Aslbek') != undefined)