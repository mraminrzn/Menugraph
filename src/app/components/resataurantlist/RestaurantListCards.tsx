import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

interface restaurants  {
  lastname : string ; 
  Restaurantname : string ;
  email : string ;
  logo : string;
  Restaurantnamepa : string;

}




export default async function RestaurantListCards({lastname , logo , Restaurantname , email , Restaurantnamepa}: restaurants) {

  
  
  
  return (
    <div className= ' duration-500 hover:shadow-3xl dark:shadow-stone-700 m-10 w-96 rounded-2xl z-40 p-10 bg-gradient-to-br from-zinc-800  to-stone-800'>
      <Link href={`/allrestaurants/${Restaurantnamepa}`}>
        <img src={logo} alt="res logo  " className=' w-24 rounded-2xl mb-3' />
      <h1 className=' text-2xl text-center'>
         رستوران <span>{Restaurantname}</span>  
      </h1>
      <p className=' text-right mt-6'>
          مالک رستوران : <span>{lastname}</span>
      </p>
      <p className=' text-right mt-4'>
            <span>{email}</span> : ایمیل 
      </p>
      </Link>
    </div>
  )
}

