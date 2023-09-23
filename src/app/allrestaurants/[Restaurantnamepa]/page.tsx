import Image from "next/image";
import React from "react";
import ScrollToMenu from "../../components/resMenu/ScrollToMenu";
import MenuCard from "../../components/resMenu/MenuCard";

interface props {
    id: number,
    image: string,
    name: string,
    category: string,
    price: number,
    restaurant_id: number,
    created_at: string,
    updated_at: string
}

export default async function Restaurant({ params }: any) {
  const getdata = await getRestaurant(params.Restaurantnamepa);

  const realdata = await getdata.json();

  const data = realdata.data[0];
 
  const staiks = data.items.filter((e : props) => e.category === "استیک");
  const salad = data.items.filter((e : props) => e.category === "سالاد");
  const kabab = data.items.filter((e : props) => e.category === "کباب");

  

  
  

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className=" mt-20">
      <h1 className=" text-center text-3xl  dark:text-slate-400 text-black">
        رستوران <span>{data.Restaurantname}</span>
      </h1>
      <div className=" flex justify-between">
        <div className="  backdrop-blur dark:bg-white/50   bg-gray-600 hover:shadow-3xl duration-500  cursor-pointer dark:shadow-stone-700    rounded-2xl ml-20 p-4 w-[250px] text-center">
          <p className=" text-xl mb-2">QrCode</p>
          <Image
            alt={`qr code ${params.restaurantnamepa} `}
            className=" opacity-100 rounded-2xl"
            width={200}
            height={200}
            src={`/QrCode/${params.Restaurantnamepa}.jpg`}
          />
        </div>
        <div></div>

        <div className="  backdrop-blur dark:bg-white/50 mr-20   bg-gray-600 hover:shadow-3xl duration-500  cursor-pointer dark:shadow-stone-700    rounded-2xl ml-20 p-4 w-[250px] text-center">
          <h1 className=" text-neutral-900 text-xl mb-12">
            اطلاعان رستوران <span>{data.Restaurantname}</span>
          </h1>
          <p className=" text-neutral-800 mb-3">{`مالک رستوران  : ${
            data.name + " " + data.lastname
          }`}</p>
          <p className=" text-neutral-800 mb-3"> {`${data.email} : ایمیل`}</p>
          <p className=" text-neutral-800 mb-3">{`شماره تلفن: ${data.phone}`}</p>
        </div>
      </div>
      <ScrollToMenu />
     <div >
      <h1 className=" text-gray-700 dark:text-gray-500 text-2xl text-center">منوی رستوران <span className=" text-blue-600">{data.Restaurantname} </span></h1>
      <div className=" flex flex-col">
       <div>
        <h3 className=" text-2xl my-8 text-center text-gray-700 dark:text-gray-400">
          کباب ها 
        </h3>
        <div className=" flex-wrap justify-around flex">

        {kabab.map((data : props) =><MenuCard name={data.name} image={data.image} price={data.price} /> )}
        </div>

       </div>
       <div>
       <h3 className=" text-2xl my-8 text-center text-gray-700 dark:text-gray-400">
          استیک ها 
        </h3>
        <div className=" flex-wrap justify-around flex">

        {staiks.map((data : props) =><MenuCard name={data.name} image={data.image} price={data.price} /> )}
        </div>

       </div>
       <div>
       <h3 className=" text-2xl my-8 text-center text-gray-700 dark:text-gray-400">
          سالاد ها 
        </h3>
        <div className=" flex flex-wrap justify-around">
        {salad.map((data : props) =><MenuCard name={data.name} image={data.image} price={data.price} /> )}
        </div>
       </div>
       </div>
     </div>
    </main>
  );
}

async function getRestaurant(name: string) {
  const data = await fetch(
    `http://localhost:3000/api/restaurant?restaurantnamepa=${name}`,
    { cache: "no-cache" }
  );
  return data;
}
