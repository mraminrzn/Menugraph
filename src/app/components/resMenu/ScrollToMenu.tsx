'use client'
import React from 'react'

export default function ScrollToMenu() {

    const isBrowser = () => typeof window !== 'undefined';
    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({top:450 , behavior:"smooth"})  
       }

  return (
    <div onClick={scrollToTop} className=" hover:text-zinc-400 text-gray-700 duration-300 m-20 flex justify-center cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 mx-4 h-6  text-center"
    >
      <path
        strokeLinecap="round"
        className=" animate-bounce"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    </svg>
    <h1 className=" dark:text-gray-500 text-center text-2xl  duration-300">مشاهده لیست منو</h1>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 mx-4 h-6  text-center  animate-bounce"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    </svg>
  </div>  )
}
