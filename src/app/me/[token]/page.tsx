import { ReserveList } from '@prisma/client';
import { decode } from 'jsonwebtoken';
import React from 'react';
import InputItems from '../../components/me/InputItems';
import ItemsCard from '../../components/Items/ItemsCard';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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

  

  if (!cookies().has("JWT")) {
    redirect('/not-found')
  }
  
  if (typeof(data) === typeof("hi") || data === null) {
    redirect('/not-found')
  }
  
  

  return (
    <main className=' flex flex-col justify-center items-center'>
      <h1 className=' text-2xl text-gray-300 mt-20 max-sm:text-lg '> {`سلام ${data &&  data.name} به حساب رستوران ${ data && data.restaurantname}  خوش آمدی`}</h1>
      <p className=' text-gray-400 text-2xl mt-20 max-sm:text-lg'>اپلود ایتم های جدید </p>
      <InputItems id={data && data?.id} />
      <ItemsCard />
    </main>
  );
};

export default page;