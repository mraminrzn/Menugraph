import Image from 'next/image'
import React from 'react'
import image404 from "@/public/images/404.svg"
import Link from 'next/link'


const NotFound = () => {
  return (
    <>
    <div className=' flex  justify-center'>
     <Image className=' mt-10  ' src={image404} alt={'an image'}></Image>
    </div>
     <h1 className=' text-center text-3xl'>صفحه مورد نظر پیدا نشد</h1>
     <div className=' flex justify-center   '>
      <Link className=' p-4 bg-indigo-700 mt-8 text-2xl text-center w-1/3 rounded-2xl' href={'/'}>بازگشت به خانه</Link>
     </div>
     </>
  )
}

export default NotFound


