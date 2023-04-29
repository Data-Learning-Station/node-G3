import { Router } from "express";
import { 
    getIndex, 
    getLoginView, 
    getProfileView, 
    getRegisterView, 
    postRegister,
    postLogin
} from './controller'

const routes = Router()

routes.get('/', getIndex) // ?
routes.get('/register', getRegisterView) // getRegisterView
routes.get('/login', getLoginView) // getLoginView
routes.get('/profile', getProfileView) // getProfileView : protected

routes.post('/register', postRegister) // postRegister
routes.post('/login', postLogin) // postLogin

export default routes