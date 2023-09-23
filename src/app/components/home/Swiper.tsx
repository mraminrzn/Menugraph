'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from "@/public/images/test1.jpg"

import 'swiper/css';
import 'swiper/css/effect-cards';

import './style.css';

import { EffectCards  } from 'swiper/modules';

export default function App() {
  
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className=" max-md:w-52 max-md:h-96 w-[800px] h-[550px] z-10"
      >
        <SwiperSlide><img className=' max-md:w-52 max-md:h-96 w-[800px] h-[732px]' src='/images/test1.jpg' /></SwiperSlide>
        <SwiperSlide><img className=' max-md:w-52 max-md:h-96 w-[800px] h-[732px]' src='/images/test2.jpg' /></SwiperSlide>
        <SwiperSlide><img className=' max-md:w-52 max-md:h-96 w-[800px] h-[732px]' src='/images/test3.jpg' /></SwiperSlide>
        <SwiperSlide><img className=' max-md:w-52 max-md:h-96 w-[800px] h-[732px]' src='/images/test4.jpg' /></SwiperSlide>
        <SwiperSlide><img className=' max-md:w-52 max-md:h-96 w-[800px] h-[732px]' src='/images/test5.jpg' /></SwiperSlide>
        <SwiperSlide><img className=' max-md:w-52 max-md:h-96 w-[800px] h-[732px]' src='/images/test6.jpg' /></SwiperSlide>
   
      </Swiper>
    </>
  );
}
