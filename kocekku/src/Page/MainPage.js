import Leftbar from "../component/Leftbar";
import TopBar from "../component/TopBar";
import RightBar from "../component/RightBar";
import DashBoard from "../component/Dashboard";
import React from "react";
import Transaction from "../component/Transaction";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  onChangeActiveIndex = (index) => {
    this.setState({ activeIndex: index });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <div className="flex flex-row font-poppins text-base">
        <Leftbar onChangeActiveIndex={this.onChangeActiveIndex} />
        <div className="basis-[100%] bg-[#F8F8F8]">
          <div className="flex-col flex">
            <TopBar />
            <div className="basis-[80%]">
              <div className="flex flex-row justify-between">
                <div className="basis-[75%] w-36">
                  {activeIndex === 0 && <DashBoard />}
                  {activeIndex === 1 && <Transaction />}
                </div>
                <RightBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
