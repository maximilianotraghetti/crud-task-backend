import 'dotenv/config'
import mysql from 'mysql2/promise'


export async function ConnectDB() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    })

    console.log("DB conectada")
    return connection
}