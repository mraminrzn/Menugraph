import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(
    req : Request
){
    
    

    const {name , image , restaurant_id , price , category } = await req.json()



    const createItem = prisma.item.create({
        data : {
            name : name ,
            image : image , 
            restaurant_id : restaurant_id,
            price : price,
            category : category
        }
    })
    
//    .then(e => console.log(e)
//    )
   const data = await createItem 
   
   console.log(data);
   

    return NextResponse.json({data} )

}