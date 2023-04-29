import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export type UserDto = {
    username: string
    surname: string
    age: number
    email:string
    password: string
}

export function findUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: {
            email: email
        }
    })
}

export function createUser(user: UserDto) {
    return prisma.user.create({
        data: {
            name: user.username,
            surname: user.surname,
            age: user.age,
            email: user.email,
            password: user.password,
        }
    })
}