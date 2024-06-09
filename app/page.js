"use client";
import React, { useState } from "react";
import Login from "@/components/login";
import Signup from "@/components/signup";
import Forgotpassword from "@/components/forgotpassword";
import Validation from "@/components/validation";
import Dashboard from "@/components/dashboard";

function Page() {
  const [username, setresendusername] = useState('');
  const [isAuth, setisAuth] = useState(false);
  const [isloginpage, setisloginpage] = useState(true);
  const [issignuppage, setissignuppage] = useState(false);
  const [isforgotpage, setisforgotpage] = useState(false);
  const [isvalidationpage, setisvalidationpage] = useState(false);

  return (
    <div>
      {isloginpage ? (
        <Login
          setissignuppage={setissignuppage}
          setisforgotpage={setisforgotpage}
          setisloginpage={setisloginpage}
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
        />
      ) : isvalidationpage ? (
        <Validation
          setisvalidationpage={setisvalidationpage}
          setisloginpage={setisloginpage}
          setissignuppage={setissignuppage}
          resend_username={username}
        />
      ) : isAuth ? (
        <Dashboard setisloginpage={setisloginpage} setisAuth={setisAuth} />
      ) : (
        <Login
          setissignuppage={setissignuppage}
          setisforgotpage={setisforgotpage}
          setisloginpage={setisloginpage}
          setisAuth={setisAuth}
        />
      )}
    </div>
  );
}

export default Page;
