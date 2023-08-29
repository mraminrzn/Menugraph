import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(
    req : Request
){
const {key}:any = await req.json()



    if (key) {
        
        cookies().delete(key);
    }




return NextResponse.json({ "message ": key })
}