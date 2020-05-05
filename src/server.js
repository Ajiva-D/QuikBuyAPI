import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
// import config from './config'
import cors from 'cors'
import chalk from 'chalk'

export const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const port = 1300;
app.listen(port, () => console.log(`Server running on port ${chalk.green(port)}`));