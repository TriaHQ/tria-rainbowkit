import React from "react";
import TransactionDetails from "./TransactionDetails";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

type TransactionData = {
  Date: string;
  Image: string;
  Currency: string;
  Status: string;
  Price: string;
  Quantity: string;
};

// Sample data
const jsonData: TransactionData[] = [
  {
    Date: "2023-10-02",
    Image: "https://via.placeholder.com/40x40",
    Currency: "MATIC",
    Status: "Pending",
    Price: "$1.09",
    Quantity: "2 MATIC",
  },
  {
    Date: "2023-10-03",
    Image: "https://via.placeholder.com/40x40",
    Currency: "MATIC",
    Status: "Sent by 0x44s2...348J",
    Price: "$10.03",
    Quantity: "0.00124 ETH",
  },
  {
    Date: "2023-10-04",
    Image: "https://via.placeholder.com/40x40",
    Currency: "MATIC",
    Status: "Sent by avi@tria",
    Price: "$1.09",
    Quantity: "2 MATIC",
  },
  {
    Date: "2023-10-05",
    Image: "https://via.placeholder.com/40x40",
    Currency: "MATIC",
    Status: "Failed transaction",
    Price: "$1.09",
    Quantity: "2 MATIC",
  },
  {
    Date: "2023-10-06",
    Image: "https://via.placeholder.com/40x40",
    Currency: "BITCOIN",
    Status: "Sent to 0x845c....89cJ",
    Price: "$1402.74",
    Quantity: "0.05 BTC",
  },
  {
    Date: "2023-10-07",
    Image: "https://via.placeholder.com/40x40",
    Currency: "BITCOIN",
    Status: "Sent to nike@tria",
    Price: "$1402.74",
    Quantity: "0.05 BTC",
  },
];

const TransactionList = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[416px] grow shrink basis-0 flex-col justify-start items-center font-Montserrat flex">
        <div className="self-stretch h-[622px] flex-col justify-center items-center gap-2 flex">
          <div className="self-stretch h-[67px] px-5 py-3 rounded-2xl flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                <div className="text-center text-xl font-semibold  leading-normal">
                  Activities
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex" />
            </div>
          </div>
          {jsonData.map((transaction, index) => (
            <div className="self-stretch h-[97px] flex-col font-semibold justify-center items-center gap-2 flex cursor-pointer"
            onClick={() => navigate("/activity/transactionDetails")}>
              <div className="self-stretch px-3 justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-3 justify-start items-center gap-2 flex">
                  <div className="text-center text-stone-950 text-opacity-40 text-[10px] font-bold  uppercase leading-3 tracking-tight">
                    {transaction.Date}
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex" />
              </div>
              <div className="self-stretch h-[72px] px-5 py-3 rounded-[21px] flex-col justify-center items-center gap-2 flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="grow shrink basis-0 h-10 justify-start items-center gap-2 flex">
                    <div className="w-10 h-10 relative">
                      <img
                        className="w-10 h-10 left-0 top-0 absolute rounded-[40px]"
                        src="/icons/profile.png"
                      />
                      <img
                        src="https://s3.coinmarketcap.com/static-gravity/image/b8db9a2ac5004c1685a39728cdf4e100.png"
                        className="w-5 h-5 left-[26px] top-[-6px] absolute rounded-[20px]"
                        alt="Some alt text for the image"
                      />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-center text-stone-950 text-base font-semibold  leading-tight">
                          {transaction.Currency}
                        </div>
                      </div>
                      <div className="text-center text-stone-950 text-opacity-40 text-xs font-medium  leading-[14.40px]">
                        {transaction.Status}
                      </div>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
                    <div className="text-center text-stone-950 text-base font-semibold  leading-tight">
                      {transaction.Price}
                    </div>
                    <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold  leading-[16.80px]">
                      {transaction.Quantity}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TransactionList;
