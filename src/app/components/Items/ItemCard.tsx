import React from 'react';
import Image from 'next/image';
import Deletebtn from './Deletebtn';

interface props  {
    name : string
    image : string
    price : number
    id : any
}

const EsteikCard =  ({name , image , price , id } : props) => {


  


    return (
        <section className=' m-5 bg-neutral-800 text-center flex  flex-col w-[300px] rounded-3xl '>
            <img className='  rounded-lg h-48' src={image} height={250} width={300} alt={'image'}  />
             <h1 className=' text-gray-300 text-xl mt-5'>{name}</h1>
             <p className=' mt-4 text-gray-400'>{price},000</p>
             <Deletebtn id = {id} />
        </section>
    );
};

export default EsteikCard;