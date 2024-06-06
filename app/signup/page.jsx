'use client'
import React, { useState } from "react";
import { Auth } from "aws-amplify";
function Page() {
  const [email, setemail] = useState('')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const handelsginup = async ()=>{
   try {
    console.log(email);
    console.log(username);
    console.log(password);
    const {user} = await Auth.signUp({
      username: username,
      password: password,
      attributes: {
          email: email,
      }
    })
    console.log(user);
   } catch (error) {
    console.log(error);
   }
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  bg-zinc-200">
      <div className="bg-white w-2/6 flex flex-col p-10 items-center justify-center gap-5 rounded-xl h-[400px]">
        <h1 className="font-bold text-2xl">Sign up</h1>
        <input
          className="bg-zinc-200 p-2 rounded w-full"
          type="text"
          placeholder="Email"
          onChange={(e)=>{
            setemail(e.target.value)
          }}
        />
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
          type="password"
          placeholder="Password"
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
        />
        <button className="bg-green-600 w-full p-1 text-white font-bold rounded" onClick={handelsginup}>
        Sign up
        </button>
        <div className="flex gap-2 items-center">
          <a className="text-[12px] text-blue-700" href="/forgotpassword">
            Forgot password
          </a>
          |
          <a className="text-[12px] text-blue-700" href="/login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;
