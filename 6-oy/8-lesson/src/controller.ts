import { Request, Response } from 'express'
import { findUserByEmail, createUser, UserDto } from './service'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export function getIndex(req: Request, res: Response) {
    res.redirect('/login')
}

export function getRegisterView(req: Request, res: Response) {
    res.render('register')
}

export function getLoginView(req: Request, res: Response) {
    res.render('login')
}

export async function getProfileView(req: Request, res: Response) {
    const token = req.cookies.token 

    if (token == null || token == undefined) {
        return res.redirect('/login')
    }

    try {
        const payload: any = jwt.verify(token, 'habib')

        const email = payload.email

        const user = await findUserByEmail(email)

        res.render('profile', {
            name: user?.name,
            surname: user?.surname,
            age: user?.age,
            email: user?.email
        })
    }
    catch(err: any) {
        res.send('Invalid token')
    }
}

export async function postRegister(req: Request, res: Response) {
    const email: string = req.body.email

    const existsUser = await findUserByEmail(email)

    if (existsUser != null) {
        return res.send('User email already taken: ' + email)
    }

    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)

    const user: UserDto = {
        username: req.body.name,
        surname: req.body.surname,
        age: +req.body.age,
        email: req.body.email,
        password: hashedPassword
    }

    await createUser(user)

    const payload = {
        email: user.email,
        name: user.username,
        surname: user.surname
    }

    const token = jwt.sign(payload, 'habib')

    res.cookie('token', token).redirect('/profile')
}

export async function postLogin(req: Request, res: Response) {
    const { email, password } = req.body

    const user = await findUserByEmail(email)

    if (user == null) {
        return res.send('User not found: ' + email)
    }

    const isMatch = bcrypt.compareSync(password, user.password)

    if (isMatch) {
        const payload = {
            email: user.email,
            name: user.name,
            surname: user.surname
        }
    
        const token = jwt.sign(payload, 'habib')
        res.cookie('token', token).redirect('/profile')
    }
    else {
        res.send('Password or email is wrong')
    }
}