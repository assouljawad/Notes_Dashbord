'use client'
import React, { useState } from "react";

function Page() {
    const [username, setusername] = useState('')
    const [confirmationCode, setconfirmationCode] = useState('')
const handelConfirm = () =>{
    console.log(username);
    console.log(confirmationCode);
}
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center bg-zinc-200">
      <div className="bg-white w-2/6 flex flex-col p-10 items-center justify-center gap-5 rounded-xl h-[400px]">
        <h1 className="font-bold text-2xl">Email Confirmation</h1>
        <input
          className="bg-zinc-200 p-2 rounded w-full"
          type="text"
          placeholder="Username"
          onChange={(e)=>{
                setusername(e.target.value)
          }}
        />
        <input
          className="bg-zinc-200 p-2 rounded w-full"
          type="text"
          placeholder="Confirmation Code"
          onChange={(e)=>{
                setconfirmationCode(e.target.value)
          }}
        />
        <button className="bg-green-600 w-full p-1 text-white font-bold rounded" onClick={handelConfirm}>
        Confirm
        </button>
      </div>
    </div>
  );
}

export default Page;
