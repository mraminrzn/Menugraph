import React from "react";
import RestaurantListCards from "../components/resataurantlist/RestaurantListCards";
import { getAllRestaurants } from "./geAllRestaurants";

const page = async () => {
  const data = await getAllRestaurants();
  const test = [
    { lastname: 'راز', Restaurantname: 'هیوا', email: 'Hiva@gmail.com' },
    {
      lastname: 'سالاری',
      Restaurantname: 'زمرد',
      email: 'zomorod@gmail.com'
    }
  ]
  


  return (
    <div>
      <h1 className=" text-center text-2xl mt-28">
        لیست کافه یا رستوران هایی که با{" "}
        <span className=" text-cyan-400">منوگراف </span> همکاری میکنن
      </h1>
      <div className=" flex mb-40">
        {data.map((data: any) => (
          <RestaurantListCards
            lastname={data.lastname}
            Restaurantname={data.Restaurantname}
            email={data.email}
          />
        ))}
        <img />
      </div>
    </div>
  );
};


export default page;

// const data = await (await getRestaurants()).json()
