import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(
    req : Request
){
const {key} = await req.json()



console.log(cookies().delete(key));



return  NextResponse.json({"message " : key})
}