import React from "react";

import { IoIosArrowForward } from "react-icons/io";

import { AiFillFilter } from "react-icons/ai";

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

class Transaction extends React.Component {
  addTransaction = (transaction) => {
    this.setState((prevState) => ({
      history: [...prevState.history, transaction],
    }));
  };
  constructor(props) {
    super(props);

    function generateRandomString(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return result;
    }

    this.state = {
      history: [
        {
          type: "transfer", //choose transfer or topup or pay
          account: "koceku", //if transfer (koceku) if topup ("Dana", "Gopay", "Shopeepay", "OVO", "Telkomsel", "Tri") if pay (shopee,lazada,tokopedia,bukalapak,blibli)
          name: "Udin", //fill this with "" if type is pay and fill this with random name indonesia if transfer or topup
          noHandphone: "089678202131", //fill this with "" if type is transfer and pay, and fill this with random phone number if topup
          paymentNumber: "", //fill this with "" if type is transfer and fill this with random payment number if type is pay (can use function)
          date: "21 Apr 2023, 07:05", //random descendant
          amount: 10000, //random
          status: "Expense", //Expense or income, if transfer (can expense or income) if pay or topup always expense
          transactionNo: generateRandomString(10), //keep it like this
          referenceNo: generateRandomString(8), //keep it like this
        },
        {
          type: "transfer",
          account: "koceku",
          name: "Asep safrudin bakri",
          noHandphone: "081234567890",
          paymentNumber: "",
          date: "22 Apr 2023, 09:12",
          amount: 50000,
          status: "Income",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "topup",
          account: "Gopay",
          name: "Japran hafis samsul",
          noHandphone: "082345678901",
          paymentNumber: generateRandomString(12),
          date: "22 Apr 2023, 10:23",
          amount: 250000,
          status: "Expense",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "transfer",
          account: "koceku",
          name: "Budi pekerti",
          noHandphone: "087654321098",
          paymentNumber: "",
          date: "22 Apr 2023, 12:56",
          amount: 75000,
          status: "Income",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "pay",
          account: "tokopedia",
          name: "",
          noHandphone: "",
          paymentNumber: generateRandomString(12),
          date: "22 Apr 2023, 15:17",
          amount: 150000,
          status: "Expense",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "topup",
          account: "Dana",
          name: "Ijad",
          noHandphone: "089876543210",
          paymentNumber: generateRandomString(12),
          date: "22 Apr 2023, 17:08",
          amount: 100000,
          status: "Expense",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "transfer",
          account: "koceku",
          name: "Cecep",
          noHandphone: "087654321087",
          paymentNumber: "",
          date: "23 Apr 2023, 08:34",
          amount: 120000,
          status: "Expense",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "transfer",
          account: "koceku",
          name: "Deni",
          noHandphone: "082345678902",
          paymentNumber: "",
          date: "23 Apr 2023, 11:05",
          amount: 35000,
          status: "Income",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "pay",
          account: "blibli",
          name: "",
          noHandphone: "",
          paymentNumber: generateRandomString(12),
          date: "23 Apr 2023, 14:16",
          amount: 80000,
          status: "Expense",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },
      ],
    };
  }

  render() {
    return (
      <div className="flex flex-col mx-auto gap-10 py-6 px-16">
        <div className="flex flex-row justify-between mx-6 ">
          <div className="text-[#192252] my-auto font-medium text-lg">
            History Transaction
          </div>
          <div className="border-spacing-16 group cursor-pointer hover:bg-[#6245D5] border-[#cbcdd6] border-2 p-2 px-4 rounded-xl">
            <div className="flex flex-row gap-2">
              <div className="my-auto text-xl group-hover:text-white">
                <AiFillFilter />
              </div>
              <div className="font-medium group-hover:text-white">Filter</div>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto h-[730px]">
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
              {this.state.history.map((item, index) => (
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

export default Transaction;
