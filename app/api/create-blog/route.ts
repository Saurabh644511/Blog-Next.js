import { NextResponse } from "next/server";

export async function POST() {
    console.log("Hello from server");

    return NextResponse.json({success: true})
}