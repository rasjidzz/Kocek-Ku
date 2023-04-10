import React from "react";

import { TbBellFilled } from "react-icons/tb";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { IoCalendar } from "react-icons/io5";

class TopBar extends React.Component {
  render() {
    return (
      <div className="w-full h-[68px] bg-white border-b-[1.5px] border-[#DFE8F6] flex flex-row justify-between">
        <div className="border-[#DFE8F6] w-[300px] justify-center gap-2 h-full border-r-[1.5px] flex flex-row basis-[20%]">
          <div className="my-auto text-xl text-[#192252]">
            <IoCalendar />
          </div>
          <div className="my-auto font-medium text-sm text-[#192252]">
            Wednesdey, 29 des 2021
          </div>
        </div>
        <div className="div my-auto ml-6 basis-[60%] text-3xl text-[#848fac]">
          <RiSearch2Line />
        </div>
        <div className="flex my-auto gap-3 mx-auto">
          <div className="my-auto text-2xl text-[#192252]">
            {" "}
            <TbBellFilled />
          </div>
          <div className="my-auto text-[50px]">
            <IoPersonCircleSharp />
          </div>
          <div className="flex flex-col my-auto">
            <div className="text-base inline-flex whitespace-nowrap text-[#192252]">
              Muhammad Zaky Fathurahim
            </div>
            <div className="text-[#848fac] text-sm">@zaky</div>
          </div>
          <div className="my-auto mr-5 text-xl">
            <button button="">
              <IoMdArrowDropdown />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
