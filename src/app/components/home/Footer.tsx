import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='  bottom-0 flex justify-around text-center items-center mt-20 w-full h-40 bg-[#34343c]' >
            <div className=' leading-7'>
                <h3  className=' text-xl text-stone-500'>محتوای سایت </h3>
                <p className=' my-3 h-[1px] w-full bg-slate-400'></p>
                <Link className=' mr-3 text-right list-none block text-slate-400' href={'/'}>خانه</Link>
                <Link className=' mr-3 text-right list-none block text-slate-400' href={'/about'}>درباره ما</Link>
                <Link className=' mr-3 text-right list-none blcok text-slate-400' href={'restaurants'}>لیست رستوران ها</Link>
            </div>
            <div className=' leading-7'>
                <h3  className=' text-xl text-stone-500'>ارتباط با ما </h3>
                <p className=' my-3 h-[1px] w-full bg-slate-400'></p>
                 
                <p className=' mr-3 text-center list-none block text-slate-400' >09907322069</p>
                <p className=' mr-3 text-left list-none block text-slate-400' >@mohmmad.r_2005</p>
                <p className=' mr-3 text-left list-none blcok text-slate-400' >@vahid.sohrangi</p>
            </div>
            
        </footer >
    );
};

export default Footer;