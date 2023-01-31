export {}

type Student = {
    name: string
    surname: string
    score: number
    address: {
        street: string
        number: string
    }
}

type Participant = {
    name: string
    score: number
    address: string
}

const diyorbek: Student = {
    name: 'Diyorbek',
    surname: 'Ravshanbekov',
    score: 2,
    address: {
        street: 'Ibrat',
        number: '6a'
    }
}

const participant: Participant = {
    name: `${diyorbek.name} ${diyorbek.surname}`,
    score: diyorbek.score,
    address: `${diyorbek.address.street} ${diyorbek.address.number}`
}

type Game = {
    name: string
    price: number
}

const games: Game[] = [
    {
        name: 'Call Of Duty MW2',
        price: 10
    },
    {
        name: 'GTA V',
        price: 12
    },
    {
        name: 'CS GO',
        price: 2
    },
    {
        name: 'Doka 2',
        price: 12
    },
    {
        name: 'PUBG',
        price: 0
    }
]
const names = games
    .filter(game => game.price > 10)
    .map(game => `${game.name} $${game.price}`)

console.log(names)