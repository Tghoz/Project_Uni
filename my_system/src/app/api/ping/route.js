import {client} from '@/lib/pg'


export async function GET() {
    const data = await client.query("SELECT * FROM producto;");
    const { rows, rowCount } = data;
    if (rowCount > 0) {
        return Response.json(rows);
    }else{
        return new Response('', {status : 404});
    };
};


export async function POST(request){
    const body = await request.json();
    const { producto } = body ;
    const inserted = await client.query(
        'INSERT INTO producto(nombre) VALUES($1) RETURNING *;',
        [producto]
    );
    if ( inserted.rowCount) return new Response.json(inserted.rows[0]);
    return Response.json(
        {error: ' nolsa'}, 
        {status : 500}
    );
}