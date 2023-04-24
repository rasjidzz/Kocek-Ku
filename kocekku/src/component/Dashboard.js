import React from "react";

import { IoIosArrowForward } from "react-icons/io";

import { AiFillFilter } from "react-icons/ai";

import Transaction from "./Transaction";

const logoLoc = [
  { key: "dana", value: require("../Asset/ewallet&credit/dana.png") },
  { key: "gopay", value: require("../Asset/ewallet&credit/gopay.png") },
  {
    key: "shopeepay",
    value: require("../Asset/ewallet&credit/shopeepay.png"),
  },
  { key: "ovo", value: require("../Asset/ewallet&credit/ovo.png") },
  {
    key: "telkomsel",
    value: require("../Asset/ewallet&credit/telkomsel.png"),
  },
  { key: "tri", value: require("../Asset/ewallet&credit/tri.png") },
  { key: "tokopedia", value: require("../Asset/Merchant/tokopedia.png") },
  { key: "lazada", value: require("../Asset/Merchant/lazada.png") },
  { key: "blibli", value: require("../Asset/Merchant/blibli.png") },
  { key: "shopee", value: require("../Asset/Merchant/shopee.png") },
  { key: "bukalapak", value: require("../Asset/Merchant/bukalapak.png") },
  { key: "koceku", value: require("../Asset/ewallet&credit/koceku.png") },
];

let income = 2500000;
let expense = 1000000;
export let Saved = income - expense;

const Insight = [
  { title: "Total Income", value: income },
  { title: "Total Expense", value: expense },
  { title: "Total Saved", value: Saved },
];

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.transaction = new Transaction(props);
  }

  render() {
    const { history } = this.transaction.state;
    return (
      <div className="flex flex-col mx-auto xl:gap-6 2xl:gap-10 xl:py-4 2xl:py-6 px-16">
        <div className="text-[#192252] font-medium text-lg mx-6">
          Money Insight
        </div>
        <div className="flex flex-row justify-between px-6 bg-white">
          {Insight.map((expense, index) => (
            <div key={index} className="flex justify-between gap-10 ">
              <div className="flex p-6 rounded-lg">
                <div className="flex flex-col gap-3">
                  <div className="xl:text-sm 2xl:text-base text-[#848fac]">
                    {expense.title}
                  </div>
                  <div className="xl:text-lg 2xl:text-2xl font-medium whitespace-nowrap text-[#192252]">
                    {" "}
                    {expense.value.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between mx-6 ">
          <div className="text-[#192252] font-medium text-lg">
            Recent Activity
          </div>
        </div>
        <div className="overflow-y-auto xl:h-[400px] 2xl:h-[500px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="sticky top-0 bg-gray-50 z-10">
              <tr>
                <th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Account
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {history.map((item, index) => (
                <tr key={index}>
                  <td className="py-4 border-r-[1px] whitespace-nowrap cursor-pointer">
                    {logoLoc.map((logo) => (
                      <React.Fragment key={logo.key}>
                        {item.account.toLowerCase() ===
                        logo.key.toLowerCase() ? (
                          <img
                            className="w-12 mx-auto"
                            src={logo.value}
                            alt=""
                          />
                        ) : (
                          ""
                        )}
                      </React.Fragment>
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap cursor-pointer">
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap cursor-pointer">
                    {item.type === "pay"
                      ? item.account.charAt(0).toUpperCase() +
                        item.account.slice(1)
                      : item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap cursor-pointer">
                    {item.date}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap cursor-pointer ${
                      item.status === "Expense"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {item.status === "Expense" ? "-" : "+"}
                    {item.amount.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DashBoard;
