"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const InputItems = ({ id }: { id: any }) => {

    const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    price: "",
    restaurant_id: "",
    image: "",
    category: "کباب",
  });

  function submithandeler() {

    fetch("/api/Items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        price: Number(form.price),
        restaurant_id: id,
        category: form.category,
        image: form.image,
      }),
    })
      .then(async (response) => {
        setForm( {   name: "",
        price: "",
        restaurant_id: "",
        image: "",
        category: "",})
        router.refresh()
       
      })
  }

  return (
    <form className="bg-neutral-800 p-10 rounded-2xl m-8 w-2/4 max-sm:w-4/5 flex flex-col justify-between">
      <div className="text-center">
        <input
          value={form.name}
          onChange={(e) =>
            setForm((prevForm) => ({ ...prevForm, name: e.target.value }))
          }
          placeholder="اسم"
          className="bg-gray-800 border-none max-sm:w-full max-sm:ml-2 text-right h-10 placeholder:text-right text-gray-400 border rounded p-2 py-3 w-[49%]"
        />
        <div>
          <input
            value={form.image}
            onChange={(e) =>
              setForm((prevForm) => ({ ...prevForm, image: e.target.value }))
            }
            placeholder="عکس"
            className="bg-gray-800 border-none max-md:w-full text-right h-10 m-2 placeholder:text-right text-gray-400 border rounded p-2 py-3 w-[49%]"
          />
          <p className="text-red-600">
            توجه کنید در اینجا باید لینک عکس قرار گیرد
          </p>
        </div>
      </div>
      <div className="text-center">
        <input
          value={form.price}
          onChange={(e) =>
            setForm((prevForm) => ({ ...prevForm, price: e.target.value }))
          }
          placeholder="هزار تومان"
          type="number"
          className="bg-gray-800 max-sm:w-[40%]  border-none text-right h-10 placeholder:text-right text-gray-400 border rounded p-2 py-3 w-[18%]"
          />
          <label className=" text-gray-300 ml-3" >قیمت به  هزار تومان</label>

</div>
<div className=" text-center">
        <select
          className="bg-gray-800  text-cyan-300 h-10 m-4"
          id="cars"
          onChange={(e) =>
            setForm((prevForm) => ({ ...prevForm, category: e.target.value }))
          }
          value={form.category}
        >
          <option value="کباب">کباب</option>
          <option value="سالاد">سالاد</option>
          <option value="استیک">استیک</option>
        </select>
        <label className="text-gray-300">دسته بندی محصول </label>
        </div>
      <div className="mt-5 justify-center text-center">
        <button
          type="button"
          onClick={submithandeler}
          className="py-2 px-4 rounded text-lg text-gray-300 hover:text-gray-950 transition duration-500 bg-blue-700"
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default InputItems;
