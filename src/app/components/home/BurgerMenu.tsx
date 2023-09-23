"use client";
import React from "react";
import { useState } from "react";
import LoginModal from "./LoginModal";
import Link from "next/link";
import DeleteCookiescomponent from "../DeleteCookiescomponent";
import Image from "next/image";
import logo from "@/public/logo/logo.png";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

interface props {
  loggedin: any;
  data: any;
}

export default function BurgerMenu({ loggedin, data }: props) {
  const [click, setClic] = useState(true);
  const { resolvedTheme, setTheme } = useTheme();
  
  const router = useRouter()

  return (
    <div>
      <nav className=" mt20 fixed top-0 w-screen  left-0 right-0 h-14 flex justify-between items-center z-50 px-4  backdrop-blur-sm ">
        <div className="flex items-center">
          <Image
          onClick={() => router.push("/")}
            src={logo}
            width={50}
            height={50}
            alt="logo"
            className="rounded-full cursor-pointer"
          />

          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {resolvedTheme === "dark" ? (
              
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 m-2 border-zinc-800  border-2 rounded p-1 "

                >
                <path
                className= " text-slate-400 duration-300"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 m-2 border-zinc-400 border-2 rounded p-1"
            >
              <path
              className=" text-zinc-600 duration-300 "
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
            )}
          </button>
        </div>

        <div
          className={`flex md:flex max-md:${
            click
              ? " hidden"
              : "flex flex-col space-y-8 absolute right-0 duration-1000 top-0 w-2/3 h-screen pt-10 opacity-90 pr-10 bg-[#16161a]"
          } duration-1000 items-center space-x-4`}
        >
          {loggedin ? (
            <>
              <Link
                onClick={() => setClic(true)}
                className=" dark:text-gray-100   text-lg transition duration-500 hover:text-emerald-600"
                href="/"
              >
                خانه
              </Link>
              <Link
                onClick={() => setClic(true)}
                className=" dark:text-gray-100   text-lg transition duration-500 hover:text-emerald-600"
                href="/allrestaurants"
              >
                نمایش رستوران ها
              </Link>
              <Link
                onClick={() => setClic(true)}
                className=" dark:text-gray-100   text-lg transition duration-500 hover:text-emerald-600"
                href={`/me/${data?.value}`}
              >
                حساب من
              </Link>
              <Link
                onClick={() => setClic(true)}
                className=" dark:text-gray-100   text-lg transition duration-500 hover:text-emerald-600"
                href="/about"
              >
                مدیرت سفارش
              </Link>
              <DeleteCookiescomponent setclick={setClic} />
            </>
          ) : (
            <>
              <Link
                className=" dark:text-gray-100  text-lg  transition duration-500 hover:text-emerald-600"
                href="/"
                onClick={() => setClic(true)}
              >
                خانه
              </Link>
              <Link
                onClick={() => setClic(true)}
                className=" dark:text-gray-100   text-lg transition duration-500 hover:text-emerald-600"
                href="/allrestaurants"
              >
                نمایش رستوران ها
              </Link>
              <Link
                className=" dark:text-gray-100  text-lg   transition duration-500 hover:text-emerald-600"
                href="/about"
                onClick={() => setClic(true)}
              >
                درباره ما
              </Link>
              <LoginModal setclick={setClic} isignin={true} />
              <LoginModal setclick={setClic} isignin={false} />
            </>
          )}
        </div>
        <div
          onClick={() => setClic(!click)}
          className=" min block md:hidden   cursor-pointer"
        >
          <p
            className={`${
              click ? "" : "rotate-45 absolute top-6 "
            } w-8 transition   rounded-2xl  h-1 my-1 bg-white `}
          ></p>
          <p
            className={`${
              click ? "" : "hidden"
            } w-8 animate-pulse  rounded-2xl transition  h-1 my-1 bg-white `}
          ></p>
          <p
            className={`${
              click ? "" : "-rotate-45 "
            } w-8 transition  rounded-2xl  h-1 my-1 bg-white `}
          ></p>
        </div>
      </nav>
    </div>
  );
}
