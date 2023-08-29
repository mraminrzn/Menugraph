import Link from 'next/link'
import React from 'react'

interface restaurants  {
  lastname : string ; 
  Restaurantname : string ;
  email : string ;

}




export default async function RestaurantListCards({lastname , Restaurantname , email}: restaurants) {

  
  return (
    <div className= ' m-10 w-96 rounded-2xl p-10 bg-gradient-to-br from-cyan-900  to-stone-800'>
      <Link href={`/restaurants/${Restaurantname}`}>
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

