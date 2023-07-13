'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteCookiescomponent = () => {
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
        .then(e => console.log(e)
        )
        .catch( e => console.log(e)
        )

           setTimeout(() => {
             router.refresh()
             router.push("/")
           }, 300);
            
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