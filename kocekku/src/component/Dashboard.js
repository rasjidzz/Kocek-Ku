import React from "react";

import { IoIosArrowForward } from "react-icons/io";

import { AiFillFilter } from "react-icons/ai";

class DashBoard extends React.Component {
  render() {
    return (
      <div className="flex flex-col mx-auto gap-10 py-6 px-16">
        <div className="text-[#192252] font-medium text-lg mx-6">Money Insight</div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-row gap-20 bg-white p-6 rounded-lg">
              <div className="flex flex-col gap-3">
                <div className="text-base text-[#848fac]">Total Income</div>
                <div className="text-2xl font-medium text-[#192252]">
                  {" "}
                  <span className="text-base text-[#192252]">Rp.</span> 126.000
                </div>
              </div>
              <div className="my-auto text-[#848fac]">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-row gap-20 bg-white p-6 rounded-lg">
              <div className="flex flex-col gap-3">
                <div className="text-base text-[#848fac]">Total Expense</div>
                <div className="text-2xl font-medium text-[#192252]">
                  {" "}
                  <span className="text-base text-[#192252]">Rp.</span> 226.000
                </div>
              </div>
              <div className="my-auto text-[#848fac]">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-row gap-20 bg-white p-6 rounded-lg">
              <div className="flex flex-col gap-3">
                <div className="text-base text-[#848fac]">Total Saved</div>
                <div className="text-2xl font-medium text-[#192252]">
                  {" "}
                  <span className="text-base text-[#192252]">Rp.</span> 126.000
                </div>
              </div>
              <div className="my-auto text-[#848fac]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mx-6 ">
          <div className="text-[#192252] font-medium text-lg">
            Recent Activity
          </div>
          <div className="border-spacing-16 border-[#cbcdd6] border-2 p-2 px-4 rounded-xl">
            <div className="flex flex-row gap-2">
              <div className="my-auto text-xl">
                <AiFillFilter />
              </div>
              <div className="">Filter</div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl overflow-x">
          <table className="min-w-full divide-y divide-gray-200 ">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Account
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ammount
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Stevent</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date().toLocaleString() + ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">10.000</td>
                <td className="px-6 py-4 whitespace-nowrap">Expenses</td>
                <td className="px-6 py-4 whitespace-nowrap">...</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Japran</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date().toLocaleString() + ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">20.000</td>
                <td className="px-6 py-4 whitespace-nowrap">Income</td>
                <td className="px-6 py-4 whitespace-nowrap">...</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Japran</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date().toLocaleString() + ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">20.000</td>
                <td className="px-6 py-4 whitespace-nowrap">Income</td>
                <td className="px-6 py-4 whitespace-nowrap">...</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Japran</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date().toLocaleString() + ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">20.000</td>
                <td className="px-6 py-4 whitespace-nowrap">Income</td>
                <td className="px-6 py-4 whitespace-nowrap">...</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Japran</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date().toLocaleString() + ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">20.000</td>
                <td className="px-6 py-4 whitespace-nowrap">Income</td>
                <td className="px-6 py-4 whitespace-nowrap">...</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Japran</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date().toLocaleString() + ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">20.000</td>
                <td className="px-6 py-4 whitespace-nowrap">Income</td>
                <td className="px-6 py-4 whitespace-nowrap">...</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Japran</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date().toLocaleString() + ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">20.000</td>
                <td className="px-6 py-4 whitespace-nowrap">Income</td>
                <td className="px-6 py-4 whitespace-nowrap">...</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Japran</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date().toLocaleString() + ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">20.000</td>
                <td className="px-6 py-4 whitespace-nowrap">Income</td>
                <td className="px-6 py-4 whitespace-nowrap">...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DashBoard;
