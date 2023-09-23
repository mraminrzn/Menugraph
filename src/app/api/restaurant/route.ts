import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req : NextRequest) {

    const { searchParams } = new URL(req.url)
    const restaurantname = searchParams.get("restaurantnamepa")
    
    

     const data = await prisma.restaurant.findMany({
        where : {
            Restaurantnamepa : String(restaurantname)
        },
        select : {
            items : true ,
            name : true , 
            Restaurantname : true ,
            lastname : true ,
            email : true ,
            phone : true,
            
            
        }
     })


   

    return NextResponse.json({ data : data})
    
}