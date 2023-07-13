import EsteikCard from "./ItemCard";
import { getStaiks , getKabab , getSalad } from "./itemsApi";

export default async function ItemsCard () {

    const saladData = await getSalad()
    const staikData = await getStaiks()
    const kababData = await getKabab()
    
    console.log(kababData);
    

  return (
    <>
        <h1 className=" block text-3xl text-gray-300">سالاد ها</h1>
        <div className=" flex flex-wrap justify-center m-8">
      {saladData.map(data => <EsteikCard key={ data.id} id = {data.id} name={data.name} price={data.price} image={data.image}   />)}
      </div>
      <h1 className=" text-center text-3xl text-gray-300">استیک ها </h1>
      <div className=" flex flex-wrap justify-center m-8">
      {staikData.map(data => <EsteikCard key={ data.id} id = {data.id} name={data.name} price={data.price} image={data.image}   />)}
      
      </div>
      <h1 className=" text-3xl text-gray-300">کباب ها</h1>
      <div className=" flex flex-wrap justify-center m-8">
      {kababData.map(data => <EsteikCard key={ data.id} id = {data.id} name={data.name} price={data.price} image={data.image}   />)}
      </div>
    </>
  );
};

