import mysql from 'mysql2/promise.js'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const conexao = mysql.createPool({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database 
})
export default conexao 