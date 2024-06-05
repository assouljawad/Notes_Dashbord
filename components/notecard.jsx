import React from "react";
import { CiStickyNote } from "react-icons/ci";

function Notecard() {
  return (
    <div className="flex gap-2 items-center justify-between">
      <div className="flex gap-2 items-center">
        <CiStickyNote className="text-xl" />
        <p className="text-xl font-bold">Metting with client</p>
      </div>
      <p className="font-bold">Shopping List</p>
      <button className="bg-black text-white p-2 w-[100px] rounded">
        Veiw
      </button>
      <button className="bg-black text-white p-2 w-[100px] rounded">
        Edit
      </button>
      <button className="bg-black text-white p-2 w-[100px] rounded">
        Delete
      </button>
    </div>
  );
}

export default Notecard;
