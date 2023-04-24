import React, { useEffect, useState } from "react";

import { TbBellFilled } from "react-icons/tb";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { IoCalendar } from "react-icons/io5";
import { RiLogoutCircleRFill, RiLogoutCircleRLine } from "react-icons/ri";

export default function TopBar() {
  const [isActive, setActive] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const [date, setDate] = useState("");

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Function to generate the date
  function generateDate() {
    const dateNow = new Date();
    const newDate = `${weekday[dateNow.getDay()]} ${
      dateNow.getMonth() + 1
    }/${dateNow.getDate()}/${dateNow.getFullYear()}`;
    setDate(newDate);
  }

  // Run the function when the component mounts
  useEffect(() => {
    generateDate();
  }, []);

  // Run the function every second
  useEffect(() => {
    const interval = setInterval(() => {
      const timeNow = new Date();
      if (
        timeNow.getHours() === 0 &&
        timeNow.getMinutes() === 0 &&
        timeNow.getSeconds() === 0
      ) {
        generateDate();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[68px] bg-white border-b-[1.5px] border-[#DFE8F6] flex flex-row justify-between">
      <div className="xl:hidden flex sm:block basis-[10%] w-auto h-full border-r-[1.5px] border-[#DFE8F6]">
        <div className="flex items-center">
          <img
            className="w-15 h-15 my-auto"
            src={require("../Asset/ewallet&credit/koceku.png")}
            alt=""
          />
        </div>
      </div>
      <div className="border-[#DFE8F6] w-[300px] justify-center gap-5 h-full border-r-[1.5px] flex flex-row xl:basis-[30%] 2xl:basis-[20%] lg:basis-[50%]">
        <div className="my-auto justify-center font-medium flex flex-col 2xl:text-md text-[#192252]">
          <div className="self-end">{time.toLocaleTimeString()}</div>
          <div>{date}</div>
        </div>
        <div className="my-auto text-xl text-[#192252]">
          <IoCalendar />
        </div>
      </div>
      <div className="ml-6 gap-5 basis-[60%] flex flex-row text-3xl text-[#848fac]">
        <div className="my-auto cursor-pointer">
          <RiSearch2Line
            onClick={handleSearchClick}
            className={`text-[#848fac] transition-colors ${
              showSearch ? "text-black" : ""
            } delay-75`}
          />
        </div>
        <div className="my-auto text-sm">
          {showSearch && (
            <input
              type="text"
              className="border w-full border-gray-300 px-4 py-2 text-sm rounded-full ml-2 transition-all duration-500"
              placeholder="Search"
            />
          )}
        </div>
      </div>
      <div className="flex my-auto gap-3 mx-auto">
        <div className="my-auto text-2xl text-[#192252]">
          {" "}
          <TbBellFilled />
        </div>
        <div className="my-auto">
          <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
            <img
              className="rounded-full border-black border-2 w-10 h-10"
              src={require("../Asset/dokumenPP.png")}
              alt="PP"
            />
          </div>
        </div>
        <div className="flex flex-col my-auto">
          <div className="text-base inline-flex whitespace-nowrap text-[#192252]">
            Muhammad Zaky Fathurahim
          </div>
          <div className="text-[#848fac] text-sm">@zaky</div>
        </div>
        <div className="my-auto mr-5 text-xl relative">
          <button
            onClick={() => {
              setActive(!isActive);
            }}
            button=""
          >
            <IoMdArrowDropdown />
          </button>
          <div
            className={
              isActive
                ? "w-32 z-10 cursor-pointer absolute text-base font-medium flex flex-row active:bg-[#eaeaea] justify-center rounded gap-2 border-2 right-0 py-2 bg-white"
                : "hidden"
            }
          >
            <div className="my-auto">
              <RiLogoutCircleRFill />
            </div>
            <div>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}
