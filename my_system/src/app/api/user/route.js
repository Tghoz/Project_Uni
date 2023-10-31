

import { client } from '@/lib/pg';
import { NextResponse } from 'next/server';



export async function GET() {
    const data = await client.query("SELECT * FROM usuario;");
    const { rows, rowCount } = data;
    if (rowCount > 0) {
        return NextResponse.json(rows);
    } else {
        return new NextResponse('', { status: 404 });
    };
};

