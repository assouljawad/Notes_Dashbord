'use client'
import React, { useState } from 'react'
import Login from '@/components/login'
import Signup from '@/components/signup'

function page() {
    const [isAuth, setisAuth] = useState(false)
    const [isloginpage, setisloginpage] = useState(true)
    const [issignuppage, setissignuppage] = useState(false)
    const [isvalidationpage, setisvalidationpage] = useState(false)
    const [isforgotpage, setisforgotpage] = useState(false)
    return (
        <div>
            {isloginpage ? <Login setissignuppage={setissignuppage} setisforgotpage={setisforgotpage} setisloginpage={setisloginpage} /> : issignuppage ? <Signup setissignuppage={setissignuppage} setisforgotpage={setisforgotpage} setisloginpage={setisloginpage} /> : null}
        </div>
    )
}

export default page