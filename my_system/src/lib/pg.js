import { Client } from 'pg';

const { DB_NAME , DB_HOST, DB_USER, DB_PASSWORD, DB_PART} = process.env 


const client = new Client({
    database : DB_NAME ,
    host : DB_HOST,
    part : DB_PART,
    user : DB_USER,
    password : DB_PASSWORD, 
});

client.connect();

export { client }

