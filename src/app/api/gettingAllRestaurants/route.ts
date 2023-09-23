import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET() {
    
    const data = await prisma.restaurant.findMany({
        select : {
            Restaurantname : true ,
            Restaurantnamepa : true ,
            logo : true ,
            name : true ,
            lastname : true ,
            email : true ,
        }
    })
    const realData = await data

    return NextResponse.json({"status" : "succes" , "data" : realData})

}