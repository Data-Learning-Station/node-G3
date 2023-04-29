import express from 'express'
import cors from 'cors'
import { engine } from 'express-handlebars'
import routes from './routes'
import cookieParser from 'cookie-parser'

const server = express()

server.use(cookieParser())

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/', express.static('./public'))

server.engine('.hbs', engine({ extname: ".hbs" }))
server.set('view engine', '.hbs')
server.set('views', './pages')

server.use(routes)

server.listen(8080, () => console.log("Server is running on port 8080"))