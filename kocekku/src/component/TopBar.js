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
      <div className="border-[#DFE8F6] w-[300px] justify-center gap-5 h-full border-r-[1.5px] flex flex-row basis-[20%]">
        <div className="my-auto justify-center font-medium flex flex-col text-sm text-[#192252]">
          <div className="self-end">{time.toLocaleTimeString()}</div>
          <div>{date}</div>
        </div>
        <div className="my-auto text-xl text-[#192252]">
          <IoCalendar />
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
                ? "w-44 z-10 cursor-pointer absolute flex flex-row active:bg-[#eaeaea] justify-center gap-3 border-2 right-0 p-2 bg-white"
                : "hidden "
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
