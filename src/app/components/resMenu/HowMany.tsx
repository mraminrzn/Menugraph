'use client'
import React, { useState } from 'react'


export default function HowMany() {

    const [much , setMuch] = useState(0)

    function changeMuchNumber(type : string) {
        
        console.log(much);
        if (type === "Up") {
            setMuch(much + 1)

        }
        if (type === "Down") {
            if (much >= 1) {
                setMuch(much - 1)
                
            }
        }

    }

    

    
  return (
    <div>
        <div className=' flex justify-around'>
      <div >
         <p className=' text-center'>{much}</p>
         <div className=' flex'>
              <svg onClick={() => changeMuchNumber('Up')}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                  <path  className=' w-10' strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg onClick={() => changeMuchNumber('Down')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-10 duration-300  ${much ? '' :'opacity-50' }  rotate-180 h-10`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
         </div>
      </div>
      <button  className=' text-black p-3 h-12 rounded-2xl bg-blue-700'>
        افزودن به سبد خرید
      </button>
    </div>  
    </div>
  )
}
