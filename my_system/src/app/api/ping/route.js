import { client } from '@/lib/pg';
import { NextResponse } from 'next/server';
import{ writeFile} from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import {v2 as cloudinary} from 'cloudinary';


cloudinary.config({ 
  cloud_name: 'dpws7owzf', 
  api_key: '416836571638832', 
  api_secret: '7_u9OHgqVyLiHI1mpsLOs5y6KwI' 
});


export async function GET() {
    const data = await client.query("SELECT * FROM producto;");
    const { rows, rowCount } = data;
    if (rowCount > 0) {
        return NextResponse.json(rows);
    } else {
        return new NextResponse('', { status: 404 });
    };
};



export async function POST(request) {
    const data = await request.formData();
    const img = data.get('img')

    const by = await img.arrayBuffer();
    const buffer =  Buffer.from(by);
    const imgID = uuidv4();
    const filePath =  path.join(process.cwd(),'public', imgID+'.jpg')
    await writeFile(filePath,buffer);
    
    const res = await cloudinary.uploader.upload(filePath)
    console.log(res)

    const inserted = await client.query(
         'INSERT INTO producto(nombre, precio, img) VALUES($1 , $2, $3) RETURNING *;',
        [
            (data.get('nombre')),
            (data.get('precio')),
            res.secure_url
        ]
     );

if (inserted.rowCount) {
        return NextResponse.json({
            nombre : (data.get('nombre')),
            precio : (data.get('precio'))
        });
    } else {

        return NextResponse.json(
            { error: ' nolsa' },
            { status: 500 }
        );
    }
}