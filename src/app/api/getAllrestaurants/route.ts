import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient

export async function GET(){

    const data = await prisma.restaurant.findMany(
    {
        select : {
            lastname : true , 
            Restaurantname : true ,
            email : true

        }
    }
    )

    
    return new NextResponse(
        JSON.stringify({ message: "succes" , data : data }),
        {
          headers: { "Content-Type": "application/json" },
          status: 200,
        }
      );

}