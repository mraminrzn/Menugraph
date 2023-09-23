import React from "react";
import RestaurantListCards from "../components/resataurantlist/RestaurantListCards";
import { getRestaurants } from "./getRestaurant";

interface restaurants {
  lastname: string;
  Restaurantname: string;
  email: string;
  logo: string;
  Restaurantnamepa: string;
}

export default async function page() {
  const firstData = await getRestaurants();

  const Data = await firstData.json();

  const restaurants = Data.data;

  

  return (
    <div className=" flex mb-40  mt-20  text-white">
      {restaurants.map((restaurant: restaurants) => (
        <RestaurantListCards
          Restaurantnamepa={restaurant.Restaurantnamepa}
          logo={restaurant.logo}
          lastname={restaurant.lastname}
          Restaurantname={restaurant.Restaurantname}
          email={restaurant.email}
          key={restaurant.email}
        />
      ))}
    </div>
  );
}

