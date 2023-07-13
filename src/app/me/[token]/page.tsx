import { ReserveList } from '@prisma/client';
import { decode } from 'jsonwebtoken';
import React from 'react';
import InputItems from '../../components/me/InputItems';
import ItemsCard from '../../components/Items/ItemsCard';
import { cookies } from 'next/headers';

interface TokenData {
  email?: string;
  name?: string;
  restaurantname: string
  reserve_list : ReserveList
  id : true // دیگر ویژگی‌ها که از توکن استخراج می‌کنید
}

interface PageProps {
  params: {
    token: string;
  };
}

const page = async ({ params: { token } }: PageProps): Promise<JSX.Element> => {
  const data = decode(token) as TokenData;
  console.log(data?.email, data?.name);

  if (!cookies().has("JWT")) {
    
  }
  

  return (
    <main className=' flex flex-col justify-center items-center'>
      <h1 className=' text-2xl text-gray-300 mt-20 max-sm:text-lg '> {`سلام ${data.name} به حساب رستوران ${data.restaurantname}  خوش آمدی`}</h1>
      <p className=' text-gray-400 text-2xl mt-20 max-sm:text-lg'>اپلود ایتم های جدید </p>
      <InputItems id={data?.id} />
      <ItemsCard />
    </main>
  );
};

export default page;