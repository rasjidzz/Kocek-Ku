import React from "react";

import { IoIosArrowForward } from "react-icons/io";

class DashBoard extends React.Component {
  render() {
    const Account = "udin";
    return (
      <div className="flex flex-col mx-auto gap-10 py-6 px-16">
        <div>Money Insight</div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-row gap-5 bg-white p-5 rounded-lg">
              <div className="flex flex-col gap-3">
                <div className="text-sm">Total Pemasukan</div>
                <div className="text-2xl font-medium">
                  {" "}
                  <span className="text-xs">Rp.</span> 26.000
                </div>
              </div>
              <div className="my-auto">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-col">
              <div>Total Pemasukan</div>
              <div>Rp.26.000.000.00</div>
            </div>
            <div>logo</div>
          </div>
          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-col">
              <div>Total Pemasukan</div>
              <div>Rp.26.000.000.00</div>
            </div>
            <div>logo</div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>Recent Activity</div>
          <div className="flex flex-row gap-2">
            <div>logo</div>
            <div>Filter</div>
          </div>
        </div>
        <div className="">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Account
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jumlah
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
                <td className="px-6 py-4 whitespace-nowrap">
                  john.doe@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Complete</td>
                <td className="px-6 py-4 whitespace-nowrap">...</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
                <td className="px-6 py-4 whitespace-nowrap">28</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  jane.doe@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Complete</td>
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
