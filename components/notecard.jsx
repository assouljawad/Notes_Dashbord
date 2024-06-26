import React from "react";
import { CiStickyNote } from "react-icons/ci";

function Notecard({ setaddNote, setdeleteNote, note }) {
  return (
    <div className="flex gap-2 items-center justify-between">
      <div className="flex gap-2 items-center">
        <CiStickyNote className="text-xl" />
        <p className="font-bold">
          {note.note}
        </p>
      </div>
      <p className="font-bold">{note.title}</p>
      <button
        className="bg-black text-white p-2 w-[100px] rounded"
        onClick={() => {
          setaddNote(true);
        }}
      >
        Edit
      </button>
      <button
        className="bg-black text-white p-2 w-[100px] rounded"
        onClick={() => {
          setdeleteNote(true);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Notecard;
