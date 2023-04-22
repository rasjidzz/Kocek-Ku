import React from "react";
import { NumericFormat } from "react-number-format";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";

function Pay() {
  const [activeMerchant, setActiveMerchant] = useState("tokopedia");
  const [activeButton, setActiveButton] = useState(false);
  const [activeIcon, setActiveIcon] = useState(false);

  const handleClickMerchant = (merchant) => {
    setActiveMerchant(merchant);
  };

  return (
    <div className="w-full sm:w-[350px]">
      <hr className="mt-4" />
      <div className="my-4 font-medium text-base">Quick Pay</div>
      <div className="my-[14px] text-sm text-[#8a95a9]">Choose Merchant</div>
      <div className="flex flex-col gap-2 align-middle  relative">
        <div
          className={`drop-shadow-xl bg-white rounded-lg mt-2 ${
            activeMerchant === "tokopedia" ? "" : "hidden"
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
                    src={require("../../Asset/Merchant/tokopedia.png")}
                    width="50"
                    alt="tokopedia vector tokopedia raup transaksi triliun per bulan selama"
                  />
                </a>
              </div>
              <div className="my-auto text-base">
                <div>Tokopedia</div>
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
        <div
          className={`drop-shadow-xl bg-white rounded-lg mt-2 ${
            activeMerchant === "shopee" ? "" : "hidden"
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
                    className="rounded-full"
                    src={require("../../Asset/Merchant/shopee.png")}
                    width="50"
                    alt="tokopedia vector tokopedia raup transaksi triliun per bulan selama"
                  />
                </a>
              </div>
              <div className="my-auto text-base">
                <div>Shopee</div>
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
        <div
          className={`drop-shadow-xl bg-white rounded-lg mt-2 ${
            activeMerchant === "lazada" ? "" : "hidden"
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
                    className="rounded-full"
                    src={require("../../Asset/Merchant/lazada.png")}
                    width="50"
                    alt="tokopedia vector tokopedia raup transaksi triliun per bulan selama"
                  />
                </a>
              </div>
              <div className="my-auto text-base">
                <div>Lazada</div>
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
        <div
          className={`drop-shadow-xl bg-white rounded-lg mt-2 ${
            activeMerchant === "bukalapak" ? "" : "hidden"
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
                    className="rounded-full"
                    src={require("../../Asset/Merchant/bukalapak.png")}
                    width="50"
                    alt="tokopedia vector tokopedia raup transaksi triliun per bulan selama"
                  />
                </a>
              </div>
              <div className="my-auto text-base">
                <div>Bukalapak</div>
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
        <div
          className={`drop-shadow-xl bg-white rounded-lg mt-2 ${
            activeMerchant === "blibli" ? "" : "hidden"
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
                    className="rounded-full"
                    src={require("../../Asset/Merchant/blibli.png")}
                    width="50"
                    alt="tokopedia vector tokopedia raup transaksi triliun per bulan selama"
                  />
                </a>
              </div>
              <div className="my-auto text-base">
                <div>Blibli</div>
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
        <div
          className={` ${
            activeButton === true
              ? "right-0 w-full absolute top-[90px] z-10 rounded-lg cursor-pointer shadow-md"
              : "hidden"
          }`}
        >
          <div className="flex flex-col overflow-y-scroll h-56 rounded-lg bg-white">
            <div className="flex flex-col ">
              <div
                className={`hover:bg-[#e4e4e4] ${
                  activeMerchant === "tokopedia" ? "hidden" : ""
                }`}
                onClick={() => {
                  handleClickMerchant("tokopedia");
                  setActiveButton(!activeButton);
                }}
              >
                <div className="flex flex-row my-[14px] mx-6 justify-between">
                  <div className="flex flex-row gap-4">
                    <div className="my-auto text-[40px]">
                      <a
                        href="https://www.tokopedia.com/"
                        title="Image from freepnglogos.com"
                      >
                        <img
                          className="rounded-full"
                          src={require("../../Asset/Merchant/tokopedia.png")}
                          width="50"
                          alt="tokopedia vector tokopedia raup transaksi triliun per bulan selama"
                        />
                      </a>
                    </div>
                    <div className="my-auto text-base">
                      <div>Tokopedia</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`hover:bg-[#e4e4e4] ${
                  activeMerchant === "shopee" ? "hidden" : ""
                }`}
                onClick={() => {
                  handleClickMerchant("shopee");
                  setActiveButton(!activeButton);
                }}
              >
                <div className="flex flex-row my-[14px] mx-6 justify-between">
                  <div className="flex flex-row gap-4">
                    <div className="my-auto text-[40px]">
                      <a
                        href="https://www.tokopedia.com/"
                        title="Image from freepnglogos.com"
                      >
                        <img
                          className="rounded-full"
                          src={require("../../Asset/Merchant/shopee.png")}
                          width="50"
                          alt="tokopedia vector tokopedia raup transaksi triliun per bulan selama"
                        />
                      </a>
                    </div>
                    <div className="my-auto text-base">
                      <div>Shopee</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`hover:bg-[#e4e4e4] ${
                  activeMerchant === "lazada" ? "hidden" : ""
                }`}
                onClick={() => {
                  handleClickMerchant("lazada");
                  setActiveButton(!activeButton);
                }}
              >
                <div className="flex flex-row my-[14px] mx-6 justify-between">
                  <div className="flex flex-row gap-4">
                    <div className="my-auto text-[40px]">
                      <a
                        href="https://www.tokopedia.com/"
                        title="Image from freepnglogos.com"
                      >
                        <img
                          className="rounded-full"
                          src={require("../../Asset/Merchant/lazada.png")}
                          width="50"
                          alt="tokopedia vector tokopedia raup transaksi triliun per bulan selama"
                        />
                      </a>
                    </div>
                    <div className="my-auto text-base">
                      <div>Lazada</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`hover:bg-[#e4e4e4] ${
                  activeMerchant === "bukalapak" ? "hidden" : ""
                }`}
                onClick={() => {
                  handleClickMerchant("bukalapak");
                  setActiveButton(!activeButton);
                }}
              >
                <div className="flex flex-row my-[14px] mx-6 justify-between">
                  <div className="flex flex-row gap-4">
                    <div className="my-auto text-[40px]">
                      <a
                        href="https://www.tokopedia.com/"
                        title="Image from freepnglogos.com"
                      >
                        <img
                          className="rounded-full"
                          src={require("../../Asset/Merchant/bukalapak.png")}
                          width="50"
                          alt="tokopedia vector tokopedia raup transaksi triliun per bulan selama"
                        />
                      </a>
                    </div>
                    <div className="my-auto text-base">
                      <div>Bukalapak</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`hover:bg-[#e4e4e4] ${
                  activeMerchant === "blibli" ? "hidden" : ""
                }`}
                onClick={() => {
                  handleClickMerchant("blibli");
                  setActiveButton(!activeButton);
                }}
              >
                <div className="flex flex-row my-[14px] mx-6 justify-between">
                  <div className="flex flex-row gap-4">
                    <div className="my-auto text-[40px]">
                      <a
                        href="https://www.tokopedia.com/"
                        title="Image from freepnglogos.com"
                      >
                        <img
                          className="rounded-full"
                          src={require("../../Asset/Merchant/blibli.png")}
                          width="50"
                          alt="tokopedia vector tokopedia raup transaksi triliun per bulan selama"
                        />
                      </a>
                    </div>
                    <div className="my-auto text-base">
                      <div>Blibli</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-shadow-xl w-full sm:w-[350px] mt-2 bg-white rounded-lg">
          <div className="p-4">
            <div className="text-sm text-[#8a95a9]">Enter the payment code</div>
            <div className="flex flex-row">
              <div className="flex flex-row">
                <div>
                  <input
                    id="inputTf"
                    className="outline-none mt-1 font-medium text-2xl w-full sm:w-[80%] text-gray-500 "
                    placeholder="..."
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
          <div className="text-center text-white font-semibold">Pay now</div>
        </div>
      </div>
    </div>
  );
}

export default Pay;
