import { NextResponse } from "next/server";


//? Leer
export function GET(reques, { params }) {
    return NextResponse.json({
        ms:`tarea obtenida ... ${params.id} `,
    });
};

//? Borrar
export function DELETE(reques, { params }) {
    return NextResponse.json({
        ms: `tarea borrada ... ${params.id}`
    })
}

//?  Actualizar
export function PUT(reques, {params}) {
    return NextResponse.json({
        ms: `tarea actualizada ... ${params.id}`
    })
}