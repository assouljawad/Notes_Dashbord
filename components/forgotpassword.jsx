import React from 'react'

function Forgotpassword({ setissignuppage, setisforgotpage, setisloginpage }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-200">
      <div className="bg-white w-2/6 flex flex-col p-10 items-center justify-center gap-5 rounded-xl h-[400px]">
        <h1 className="font-bold text-2xl">Reset Password</h1>
        <input
          className="bg-zinc-200 p-2 rounded w-full"
          type="text"
          placeholder="Email"
        />
        <button className="bg-green-600 w-full p-1 text-white font-bold rounded">
          Reset
        </button>
        <div className="flex gap-2 items-center">
          <span
            className="text-[12px] text-blue-700 cursor-pointer"
            onClick={() => {
              setisforgotpage(false);
              setisloginpage(true);
              setissignuppage(false);
            }}
          >
            Login
          </span>
          |
          <span
            className="text-[12px] text-blue-700 cursor-pointer"
            onClick={() => {
              setisforgotpage(false);
              setisloginpage(false);
              setissignuppage(true);
            }}
          >
            Create Account
          </span>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;