import React from "react";
import Transfer from "./RightbarComponent/Transfer";
import Pay from "./RightbarComponent/Pay";
import { TbArrowMoveUp, TbArrowMoveDown } from "react-icons/tb";
import { BsPlusCircleFill } from "react-icons/bs";
import { CgMoreAlt } from "react-icons/cg";
import { useState } from "react";
import { MdPayments } from "react-icons/md";
import Topup from "./RightbarComponent/Topup";

function RightBar() {
  const [activeButton, setActiveButton] = useState("transfer");

  const handleActiveButton = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="basis-[25%] py-6 px-5 bg-white h-[855px]">
      <div className="flex flex-row justify-start ">
        <div className="ml-4 my-auto">My Card</div>
      </div>
      <div className="h-44 w-[100%] mt-5 rounded-2xl mx-auto bg-[#FC9269]">
        <div className="p-6 text-white">
          <div>My Balance</div>
          <div>$64,200.00</div>
          <div className="mt-6">Muhammad Zaky</div>
          <div className="flex flex-row justify-between">
            <div className="">1302-2213-0670-2210</div>
            <div className="">Visa</div>
          </div>
        </div>
        {/*Tombol Fungsi*/}
        <div className="flex mt-6 flex-row justify-center gap-6 font-normal">
          <div className="">
            <div
              className={`group cursor-pointer w-[70px] border-2 ${
                activeButton === "transfer"
                  ? "w-[70px] border-2  h-[70px] flex justify-center rounded-lg shadow-lg shadow-indigo-200 bg-[#6245D5] border-[#6245D5] text-white"
                  : "border-[#DFE8F6] hover:shadow-xl hover:shadow-indigo-200 hover:bg-[#6245D5]  hover:text-white  transition ease-in-out delay-75 hover:border-[#6245D5] "
              } h-[70px] flex justify-center rounded-lg`}
              onClick={() => handleActiveButton("transfer")}
            >
              <div
                className={`my-auto text-3xl
                }`}
              >
                <TbArrowMoveUp />
              </div>
            </div>
            <div
              className={`text-center mt-3 text-sm  ease-in-out delay-75 ${
                activeButton === "transfer" ? "" : "text-[#8a95a9]"
              }`}
              onClick={() => handleActiveButton("transfer")}
            >
              Transfer
            </div>
          </div>
          <div className="">
            <div
              className={`group cursor-pointer w-[70px] border-2 ${
                activeButton === "pay"
                  ? "w-[70px] border-2  h-[70px] flex justify-center rounded-lg shadow-lg shadow-indigo-200 bg-[#6245D5] border-[#6245D5] text-white"
                  : "border-[#DFE8F6] hover:shadow-xl hover:shadow-indigo-200 hover:bg-[#6245D5]  hover:text-white  transition ease-in-out delay-75 hover:border-[#6245D5] "
              } h-[70px] flex justify-center rounded-lg`}
              onClick={() => {
                handleActiveButton("pay");
              }}
            >
              <div className="my-auto text-3xl">
                <MdPayments />
              </div>
            </div>
            <div
              className={`text-center cursor-pointer mt-3 text-sm transition ease-in-out delay-75 ${
                activeButton === "pay" ? "" : " text-[#8a95a9]"
              }`}
              onClick={() => handleActiveButton("pay")}
            >
              Pay
            </div>
          </div>
          <div className="">
            <div
              className={`group cursor-pointer w-[70px] border-2 ${
                activeButton === "topup"
                  ? "w-[70px] border-2  h-[70px] flex justify-center rounded-lg shadow-lg shadow-indigo-200 bg-[#6245D5] border-[#6245D5] text-white"
                  : "border-[#DFE8F6] hover:shadow-xl hover:shadow-indigo-200 hover:bg-[#6245D5]  hover:text-white  transition ease-in-out delay-75 hover:border-[#6245D5] "
              } h-[70px] flex justify-center rounded-lg`}
              onClick={() => handleActiveButton("topup")}
            >
              <div
                className={`my-auto text-2xl
                }`}
              >
                <BsPlusCircleFill />
              </div>
            </div>
            <div
              className={`text-center mt-3 text-sm  ease-in-out delay-75 ${
                activeButton === "topup" ? "" : "text-[#8a95a9]"
              }`}
              onClick={() => handleActiveButton("topup")}
            >
              Top Up
            </div>
          </div>
          <div className="">
            <div
              className={`group cursor-pointer w-[70px] border-2 ${
                activeButton === "more"
                  ? "w-[70px] border-2  h-[70px] flex justify-center rounded-lg shadow-lg shadow-indigo-200 bg-[#6245D5] border-[#6245D5] text-white"
                  : "border-[#DFE8F6] hover:shadow-xl hover:shadow-indigo-200 hover:bg-[#6245D5]  hover:text-white  transition ease-in-out delay-75 hover:border-[#6245D5] "
              } h-[70px] flex justify-center rounded-lg`}
              onClick={() => handleActiveButton("more")}
            >
              <div
                className={`my-auto text-3xl
                }`}
              >
                <CgMoreAlt />
              </div>
            </div>
            <div
              className={`text-center mt-3 text-sm  ease-in-out delay-75 ${
                activeButton === "more" ? "" : "text-[#8a95a9]"
              }`}
              onClick={() => handleActiveButton("more")}
            >
              More
            </div>
          </div>
        </div>
        {/*Fungsinya sesuai tombol yang di klik, defaultnya transfer*/}
        <div className={` ${activeButton === "transfer" ? "" : "hidden"}`}>
          <Transfer />
        </div>
        <div className={` ${activeButton === "pay" ? "" : "hidden"}`}>
          <Pay />
        </div>
        <div className={` ${activeButton === "topup" ? "" : "hidden"}`}>
          <Topup />
        </div>
        <div className={` ${activeButton === "more" ? "" : "hidden"}`}>
          <Pay />
        </div>
      </div>
    </div>
  );
}

export default RightBar;
