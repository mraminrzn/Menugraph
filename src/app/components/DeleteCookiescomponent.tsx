'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteCookiescomponent = ({setclick} : {setclick : Function}) => {
    const router = useRouter()

    function deleteCook() {
        fetch("/api/deleteCookies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key : "JWT"
          }),
        })
        
        

           setTimeout(() => {
             router.refresh()
             router.push("/")
           }, 300);

           setclick(true)
            
      }
    return (
        <div onClick={deleteCook }
         
        className=" dark:text-gray-100 text-black text-lg duration-75 max-md:text-sm transition  hover:text-emerald-600 cursor-pointer"
      >
        خروج
      
      </div>
    );
};

export default DeleteCookiescomponent;