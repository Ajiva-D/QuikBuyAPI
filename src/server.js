// import express from 'express'
var express = require('express')
var { json, urlencoded } = require('body-parser')
var morgan = require('morgan')
// import config from './config'
var cors =  require('cors')
var chalk = require('chalk')

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res)=>{
	res.send('Hello World!');
})
// const port = 1300;
// app.listen(port, function () {
// 	console.log(chalk.blue(`REST API on http://localhost:${port}/`))
// });
// const port = 1300;
export const start = async () => {
  try {
		const port = 1300;
    await app.listen(port, function () {
			console.log(chalk.blue(`REST API on http://localhost:${port}/`))
		});
  } catch (e) {
    console.error(e)
  }
}
	
// app.listen(port, () => console.log(`Server running on port ${chalk.green(port)}`));