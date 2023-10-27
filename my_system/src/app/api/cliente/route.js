import { client } from '@/lib/pg'


export async function GET( ) {
    const data = await client.query("SELECT * FROM cliente;");
    const { rows, rowCount } = data;
    if (rowCount > 0) {
        return Response.json(rows);
    } else {
        return new Response('', { status: 404 });
    };
};



export async function POST(request) {
    const body = await request.json();
    const { id_cedula, nombre, email, telefono} = body;

    const inserted = await client.query(
        'INSERT INTO cliente(id_cedula, nombre, email, telefono) VALUES($1, $2, $3, $4 ) RETURNING *;',
        [id_cedula, nombre, email, telefono]
    );
    console.log(inserted)
    if (inserted.rowCount) return Response.json(inserted.rows[0]);
    return Response.json(
        { error: ' nolsa' },
        { status: 500 }
    );
}
