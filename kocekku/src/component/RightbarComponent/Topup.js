import React from "react";
import { NumericFormat } from "react-number-format";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";

function Topup() {
  const [activeWallet, setActiveWallet] = useState(3);
  const [activeButton, setActiveButton] = useState(false);

  const listWallet = ["Dana", "Gopay", "Shopeepay", "OVO", "Telkomsel", "Tri"];
  const logo = [
    require("../../Asset/ewallet&credit/dana.png"),
    require("../../Asset/ewallet&credit/gopay.png"),
    require("../../Asset/ewallet&credit/shopeepay.png"),
    require("../../Asset/ewallet&credit/ovo.png"),
    require("../../Asset/ewallet&credit/telkomsel.png"),
    require("../../Asset/ewallet&credit/tri.png"),
  ];

  const handleClickWallet = (index) => {
    setActiveWallet(index);
  };

  return (
    <div className="w-full sm:w-[350px]">
      <hr className="mt-4" />
      <div className="my-4 font-medium text-base">Quick Topup</div>
      <div className="my-[14px] text-sm text-[#8a95a9]">
        Choose E-Wallet or Credit
      </div>
      <div className="flex flex-col gap-2 align-middle  relative">
        {listWallet.map((wallet, index) => (
          <div
            key={index}
            className={`drop-shadow-xl bg-white rounded-lg mt-2 ${
              activeWallet === index ? "" : "hidden"
            }`}
          >
            <div className="flex flex-row my-[14px] mx-6 justify-between">
              <div className="flex flex-row gap-4">
                <div className="my-auto text-[40px]">
                  <a
                    href="https://www.tokopedia.com/"
                    title="Image from freepnglogos.com"
                  >
                    <img
                      src={logo[activeWallet]}
                      width="50"
                      alt="tokopedia vector tokopedia raup transaksi triliun per bulan selama"
                    />
                  </a>
                </div>
                <div className="my-auto text-base">
                  <div>{wallet}</div>
                </div>
              </div>
              <div className="my-auto transition ease-in-out delay-75">
                <button
                  onClick={() => setActiveButton(!activeButton)}
                  className="text-2xl "
                >
                  {activeButton ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </button>
              </div>
            </div>
          </div>
        ))}
        <div
          className={` ${
            activeButton === true
              ? "right-0 w-full absolute top-[90px] z-10 rounded-lg cursor-pointer shadow-md"
              : "hidden"
          }`}
        >
          <div className="flex flex-col overflow-y-scroll h-56 rounded-lg  bg-white ">
            {listWallet.map((wallet, index) => (
              <div
                key={index}
                className={`hover:bg-[#e4e4e4] ${
                  activeWallet === index ? "hidden" : ""
                }`}
                onClick={() => {
                  handleClickWallet(index);
                  setActiveButton(!activeButton);
                }}
              >
                <div className="flex flex-row my-[14px] mx-6 justify-between">
                  <div className="flex flex-row gap-4 ">
                    <div className="my-auto text-[40px]">
                      <a
                        href="https://www.tokopedia.com/"
                        title="Image from freepnglogos.com"
                      >
                        <img
                          className="rounded-full"
                          src={logo[index]}
                          width="50"
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div className="my-auto text-base">
                      <div>{wallet}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="drop-shadow-xl w-full sm:w-[350px] mt-2 bg-white rounded-lg">
          <div className="p-4">
            <div hidden className="text-sm text-[#8a95a9]">
              Enter phone number
            </div>
            <div className="flex flex-row mt-1">
              <div className="flex flex-col">
                <label className="text-sm text-[#8a95a9]" htmlFor="">
                  Enter phone number
                </label>
                <div>
                  <input
                    id="inputTf"
                    className="outline-none mt-1 font-medium text-xl text-gray-500 "
                    placeholder="08XXXXXXXXXX"
                  />
                </div>
              </div>
              <div hidden className="my-auto">
                <TiDelete />
              </div>
            </div>
          </div>
        </div>
        <div className="drop-shadow-xl w-full md:w-[350px] mt-2 bg-white rounded-lg">
          <div className="p-4">
            <div className="text-sm text-[#8a95a9]">Total amount</div>
            <div className="flex flex-row">
              <div className="flex flex-row">
                <div className="my-auto text-sm">Rp</div>
                <div>
                  <NumericFormat
                    id="inputTf"
                    className="p-2 outline-none font-medium text-2xl w-full md:w-[80%] text-gray-500"
                    placeholder="10,000"
                    allowLeadingZeros
                    thousandSeparator=","
                  />
                </div>
              </div>
              <div hidden className="my-auto">
                <TiDelete />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#6245D5] cursor-pointer active:bg-[#7859f4] p-5 rounded-xl mt-2 hover:bg-[#704ff5]">
          <div className="text-center text-white font-semibold">Top up now</div>
        </div>
      </div>
    </div>
  );
}

export default Topup;
