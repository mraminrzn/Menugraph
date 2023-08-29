"use client";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";


const Deletebtn = ({id} : {id : any}) => {

    const router = useRouter()

    

    function deletehandeler() {
       fetch("/api/Items/delete"  , {
        method : "POST" , 
        headers : {
            "Content-Type": "application/json",
        } , 
        body : JSON.stringify({
            id : id
        })
       })
       .then(e => {
        setTimeout(() => {
            router.refresh()
        }, 1000);
        
       }
       )
    }

  return (
    <button
      style={{ boxShadow: "10px 9px 19px 9px #000000" }}
      className="  text-white bg-red-600 p-4 text-lg rounded-3xl mt-2 inline"
      onClick={deletehandeler}
    >
      حذف{" "}
    </button>
  );
};

export default Deletebtn;
