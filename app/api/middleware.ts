import { NextRequest, NextResponse } from "next/server";

export async function middleware(
    req : NextRequest,
    res : NextResponse
){
    console.log("I AM MIDDLE WARE");
    
}