import { PrismaClient } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";
import { Limiter } from "./limiter";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { cookies } from 'next/headers'

interface Props {
  email: string;
  password: string;
}
const prisma = new PrismaClient({});

const limiter = Limiter();

export async function POST(req: NextRequest, res: NextResponse) {
  const reamaining = await (await limiter).removeTokens(1);
  if (reamaining < 0) {
    return new NextResponse(
      JSON.stringify({ message: "too mant req wait 1 minuts" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }

  const { email, password }: Props = await req.json();

  const emailhaveAccount = prisma.restaurant.findMany({
    where: {
      email: email,
    },
    select: {
      password: true,
      name: true,
      accepted: true,
      Restaurantname: true,
    },
  });

  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  (await limiter).removeTokens(1);

  if ((await emailhaveAccount).length === 0) {
    return new NextResponse(
      JSON.stringify({ message: " همچین ایمیلی وجود ندارد " }),
      {
        headers: { "Content-Type": "application/json" },
        status: 404,
      }
    );
  } else {
    const hashpass = await prisma.restaurant.findUnique({
      where: {
        email: email,
      },
      select: {
        id : true ,
        password: true,
        email: true,
        name: true,
        accepted: true,
        Restaurantname: true,
        reserve_list : true
      },
    });

    const token = await new jose.SignJWT({
      email: hashpass?.email,
      name: hashpass?.name,
      restaurantname : hashpass?.Restaurantname,
      reserqvlist : hashpass?.reserve_list,
      id : hashpass?.id
    })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);
      
      

    const hashres = await bcrypt.compare(password, String(hashpass?.password));


    if (hashpass?.accepted) {
      cookies().set("JWT" , token , {secure : true ,maxAge : 60* 60 * 24 } )
      
      return new NextResponse(
        JSON.stringify({ message: " ورود با موفقیت انجام شد ", token: token }),
        {
          headers: { "Content-Type": "application/json" },
          status: 201,
        }
      );
    }
    if (!hashpass?.accepted) {
      return new NextResponse(
        JSON.stringify({ message: " ایمیل شما ثبت شده منتطر تایید بمونین " }),
        {
          headers: { "Content-Type": "application/json" },
          status: 201,
        }
      );
    }
    if (!hashres) {
      return new NextResponse(
        JSON.stringify({ message: " رمز اشتباه می باشد  " }),
        {
          headers: { "Content-Type": "application/json" },
          status: 404,
        }
      );
    }
  }
}

