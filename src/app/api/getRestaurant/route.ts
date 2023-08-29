import {  NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export async function GET(req : NextRequest ) { 
    const name = req.url.split("name=")[1]
    
    if(!name) return null;

    const data = prisma.restaurant.findUnique({
        where : {
            Restaurantname : name
        },
        select : {
           Restaurantnamepa : true ,
           phone : true , 
           items : true

        }
    })

    const alldata = await data

    

    
    

    return NextResponse.json({ "message": "hi" , "data " : alldata })

}
