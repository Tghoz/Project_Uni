// Importar la librería json2csv
import { Parser } from 'json2csv';
import fs from 'fs';
import path from 'path';


if (!process.argv[2]) {
    console.error("Usage: node Json.js <file.csv>");
    process.exit(1);
}


const file = process.argv[2];
const fileText = fs.readFileSync(file)

const data = JSON.parse(fileText);

const fields = Object.keys(data[0]);

const json2csvParser = new Parser({ fields });
const csv = json2csvParser.parse(data);



const folder = "CSV"

if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
}


const output =  file.replace(".json",".csv");
const rut = path.join(folder, output);
fs.writeFileSync(rut,csv)