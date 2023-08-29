import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Limiter } from "../RestaurantLogin/limiter";

const prisma = new PrismaClient();

interface Props {
  name: string;
  lastname: string;
  phone: string;
  Restaurantname: string;
  Restaurantnamepa: string;
  email: string;
  password: string;
}

const limiter = Limiter();

export async function POST(req: Request) {
  const { name, lastname, phone, Restaurantname,Restaurantnamepa, email, password }: Props =
    await req.json();

  const reamaining = await (await limiter).removeTokens(1);
  if (reamaining < 0) {
    return new NextResponse(
      JSON.stringify({ message: "too mant req wait 1 minuts" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }

  // بررسی پسورد

  const pass = await bcrypt.hash(password, 10);

  const iscreate = await prisma.restaurant.findMany({
    where: {
      email: email,
    },
    select: {
      name: true,
    },
  });

  if (iscreate.length !== 0) {
    return new NextResponse(
      JSON.stringify({ message: "این ایمیل قبلا ثبت نام کرده" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 404,
      }
    );
  } else {
    const data = await prisma.restaurant.create({
      data: {
        name: name,
        lastname: lastname,
        phone: phone,
        email: email,
        Restaurantname: Restaurantname,
        Restaurantnamepa: Restaurantnamepa,
        password: await bcrypt.hash(password, 10),
      },
    });

    return NextResponse.json({
      message: "کاربر با موقیت ذخیره شد منتظر تایید بمانید ",
    });
  }
}
