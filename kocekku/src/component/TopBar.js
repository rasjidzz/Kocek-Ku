import React from "react";

class TopBar extends React.Component {
  render() {
    return (
      <div className="w-full h-[68px] bg-white border-b-[1.5px] border-[#DFE8F6] flex flex-row justify-between">
        <div className="border-[#DFE8F6] w-[300px] h-full border-r-[1.5px] flex basis-[20%]">
          <div className="m-auto text-[#192252]">Wednesdey, 29 des 2021</div>
        </div>
        <div className="div my-auto ml-6 basis-[60%]">logo</div>
        <div className="flex my-auto gap-5 mx-auto">
          <div className="my-auto">logo</div>
          <div className="my-auto">
            logo
            <img src="" alt="" />
          </div>
          <div className="flex flex-col text-sm">
            <div>Zaky</div>
            <div>@zaky</div>
          </div>
          <div className="my-auto">
            <button button="">logo</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
