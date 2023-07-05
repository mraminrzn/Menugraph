import React from 'react';

interface Prop {
    title : string
    para : string
}

const Whycard = ({title , para } : Prop) => {
    return (
        <div className=" bg p-5 rounded-lg   bg-[#27272e50] h-[22rem] mx-10 " >
            <h1 className=" text-2xl">{title}</h1>
            <p className=" my-4 h-[1px]  w-full bg-slate-500"></p>
            <p className=" text-gray-300">
               {para}
            </p>
          </div>
    );
};

export default Whycard;