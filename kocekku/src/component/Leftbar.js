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
        <div className="flex h-[68px]">
          <div className="my-auto mx-auto font-bold text-xl text-[#6245D5]">
            Koceku
          </div>
        </div>
        <div className="grid grid-cols mt-8 gap-5 ml-4">
          {this.state.navList.map((nav, index) => (
            <div
              key={index}
              className={`flex flex-row cursor-pointer w-[20vh] py-4 px-4 rounded-md ${
                this.state.activeIndex === index
                  ? "bg-[#6245D5] text-white"
                  : "text-[#A69FAD] group hover:bg-[#6245D5] hover:text-white"
              }`}
              onClick={() => this.handleNavClick(index)}
            >
              <div className="basis-5 pr-3 my-auto text-2xl">{nav.logo}</div>
              <div className="">{nav.name}</div>
            </div>
          ))}
        </div>
        <div className="mt-44 w-[80%] mx-auto h-[13rem] bg-[#FC9269] hover:bg-[#ff8a5c] rounded-2xl"></div>
      </div>
    );
  }
}

export default Leftbar;
