import { NextResponse } from "next/server";

import { client } from "@/app/lib/pg";

/**
 * 
 * @param {NextResponse} request 
 */


export async function GET() {

    const data = await client.query("SELECT * FROM usuario;")
    const { rows, rowCount } = data
    if (rowCount > 0) {
        return Response.json({
            ms: rows,
        });
    };
};