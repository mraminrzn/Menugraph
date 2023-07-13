import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function POST(req : Request) {
    
    const {id} = await req.json()

    const deleted = await prisma.item.delete({
        where : {
            id : id
        }
    })

    return NextResponse.json({"message "  : "deleted"})

}