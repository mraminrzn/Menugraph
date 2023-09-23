import Image from 'next/image'
import React from 'react'
import HowMany from './HowMany'

interface props {
  name  : String
  image : string
  price : number
}

export default function MenuCard({ name , image , price} : props) {


  return (
<div className=' m-8 flex dark:bg-gray-900 dark:text-gray-500  flex-col w-96 bg-gray-400 rounded-2xl  h-[400px] '>
    <img className=' text-center w-[370] h-44 m-3 rounded-2xl' src={image} alt="kbb" />
    <h6 className=' text-2xl m-2 text-center'>{name} </h6>
    <p className=' m-5'>قیمت:  <span>{price}</span> هزارتومان</p>
    <HowMany />
</div>
  )
}
