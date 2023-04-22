import React from "react";

import { RiDashboardFill, RiFileListFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

class Leftbar extends React.Component {
  render() {
    return (
      <div className="basis-[15%] align-middle border-r-[1.5px] border-[#DFE8F6]">
        <div className="flex h-[68px]">
          <div className="my-auto mx-auto font-bold text-xl text-[#6245D5]">
            Koceku
          </div>
        </div>
        <div className="grid grid-cols mt-8 gap-5 ml-4">
          <div className=" flex flex-row w-[20vh] py-4 px-4 rounded-md bg-[#6245D5] text-white">
            <div className="basis-5 pr-3 my-auto text-2xl">
              <RiDashboardFill />
            </div>
            <div className="">DashBoard</div>
          </div>
          <div className=" text-[#A69FAD] flex flex-row w-[20vh] py-4 group px-4 rounded-md hover:bg-[#6245D5] hover:text-white">
            <div className="basis-5 pr-3 my-auto text-2xl text-[#c5d0e6] group-hover:text-white ">
              <RiFileListFill />
            </div>
            <div className="">Transaction</div>
          </div>
          <div className=" text-[#A69FAD] flex flex-row w-[20vh] py-4 px-4 group rounded-md hover:bg-[#6245D5] hover:text-white">
            <div className="basis-5 pr-3 my-auto text-2xl text-[#c5d0e6] group-hover:text-white ">
              <AiFillMessage />
            </div>
            <div className="">Message</div>
          </div>
          <div className=" text-[#A69FAD] group flex flex-row w-[20vh] py-4 px-4 rounded-md hover:bg-[#6245D5] hover:text-white">
            <div className="basis-5 pr-3 my-auto text-2xl text-[#c5d0e6] group-hover:text-white ">
              <FaWallet />
            </div>
            <div className="">Invoice</div>
          </div>
          <div className=" text-[#A69FAD] group flex flex-row w-[20vh] py-4 px-4 rounded-md hover:bg-[#6245D5] hover:text-white">
            <div className="basis-5 pr-3 my-auto text-2xl text-[#c5d0e6] group-hover:text-white">
              <BsPersonFill />
            </div>
            <div className="">Account</div>
          </div>
          <div className=" text-[#A69FAD] group flex flex-row w-[20vh] py-4 px-4 rounded-md hover:bg-[#6245D5] hover:text-white">
            <div className="basis-5 pr-3 my-auto text-2xl text-[#c5d0e6] group-hover:text-white">
              <IoSettingsSharp />
            </div>
            <div className="">Setting</div>
          </div>
        </div>
        <div className="mt-44 w-[80%] mx-auto h-[13rem] bg-[#FC9269] hover:bg-[#ff8a5c] rounded-2xl"></div>
      </div>
    );
  }
}

export default Leftbar;
