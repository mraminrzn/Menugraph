import React, { memo } from "react";
import Image from "next/image";
import logo from "@/public/logo/logo.png";
import Link from "next/link";
import LoginModal from "./LoginModal";

const NavBar = memo(() => {
  return (
    <nav className='  fixed top-0 left-0 right-0 h-14 flex justify-between items-center px-4 backdrop-filter backdrop-blur-lg bg-opacity-50'>
      <div className="flex items-center">
        <Image
          src={logo}
          width={50}
          height={50}
          alt="logo"
          className="rounded-full"
        />
        <h3 className=" text-gray-100 text-2xl font-bold ml-2">منوگراف</h3>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          className=" text-gray-100 text-lg transition duration-500 hover:text-emerald-600"
          href="/"
        >
          خانه
        </Link>
        <Link
          className=" text-gray-100 text-lg transition duration-500 hover:text-emerald-600"
          href="/about"
        >
          درباره ما
        </Link>
         < LoginModal isignin={true} />
         < LoginModal isignin={false} />
        
      </div>
    </nav>
  );
});

export default NavBar;
