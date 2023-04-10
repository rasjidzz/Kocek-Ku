import React from "react";
import Transfer from "./RightbarComponent/Transfer";
import { TbArrowMoveUp, TbArrowMoveDown } from "react-icons/tb";
import { BsPlusCircleFill } from "react-icons/bs";
import { CgMoreAlt } from "react-icons/cg";


class RightBar extends React.Component {
  render() {
    return (
      <div className="basis-[25%] py-6 px-5 bg-white h-[855px]">
        <div className="flex flex-row justify-between">
          <div className="ml-4 my-auto">My Card</div>
          <div className="mr-4 text-sm my-auto">change card</div>
        </div>
        <div className="h-44 w-[100%] mt-5 rounded-2xl mx-auto bg-[#FC9269]">
          <div className="w-[100%] p-6 text-white">
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
              <div className="w-[70px] border-2  h-[70px] flex justify-center rounded-lg shadow-lg shadow-indigo-200 bg-[#6245D5] border-[#6245D5] text-white">
                <div className="my-auto text-3xl">
                  <TbArrowMoveUp />
                </div>
              </div>
              <div className="text-center mt-3 text-sm ">Transfer</div>
            </div>
            <div className="">
              <div className=" group w-[70px] active:shadow-indigo-200 active:bg-[#6245D5] active:border-[#6245D5] active:text-white border-2 border-[#DFE8F6] h-[70px] flex justify-center rounded-lg hover:shadow-xl hover:shadow-indigo-200 hover:bg-[#6245D5] hover:border-[#6245D5] hover:text-white">
                <div className="my-auto text-3xl text-[#192252] group-hover:text-white">
                  <TbArrowMoveDown />
                </div>
              </div>
              <div className="text-center  mt-3 text-sm text-[#8a95a9]">
                Request
              </div>
            </div>
            <div className="">
              <div className="w-[70px] group border-2 border-[#DFE8F6] h-[70px] flex justify-center rounded-lg hover:shadow-xl hover:shadow-indigo-200 hover:bg-[#6245D5] hover:border-[#6245D5] hover:text-white">
                <div className="my-auto  text-[#192252] text-2xl group-hover:text-white">
                  <BsPlusCircleFill />
                </div>
              </div>
              <div className="text-center mt-3 text-sm text-[#8a95a9]">
                Top Up
              </div>
            </div>
            <div className="">
              <div className="w-[70px] border-2 group border-[#DFE8F6] h-[70px] flex justify-center rounded-lg hover:shadow-xl hover:shadow-indigo-200 hover:bg-[#6245D5] hover:border-[#6245D5] hover:text-white">
                <div className="my-auto text-[#192252] text-3xl group-hover:text-white ">
                  <CgMoreAlt />
                </div>
              </div>
              <div className="text-center mt-3 text-sm text-[#8a95a9]">
                More
              </div>
            </div>
          </div>
          {/*Fungsinya*/}
          <Transfer />
        </div>
      </div>
    );
  }
}

export default RightBar;
