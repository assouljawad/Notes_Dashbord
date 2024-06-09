"use client";
import React from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import Notecard from "@/components/notecard";
import { useEffect, useState } from "react";
import Addnote from "@/components/addnote";
import Deletenote from "@/components/deletenote";

function Dashboard({ setisloginpage, setisAuth }) {
  const [addNote, setaddNote] = useState(false);
  const [deleteNote, setdeleteNote] = useState(false);
  return (
    <div className="flex h-screen">
      <div className="bg-white w-1/6 flex flex-col justify-center py-10 items-center shadow-[rgba(0,0,15,0.5)_55px_0px_0px_0px]">
        <div className="flex flex-col justify-evenly gap-2 h-[300px]">
          <Link
            href={"/"}
            className="flex items-center gap-1 text-xl font-bold"
          >
            <MdDashboard className="text-4xl" />
            Dashboard
          </Link>
          <span
            className="flex items-center gap-1 text-xl cursor-pointer font-bold"
            onClick={() => {
              setaddNote(true);
            }}
          >
            <IoMdAddCircle className="text-4xl" />
            Add Note
          </span>
          <span className="flex items-center gap-1 text-xl cursor-pointer">
            <IoMdPerson className="text-4xl" />
            <span className="uppercase font-bold">j.assoul</span>
          </span>
        </div>
      </div>
      <div className="bg-zinc-200 w-5/6 p-5 flex flex-col gap-4">
        <div className="flex justify-between bg-white p-5 rounded items-center">
          <h1 className="text-xl font-bold">My Notes</h1>
          <button
            className="bg-black text-white p-2 w-[100px] rounded"
            onClick={() => {
              setisAuth(false);
              setisloginpage(true);
            }}
          >
            Logout
          </button>
        </div>
        <div className="bg-white p-5 rounded">
          <h1 className="text-xl font-bold">Today&aposs Notes</h1>
          <br></br>
          <div className="flex flex-col gap-4">
            <Notecard setaddNote={setaddNote} setdeleteNote={setdeleteNote} />
          </div>
        </div>
        <div className="bg-white p-5 rounded">
          <h1 className="text-xl font-bold">Tomorrow&aposs Notes</h1>
          <br></br>
          <div className="flex flex-col gap-4">
            <Notecard setaddNote={setaddNote} setdeleteNote={setdeleteNote} />
          </div>
        </div>
        <div className="bg-white p-5 rounded">
          <h1 className="text-xl font-bold">This Week&aposs Notes</h1>
          <br></br>
          <div className="flex flex-col gap-4">
            <Notecard setaddNote={setaddNote} setdeleteNote={setdeleteNote} />
          </div>
        </div>
      </div>
      {addNote ? <Addnote setaddNote={setaddNote} /> : null}
      {deleteNote ? <Deletenote setdeleteNote={setdeleteNote} /> : null}
    </div>
  );
}

export default Dashboard;
