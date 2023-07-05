import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

interface Props {
  name: string;
  lastname: string;
  phone: string;
  Restaurantname: string;
  email: string;
  password: string;
}



export async function POST(req: Request) {
  const { name, lastname, phone, Restaurantname, email, password }: Props = await req.json();



  // بررسی پسورد
  
   const pass = await bcrypt.hash(password , 10)
   console.log(pass);
   
   
  
   

   const iscreate = await prisma.restaurant.findMany({
      where: {
          email: email
      },
      select: {
          name: true
      }
   }
    
   );
   

if (iscreate.length !== 0) {
    
    return new NextResponse(JSON.stringify({"message": "we have already this user"}), {
        headers: { "Content-Type": "application/json" },
        status: 404
    });
    
}else {
  
    

    const data = await prisma.restaurant.create({
        data: {
            name: name,
            lastname: lastname,
            phone: phone,
            email: email,
            Restaurantname : Restaurantname,
            password: await bcrypt.hash(password , 10),
          },
      });
      
      
      return NextResponse.json({ message: 'success' });
}
   
   

  
}
