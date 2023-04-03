import React from 'react'

class RightBar extends React.Component{
    render(){
        return  <div className="basis-[25%] bg-white max-h-full py-10 px-5">
        <div className="flex flex-row justify-between">
          <div className="ml-4">My Card</div>
          <div className="mr-4">change card</div>
        </div>
        <div className="h-48 w-[100%] mt-5 rounded-2xl mx-auto bg-[#FC9269]">
          <div className="w-[100%] p-6 text-white">
            <div>My Balance</div>
            <div>$64,200.00</div>
            <div className="mt-12">Muhammad Zaky</div>
            <div className="flex flex-row justify-between">
              <div className="">1302-2213-0670-2210</div>
              <div className="">Visa</div>
            </div>
          </div>
          <div className="flex mt-5 flex-row justify-between gap-7">
            <div className="">
              <div className="w-[74px] border-2  h-[74px] flex justify-center rounded-lg hover:drop-shadow-2xl bg-[#6245D5] border-[#6245D5] text-white">
                <div className="my-auto">logo</div>
              </div>
              <div className="text-center mt-2">Transfer</div>
            </div>
            <div className="">
              <div className="w-[74px] border-2 border-[#DFE8F6] h-[74px] flex justify-center rounded-lg hover:drop-shadow-2xl hover:bg-[#6245D5] hover:border-[#6245D5] hover:text-white">
                <div className="my-auto">logo</div>
              </div>
              <div className="text-center mt-2">Transfer</div>
            </div>
            <div className="">
              <div className="w-[74px] border-2 border-[#DFE8F6] h-[74px] flex justify-center rounded-lg hover:drop-shadow-2xl hover:bg-[#6245D5] hover:border-[#6245D5] hover:text-white">
                <div className="my-auto">logo</div>
              </div>
              <div className="text-center mt-2">Transfer</div>
            </div>
            <div className="">
              <div className="w-[74px] border-2 border-[#DFE8F6] h-[74px] flex justify-center rounded-lg hover:drop-shadow-2xl hover:bg-[#6245D5] hover:border-[#6245D5] hover:text-white">
                <div className="my-auto">logo</div>
              </div>
              <div className="text-center mt-2">Transfer</div>
            </div>
          </div>
        </div>
      </div>
    }
}

export default RightBar;