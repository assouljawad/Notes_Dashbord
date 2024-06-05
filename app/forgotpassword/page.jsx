import React from 'react'

function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-200">
        <div className="bg-white w-2/6 flex flex-col p-10 items-center justify-center gap-5 rounded-xl h-[400px]">
          <h1 className="font-bold text-2xl">Reset Password</h1>
          <input className="bg-zinc-200 p-2 rounded w-full" type="text" placeholder="Email" />
          <button className="bg-green-600 w-full p-1 text-white font-bold rounded">Reset</button>
         <div className="flex gap-2 items-center">
         <a className="text-[12px] text-blue-700" href="/login">Login</a>
         |
         <a className="text-[12px] text-blue-700" href="/signup">Create Account</a>
         </div>
      </div>
    </div>
  )
}

export default Page