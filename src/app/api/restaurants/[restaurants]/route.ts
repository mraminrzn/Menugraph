import { NextResponse } from "next/server"

export async function GET(req : Request) {
    
    // const data = await req.json()
    const restaurants = req.url.concat("http://localhost:3000/api/restaurants/")
    

    return NextResponse.json({"message" : "hi"})

}