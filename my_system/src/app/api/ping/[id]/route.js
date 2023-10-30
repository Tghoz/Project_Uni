import { NextResponse } from "next/server";
import { client } from "@/lib/pg";

export async function GET(request, { params }) {

    const result = await client.query(
        "SELECT * FROM producto WHERE id_producto = $1",
        [params.id]
    );
    console.log(result)
    if (result.rows.length === 0) {
        return NextResponse.json(
            {
                ms: " Producto no encontrado "
            },
            {
                status: 404,
            }
        )
    }
    return NextResponse.json(
        result.rows
    )
}

export async function DELETE(request, { params }) {
    const result = await client.query(
        "DELETE FROM producto WHERE id_producto = $1",
        [params.id]
    );    

    if (result.rowCount === 0){
        return NextResponse.json(
            {
                ms: " Producto no encontrado "
            },
            {
                status: 404,
            }
        )
    }
    return new Response(null , {
        status:204
    });
}

export async function PUT(request, { params }) {

     
    const data = await request.json()
    const { nombre , precio } = data
    const result = await client.query('UPDATE producto SET nombre = $1, precio= $2  WHERE id_producto = $3',
    [
        nombre,
        precio,
        params.id
    ]);
    if (result.rowCount === 0){
        return NextResponse.json(
            {
                ms: " Producto no encontrado "
            },
            {
                status: 404,
            }
        )
    }
    const update = await client.query("SELECT * FROM producto WHERE id_producto = $1",
        [params.id]
    )

    return NextResponse.json(
        update.rows,
    )

}
