"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Authmodalinput from "./Authmodalinput";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1/3,
  bgcolor: "#16161a",
  boxShadow: 28,
  borderRadius: 10,
  p: 4,
};

export default function LoginModal({isignin} : {isignin : boolean}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const inputauthHandeler = (e : React.ChangeEvent<HTMLInputElement>) => {
      setAuthinput({
        ...authinput ,
        [e.target.name] : e.target.value
      })
  }

  const [authinput, setAuthinput] = React.useState({
           name : "" ,
           lastname : "",
           phone : "",
           email : "",
           password : "",
           repassword : "",
           Restaurantname : "",
  })

  return (
    <div>
      <button
        onClick={handleOpen}
        className=" text-gray-100  text-lg transition duration-500 hover:text-emerald-600"
        >
        {isignin ? "ورود" : "ثبت نام"}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h1 className=" text-gray-400 text-center text-2xl">{isignin ? "ورود" : "ثبت نام"}</h1 >
            <p className=' my-3 h-[1px] w-full bg-slate-400'></p>
            <Authmodalinput setOpen = {setOpen} issignin={isignin} inputs={authinput} inputauthHandeler={inputauthHandeler}  /> 
           
        </Box>
      </Modal>
    </div>
  );
}


