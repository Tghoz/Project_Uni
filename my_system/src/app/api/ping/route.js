import { client } from "@/app/lib/pg";


export async function GET() {
    const data = await client.query("SELECT * FROM producto;")
    const { rows, rowCount } = data
    if (rowCount > 0) {
        return Response.json(rows);
    }else{
        return new Response('', {status : 404})
    }
};