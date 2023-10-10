import { Client } from "pg";


const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD, DB_PORT } = process.env


const client = new Client({
    database: DB_NAME,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
});

client.connect()
export { client }