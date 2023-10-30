import { client } from '@/lib/pg'
import { NextResponse } from 'next/server';



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
    const body = await request.json();
    const {id_producto,nombre, precio, img } = body;

    const inserted = await client.query(
        'INSERT INTO producto(nombre, precio, img) VALUES($1 , $2, $3) RETURNING *;',
        [nombre, precio, img]
    );
    console.log(inserted)
    if (inserted.rowCount) {
        return NextResponse.json({
            nombre,
            precio,
            img,
            id_producto
        });
    } else {

        return NextResponse.json(
            { error: ' nolsa' },
            { status: 500 }
        );
    }
}