"use client";
import React, { useState } from "react";
import {
  SignUpCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
const clientId = "7g2agc9r31ua7n1uiqjvkpdqc3";
const client = new CognitoIdentityProviderClient({ region: "us-east-1" });
function Page() {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handelsginup = async () => {
    try {
      const command = new SignUpCommand({
        ClientId: clientId,
        Username: username,
        Password: password,
        UserAttributes: [{ Name: "email", Value: email }],
      });
    } catch (error) {
      console.log(error);
    }

    console.log(await client.send(command));
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  bg-zinc-200">
      <div className="bg-white w-2/6 flex flex-col p-10 items-center justify-center gap-5 rounded-xl h-[400px]">
        <h1 className="font-bold text-2xl">Sign up</h1>
        <input
          className="bg-zinc-200 p-2 rounded w-full"
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          className="bg-zinc-200 p-2 rounded w-full"
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <input
          className="bg-zinc-200 p-2 rounded w-full"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button
          className="bg-green-600 w-full p-1 text-white font-bold rounded"
          onClick={handelsginup}
        >
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
