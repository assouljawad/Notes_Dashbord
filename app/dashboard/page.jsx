'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import Notecard from "@/components/notecard"
import { useEffect, useState } from "react";
import Addnote from "@/components/addnote";
import Deletenote from "@/components/deletenote";

function Page() {
  const [addNote, setaddNote] = useState(false)
  const [deleteNote, setdeleteNote] = useState(false)
  return (
    <div className="flex h-screen">
      <div className="bg-white w-1/6 flex flex-col justify-start py-10 items-center shadow-[rgba(0,0,15,0.5)_55px_0px_0px_0px]">
        <div className="flex flex-col gap-2">
          <Link href={"/dashboard"} className="flex items-center gap-1 text-xl">
            <MdDashboard />
            Dashboard
          </Link>
          <span className="flex items-center gap-1 text-xl cursor-pointer" onClick={()=>{
            setaddNote(true)
          }}>
            <IoMdAddCircle />
            Add Note
          </span>
        </div>
      </div>
      <div className="bg-zinc-200 w-5/6 p-5 flex flex-col gap-4">
        <div className="flex justify-between bg-white p-5 rounded items-center">
          <h1 className="text-xl font-bold">My Notes</h1>
          <div className="flex items-center gap-1">
            <span className="uppercase font-bold">j.assoul</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded">
          <h1 className="text-xl font-bold">Today's Notes</h1>
          <br></br>
          <div className="flex flex-col gap-4">
            <Notecard setaddNote={setaddNote} setdeleteNote={setdeleteNote}/>
          </div>
        </div>
        <div className="bg-white p-5 rounded">
          <h1 className="text-xl font-bold">Tomorrow's Notes</h1>
          <br></br>
          <div className="flex flex-col gap-4">
            <Notecard setaddNote={setaddNote} setdeleteNote={setdeleteNote}/>
          </div>
        </div>
        <div className="bg-white p-5 rounded">
          <h1 className="text-xl font-bold">This Week's Notes</h1>
          <br></br>
          <div className="flex flex-col gap-4">
            <Notecard setaddNote={setaddNote} setdeleteNote={setdeleteNote}/>
          </div>
        </div>
      </div>
        {addNote ? <Addnote setaddNote={setaddNote}/> : null }
        {deleteNote ? <Deletenote setdeleteNote={setdeleteNote}/> : null }
    </div>
  );
}

export default Page;
