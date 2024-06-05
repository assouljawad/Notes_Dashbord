import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { IoMdClose } from "react-icons/io";



function Addnote() {
  return (
    <div>
        <div>
            <div>
            <FaRegTrashAlt />
            <MdEditDocument />
            </div>
            <div>
            <IoMdClose />
            </div>
        </div>

    </div>
  )
}

export default Addnote