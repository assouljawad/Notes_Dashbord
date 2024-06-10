"use client";
import React, { useState, useEffect } from "react";
import Login from "@/components/login";
import Signup from "@/components/signup";
import Forgotpassword from "@/components/forgotpassword";
import Validation from "@/components/validation";
import Dashboard from "@/components/dashboard";
import ConfirmForgotPassword from "@/components/confirmForgotPassword";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function Page() {
  const [fetchedData, setFetchedData] = useState(null);
  const [username, setresendusername] = useState("");
  const [isAuth, setisAuth] = useState(false);
  const [isloginpage, setisloginpage] = useState(true);
  const [issignuppage, setissignuppage] = useState(false);
  const [isforgotpage, setisforgotpage] = useState(false);
  const [isvalidationpage, setisvalidationpage] = useState(false);
  const [isConfirmForgotPasswordpage, setisConfirmForgotPasswordpage] =
    useState(false);
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_URL)
      .then((response) => {
        setFetchedData(response.data);
      })
      .catch((error) => {
        toast.error(error.message);
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <Toaster />
      {isloginpage ? (
        <Login
          setissignuppage={setissignuppage}
          setisforgotpage={setisforgotpage}
          setisloginpage={setisloginpage}
          setresendusername={setresendusername}
          setisAuth={setisAuth}
        />
      ) : issignuppage ? (
        <Signup
          setissignuppage={setissignuppage}
          setisforgotpage={setisforgotpage}
          setisloginpage={setisloginpage}
          setisvalidationpage={setisvalidationpage}
          setresendusername={setresendusername}
        />
      ) : isforgotpage ? (
        <Forgotpassword
          setissignuppage={setissignuppage}
          setisforgotpage={setisforgotpage}
          setisloginpage={setisloginpage}
          setisConfirmForgotPasswordpage={setisConfirmForgotPasswordpage}
        />
      ) : isConfirmForgotPasswordpage ? (
        <ConfirmForgotPassword
          setisConfirmForgotPasswordpage={setisConfirmForgotPasswordpage}
          setisloginpage={setisloginpage}
        />
      ) : isvalidationpage ? (
        <Validation
          setisvalidationpage={setisvalidationpage}
          setisloginpage={setisloginpage}
          setissignuppage={setissignuppage}
          resend_username={username}
        />
      ) : isAuth ? (
        <Dashboard
          notes={fetchedData}
          setisloginpage={setisloginpage}
          setisAuth={setisAuth}
          resend_username={username}
        />
      ) : (
        <Login
          setissignuppage={setissignuppage}
          setisforgotpage={setisforgotpage}
          setisloginpage={setisloginpage}
          setresendusername={setresendusername}
          setisAuth={setisAuth}
        />
      )}
    </div>
  );
}

export default Page;
