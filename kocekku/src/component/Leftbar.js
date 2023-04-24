import React from "react";
import { RiDashboardFill, RiFileListFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

class Leftbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0, // indeks navigasi yang aktif saat ini
      navList: [
        { logo: <RiDashboardFill />, name: "Dashboard" },
        { logo: <RiFileListFill />, name: "Transaction" },
        { logo: <AiFillMessage />, name: "Message" },
        { logo: <FaWallet />, name: "Invoice" },
        { logo: <BsPersonFill />, name: "Account" },
        { logo: <IoSettingsSharp />, name: "Setting" },
      ],
    };
  }

  handleNavClick = (index) => {
    this.setState({ activeIndex: index });
    this.props.onChangeActiveIndex(index); // kirim nilai index ke parent component
  };

  render() {
    return (
      <div className="basis-[15%] align-middle border-r-[1.5px] border-[#DFE8F6]">
        <div className="flex flex-row h-[68px] justify-center">
          <img
            className="w-10 h-10 my-auto"
            src={require("../Asset/ewallet&credit/koceku.png")}
            alt=""
          />
          <div className="my-auto font-bold text-xl text-[#6245D5]">Koceku</div>
        </div>
        <div className="grid grid-cols 2xl:mt-8 xl:mt-6 gap-5 mx-4">
          {this.state.navList.map((nav, index) => (
            <div
              key={index}
              className={`flex gap-3 flex-row cursor-pointer w-[20vh] 2xl:p-6 xl:py-4 xl:px-3 lg:p-2 justify-start rounded-md ${
                this.state.activeIndex === index
                  ? "bg-[#6245D5] text-white"
                  : "text-[#A69FAD] group hover:bg-[#6245D5] hover:text-white"
              }`}
              onClick={() => this.handleNavClick(index)}
            >
              <div className="my-auto xl:text-2xl">{nav.logo}</div>
              <div className="my-auto xl:block xl:text-base">{nav.name}</div>
            </div>
          ))}
        </div>
        <div className="xl:mt-30 hidden w-[80%] mx-auto h-[13rem] bg-[#FC9269] hover:bg-[#ff8a5c] rounded-2xl"></div>
      </div>
    );
  }
}

export default Leftbar;
