import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from "next/server";
import { Limiter } from "./limiter";
import bcrypt from "bcrypt"
import * as jose from "jose"

interface Props {
    email: string;
    password: string;
  }
  const prisma = new PrismaClient({})

  const limiter = Limiter()

  
  
  export async function POST(
    req: NextRequest ,
    res : NextResponse
    
    ) {
      
      
      const reamaining = await (await limiter).removeTokens(1)
      if (reamaining < 0) {
          return new NextResponse(JSON.stringify({"message" : "too mant req wait 1 minuts"}) , {status : 405 ,  headers: { "Content-Type": "application/json" } })
        }
        
        const {  email, password }: Props = await req.json();
        
        
        const emailhaveAccount = prisma.restaurant.findMany({
            where : {
                email : email
            }
            ,
            select : {
                id : true
            }
        })
        
        const alg = 'HS256'
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)

        const token =  await new jose.SignJWT({ email: email })
        .setProtectedHeader({ alg })
        .setExpirationTime("24h")
        .sign(secret)

    ;(await limiter).removeTokens(1)

    console.log(token);
    
    
    if ((await emailhaveAccount).length === 0) {
        return new NextResponse(JSON.stringify({"message": " we dont have this email "}), {
            headers: { "Content-Type": "application/json" },
            status: 402
        });        
    }else {
        const hashpass = await prisma.restaurant.findUnique({
            where: {
              email: email,
            },
            select: {
              password: true,
            },
          });
       
          
          const hashres = await bcrypt.compare(password ,String(hashpass?.password) )
           
          
   

    
        if (hashres) {
            return new NextResponse(JSON.stringify({"message": " accepted " , 
          "token" : token 
        }), {
                headers: { "Content-Type": "application/json" },
                status: 201
            });        
       
        }else  {
            return new NextResponse(JSON.stringify({"message": " wrong password "}), {
                headers: { "Content-Type": "application/json" },
                status: 404
            });        
        }

        
    }

    

}