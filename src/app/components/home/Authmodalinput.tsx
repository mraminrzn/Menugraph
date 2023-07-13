"use client";
import React, { useState } from "react";
import { Eyes } from "./eyesvg/Eyes";
import { useRouter } from "next/navigation";

const validname = /^[\u0600-\u06FF\s]+$/;
const validnumber = /^\d{11}$/;
const validemail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const validpassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

interface props {
  inputs: {
    name: string;
    lastname: any;
    password: string;
    repassword: string;
    phone: string;
    email: string;
    Restaurantname: string;
  };
  inputauthHandeler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  issignin: boolean;
  setOpen : any
}

const Authmodalinput = ({ inputs, inputauthHandeler, issignin , setOpen}: props) => {

  const router = useRouter()
  const [eyes, setEyes] = useState(false);
  const [eyes2, setEyes2] = useState(false);
  const [errorauth, setErrorauth] = useState("");
  const [succes, setSucces] = useState(false);
  const [loading , setLoiading] = useState(false)
  const [token , setToken] = useState('')

  console.log(inputs.Restaurantname);
  

  
  function submithandeler() {
    console.log(validname.test(inputs.Restaurantname));


    if (issignin) {
      if (!validemail.test(inputs.email)) {
        setErrorauth("ایمیل اشتباه است ");
      } else if (!validpassword.test(inputs.password)) {
        setErrorauth("رمز مطابقت ندارد");

      } else {
        setLoiading(true)
        setErrorauth("");
        fetch("/api/RestaurantLogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: inputs.email,
            password: inputs.password,
          }),
        }).then(async (e) => {

          if (e.status === 402) {
            
            setSucces(false);
            setErrorauth("همچین ایمیلی وجود ندارد ");
            setLoiading( false)
            console.log(e.status);
            
             
          } else if (e.status === 404) {
            setSucces(false);
            setErrorauth("رمز اشتباه می باشد ");
            setLoiading(false)
          }else if (e.status === 405){
            setSucces(false);
            setErrorauth("تلاش های زیادی داشتین لطفا 1 دقیقه دیگه امتحان کنید ");
            setLoiading(false)
          } else {
            setSucces(true);
            setErrorauth("ورود با موفقیت انجام شد ");
            setLoiading( false)
            const token = await e.json().then(e => e.token);
            setTimeout(() => {
              setOpen(false)
              router.refresh()
              
            }, 1000);
          }
        });
      }
    } else {
      if (!validname.test(inputs.name)) {

        setErrorauth("نام اشتباه است");


      } else if (!validname.test(inputs.lastname)) {
        setErrorauth("نام و نام خانوادگی اشتباه است ");

      } else if (!validname.test(inputs.Restaurantname)) {
        setErrorauth("اسم کافه یا رستوران اشتباه می باشد ");

      } else if (!validnumber.test(inputs.phone)) {
        setErrorauth("شماره تلفن اشتباه است");

      } else if (!validemail.test(inputs.email)) {
        setErrorauth("ایمیل نامعتبر است ");

      } else if (!validpassword.test(inputs.password)) {
        setErrorauth(
          " رمز ضعیف میباشد حداقل 8 کاراکتر، شامل حروف کوچک، حروف بزرگ، اعداد و نمادهای خاص  "
        );

      } else if (inputs.password !== inputs.repassword) {
        setErrorauth("رمز ها با هم مطابقت ندارند ");

      } else {
        setLoiading(true)
        setErrorauth("");
        fetch("/api/RestaurantSignUp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: inputs.name,
            lastname: inputs.lastname,
            Restaurantname: inputs.Restaurantname.replace( " " , "-"),
            phone: inputs.phone,
            email: inputs.email,
            password: inputs.password,
          }),
        })
          .then((data) => {
            if (data.status === 404) {
              setSucces(false);
              setErrorauth(
                "ایمیل قبلا در سایت ثبت شده لطفا از ایمیل جدید استفاده کنید"
              );
              setLoiading( false)

            } else {
              setSucces(true);
              setErrorauth(
                " ثبت نام با موفقیت انجام شد \n همکاران ما به زودی با شما تماس میگیرن "
              );
              setLoiading( false)
              setTimeout(() => {
                setOpen(false)
              }, 2000);

            }
          })
          .catch((e) => {
            console.log(e);
            setLoiading( false)

          });
      }
    }
  }

  return (
    <div>
      {issignin ? (
        <></>
      ) : (
        <>
          <div className=" my-3 flex justify-between text-sm">
            <input
              onChange={inputauthHandeler}
              name="lastname"
              value={inputs.lastname}
              type="text"
              placeholder="نام خانوادگی "
              className=" bg-gray-800 border-none text-right h-10 focus:border-none placeholder:text-right text-gray-400 border rounded p-2 py-3 w-[49%]"
            />
            <input
              onChange={inputauthHandeler}
              name="name"
              value={inputs.name}
              type="text"
              placeholder="نام"
              className=" bg-gray-800 border-none text-right h-10   placeholder:text-right text-gray-400 border rounded p-2 py-3 w-[49%]"
            />
          </div>
          <div className=" my-3 flex justify-between text-sm">
            <input
              onChange={inputauthHandeler}
              name="phone"
              value={inputs.phone}
              type="number"
              placeholder="شماره تلفن"
              className=" bg-gray-800 border-none text-right h-10   placeholder:text-right text-gray-400 border rounded p-2 py-3 w-[49%]"
            />
            <input
              onChange={inputauthHandeler}
              name="Restaurantname"
              value={inputs.Restaurantname}
              type="text"
              placeholder="اسم رستوران یا کافه"
              className=" bg-gray-800 border-none text-right h-10 focus:border-none placeholder:text-right text-gray-400 border rounded p-2 py-3 w-[49%]"
            />
          </div>
        </>
      )}

      <div className=" my-3 flex justify-end text-sm">
        <input
          onChange={inputauthHandeler}
          name="email"
          value={inputs.email}
          type="text"
          placeholder="ایمیل"
          className=" bg-gray-800 border-none text-right h-10   placeholder:text-right text-gray-400 border rounded p-2 py-3 w-[95%]"
        />
      </div>
      <div className=" my-3 flex justify-between text-sm">
        <Eyes eyes={eyes} setEyes={setEyes} />

        <input
          onChange={inputauthHandeler}
          name="password"
          value={inputs.password}
          type={eyes ? "text" : "password"}
          placeholder="رمز"
          className=" bg-gray-800 border-none text-right h-10 z-10 placeholder:text-right text-gray-400 border rounded p-2 py-3 w-full"
        />
      </div>
      {issignin ? (
        <></>
      ) : (
        <>
          <div className=" my-3 flex justify-between text-sm">
            <Eyes eyes={eyes2} setEyes={setEyes2} />
            <input
              onChange={inputauthHandeler}
              name="repassword"
              value={inputs.repassword}
              type={eyes2 ? "text" : "password"}
              className=" bg-gray-800 border-none text-right h-10   placeholder:text-right text-gray-400 border rounded p-2 py-3 w-full"
            />
          </div>
        </>
      )}
      <p
        className={` text-center ${
          succes ? "text-green-600" : "text-red-600"
        } `}
      >
        {errorauth}{" "}
      </p>
      
      <div className=" flex justify-center items-center mt-8">
        {loading ?
      <div
        className="float-right inline-block h-8 w-8 text-cyan-600 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
        
        :  
        <button
          onClick={submithandeler}
          className=" text-cyan-50 text-2xl bg-indigo-600 px-8 rounded-lg py-2"
        >
          تایید
        </button>
        }
     
      </div>
    </div>
  );
};

export default Authmodalinput;
