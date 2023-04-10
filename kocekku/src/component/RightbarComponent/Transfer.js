import React from "react";
import { NumericFormat } from "react-number-format";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiDelete } from "react-icons/ti";

class Transfer extends React.Component {
  render() {
    return (
      <div className="w-[350px]">
        <hr className="mt-4" />
        <div className="my-4 font-medium text-base">Quick Transfer</div>
        <div className="my-2 text-sm text-[#8a95a9]">Send to</div>
        <div className="flex flex-col gap-2 align-middle">
          <div className="drop-shadow-xl bg-white rounded-lg mt-2">
            <div className="flex flex-row my-6 mx-6 justify-between">
              <div className="flex flex-row gap-4">
                <div className="my-auto text-[40px]">
                  <IoPersonCircleSharp />
                </div>
                <div className="my-auto text-sm">
                  <div>Muhammad Zaky</div>
                  <div className="font-normal mt-1 text-[#8a95a9] text-xs">
                    @Zaky
                  </div>
                </div>
              </div>
              <div className="my-auto">
                <button className="text-2xl">
                  <IoMdArrowDropdown />
                </button>
              </div>
            </div>
          </div>
          <div className="drop-shadow-xl w-[100%] mt-2 bg-white rounded-lg">
            <div className="p-4">
              <div className="text-sm text-[#8a95a9]">Total ammount</div>
              <div className="flex flex-row">
                <div className="flex flex-row">
                  <div className="my-auto text-sm">Rp</div>
                  <div>
                    <input
                      className="p-2 outline-none font-medium text-2xl w-[80%] text-gray-500 "
                      placeholder="0"
                      type="number"
                    />
                  </div>
                </div>
                <div hidden className="my-auto">
                  <TiDelete />
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="mt-[10px]">
              <textarea
                className="block resize-none p-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                name=""
                id=""
                cols="39"
                rows="2"
                placeholder="Send Note"
              ></textarea>
            </div>
          </div>
          <div className="bg-[#6245D5] p-5 rounded-xl mt-4">
            <div className="text-center text-white font-semibold">
              Send Money
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Transfer;
