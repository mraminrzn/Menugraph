import { NextResponse } from "next/server"
import { Limiter } from "./app/api/RestaurantLogin/limiter"

const limiter = Limiter( )

export async function middleware() {
    
    

}

export const config = {
    matcher: '/api/:path*',
}