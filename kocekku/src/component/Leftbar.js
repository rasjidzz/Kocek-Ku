import React from "react";

class Leftbar extends React.Component {
  render() {
    return (
      <div className="basis-[15%] align-middle border-r-[1.5px] border-[#DFE8F6]">
        <div className="flex h-[68px]">
          <div className="my-auto mx-auto">logo</div>
        </div>
        <div className="grid grid-cols mt-8 gap-5 ml-4">
          <div className=" flex flex-row w-[20vh] py-4 px-4 rounded-md bg-[#6245D5] text-white">
            <div className="basis-5 pr-3">logo</div>
            <div className="">DashBoard</div>
          </div>
          <div className=" text-[#A69FAD] flex flex-row w-[20vh] py-4 px-4 rounded-md hover:bg-[#6245D5] hover:text-white">
            <div className="basis-5 pr-3">logo</div>
            <div className="">DashBoard</div>
          </div>
          <div className=" text-[#A69FAD] flex flex-row w-[20vh] py-4 px-4 rounded-md hover:bg-[#6245D5] hover:text-white">
            <div className="basis-5 pr-3">logo</div>
            <div className="">DashBoard</div>
          </div>
          <div className=" text-[#A69FAD] flex flex-row w-[20vh] py-4 px-4 rounded-md hover:bg-[#6245D5] hover:text-white">
            <div className="basis-5 pr-3">logo</div>
            <div className="">DashBoard</div>
          </div>
          <div className=" text-[#A69FAD] flex flex-row w-[20vh] py-4 px-4 rounded-md hover:bg-[#6245D5] hover:text-white">
            <div className="basis-5 pr-3">logo</div>
            <div className="">DashBoard</div>
          </div>
          <div className=" text-[#A69FAD] flex flex-row w-[20vh] py-4 px-4 rounded-md hover:bg-[#6245D5] hover:text-white">
            <div className="basis-5 pr-3">logo</div>
            <div className="">DashBoard</div>
          </div>
        </div>
        <div className="mt-40 w-[80%] mx-auto h-[13rem] bg-[#FC9269] hover:bg-[#ff8a5c] rounded-2xl"></div>
      </div>
    );
  }
}

export default Leftbar;
