import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(){
    const data = await prisma.restaurant.findMany()

    console.log(data);
    

    return NextResponse.json({'message ': data})
}