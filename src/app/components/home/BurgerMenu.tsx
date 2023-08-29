'use client'
import React from 'react'
import { useState } from 'react'
import LoginModal from './LoginModal'
import Link from 'next/link'
import DeleteCookiescomponent from '../DeleteCookiescomponent'
import Image from 'next/image'
import logo from "@/public/logo/logo.png";

interface props {
  loggedin : any,
  data : any
}


export default function BurgerMenu({loggedin , data }:props ) {

    const [click , setClic] = useState(true)

  return (
    <div>
      <nav className=' mt20 fixed top-0 left-0 right-0 h-14 flex justify-between items-center px-4  backdrop-blur-lg '>
      <div className="flex items-center">

        <Image
          src={logo}
          width={50}
          height={50}
          alt="logo"
          className="rounded-full"
          />
        <h3 className=" text-gray-100 max-sm:text-sm text-2xl font-bold ml-2">منوگراف</h3>
      </div>
      <div className={`flex md:flex max-md:${click ? " hidden" : "flex flex-col space-y-8 absolute right-0 duration-1000 top-0 w-2/3 h-screen pt-10 opacity-90 pr-10 bg-[#16161a]"} duration-1000 items-center space-x-4`}>
          {loggedin ?
          
          <><Link
          onClick={() => setClic(true)}
              className=" text-gray-100  text-lg transition duration-500 hover:text-emerald-600"
              href="/"
            >
              خانه
            </Link>
              <Link
                onClick={() => setClic(true)}

                className=" text-gray-100  text-lg transition duration-500 hover:text-emerald-600"
                href={`/me/${data?.value}`}
              >
                حساب من
              </Link>
            <Link
                      onClick={() => setClic(true)}

              className=" text-gray-100  text-lg transition duration-500 hover:text-emerald-600"
              href="/about"
            >
                مدیرت سفارش
              </Link>
              <DeleteCookiescomponent setclick={setClic} />
              
              </>
      

          :
          <><Link
              className=" text-gray-100 text-lg  transition duration-500 hover:text-emerald-600"
              href="/"
              onClick={() => setClic(true)}
            >
              خانه
            </Link><Link
              className=" text-gray-100 text-lg   transition duration-500 hover:text-emerald-600"
              href="/about"
              onClick={() => setClic(true)}
            >
                درباره ما
              </Link>
              <LoginModal setclick={setClic} isignin={true} />
              <LoginModal setclick={setClic}  isignin={false} />
              </>
          
          }
          </div>
      <div onClick={() => setClic(!click)} className=' min block md:hidden   cursor-pointer'>
        <p className={`${click ? "" : 'rotate-45 absolute top-6 '} w-8 transition   rounded-2xl  h-1 my-1 bg-white `}></p>
        <p className={`${click ? "" : 'hidden'} w-8 animate-pulse  rounded-2xl transition  h-1 my-1 bg-white `}></p>
        <p className={`${click ? "" : '-rotate-45 '} w-8 transition  rounded-2xl  h-1 my-1 bg-white `}></p>
      </div>
          </nav>
      </div>
  )
}
