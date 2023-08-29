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
         
        className=" text-gray-100 text-lg max-md:text-sm transition duration-500 hover:text-emerald-600 cursor-pointer"
      >
        خروج
      
      </div>
    );
};

export default DeleteCookiescomponent;