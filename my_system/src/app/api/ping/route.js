import { NextResponse } from "next/server";

export function GET() {

    return NextResponse.json({
        ms: "hola mundo api en next",
    });
}