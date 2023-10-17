import React from "react";
import TransactionDetails from "./TransactionDetails";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// type TransactionData = {
//   Date: string;
//   Image: string;
//   Currency: string;
//   Status: string;
//   Price: string;
//   Quantity: string;
// };

// // Sample data
// const jsonData: TransactionData[] = [
//   {
//     Date: "2023-10-02",
//     Image: "https://via.placeholder.com/40x40",
//     Currency: "MATIC",
//     Status: "Pending",
//     Price: "$1.09",
//     Quantity: "2 MATIC",
//   },
//   {
//     Date: "2023-10-03",
//     Image: "https://via.placeholder.com/40x40",
//     Currency: "MATIC",
//     Status: "Sent by 0x44s2...348J",
//     Price: "$10.03",
//     Quantity: "0.00124 ETH",
//   },
//   {
//     Date: "2023-10-04",
//     Image: "https://via.placeholder.com/40x40",
//     Currency: "MATIC",
//     Status: "Sent by avi@tria",
//     Price: "$1.09",
//     Quantity: "2 MATIC",
//   },
//   {
//     Date: "2023-10-05",
//     Image: "https://via.placeholder.com/40x40",
//     Currency: "MATIC",
//     Status: "Failed transaction",
//     Price: "$1.09",
//     Quantity: "2 MATIC",
//   },
//   {
//     Date: "2023-10-05",
//     Image: "https://via.placeholder.com/40x40",
//     Currency: "USDC",
//     Status: "Failed transaction",
//     Price: "$1402.74",
//     Quantity: ".05 BTC",
//   },
// ];

const TransactionListHistory = () => {
  //   const navigate = useNavigate();
  return (
    <>
      {/* <div className="w-[416px] pb-9 flex-col justify-start items-center font-Montserrat flex  ">
        <div className="self-stretch  flex-col justify-center items-center gap-2 flex">
          <div className="self-stretch  px-5 rounded-2xl flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="grow shrink basis-0  justify-start items-center gap-2 flex">
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
      </div> */}

      <div className="grid grid-cols-2">
        <div className="w-[199px]   h-16 pl-5 pr-2.5 py-2 bg-white rounded-[21px] justify-start items-center inline-flex">
          <div className="w-[18px] h-[18px] justify-center items-center flex">
            <div className="w-[18px] h-[18px] relative"></div>
          </div>
          <div className="w-[121px] justify-start items-center gap-3 flex">
            <img
              className="w-10 h-10 rounded-[25px]"
              src="/icons/user_2.svg"
            />
            <div className="w-[69px] self-stretch justify-start items-center gap-2 flex">
              <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-['Montserrat'] leading-tight">
                gus0sus
              </div>
            </div>
          </div>
        </div>

        <div className="w-[199px]  pl-5 pr-2.5 py-2 bg-white rounded-[21px] justify-start items-center inline-flex">
          <div className="w-[18px] h-[18px] justify-center items-center flex">
            <div className="w-[18px] h-[18px] relative"></div>
          </div>
          <div className="w-[121px] justify-start items-center gap-3 flex">
            <img
              className="w-10 h-10 rounded-[25px]"
              src="/icons/opensea.png"
            />
            <div className="w-[69px] self-stretch justify-start items-center gap-2 flex">
              <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-['Montserrat'] leading-tight">
                gus0sus
              </div>
            </div>
          </div>
        </div>

        <div className="w-[199px]  pl-5 pr-2.5 py-2 bg-white rounded-[21px] justify-start items-center inline-flex">
          <div className="w-[18px] h-[18px] justify-center items-center flex">
            <div className="w-[18px] h-[18px] relative"></div>
          </div>
          <div className="w-[121px] justify-start items-center gap-3 flex">
            <img
              className="w-10 h-10 rounded-[25px]"
              src="/icons/user_3.svg"
            />
            <div className="w-[69px] self-stretch justify-start items-center gap-2 flex">
              <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-['Montserrat'] leading-tight">
                gus0sus
              </div>
            </div>
          </div>
        </div>

        <div className="w-[199px]  pl-5 pr-2.5 py-2 bg-white rounded-[21px] justify-start items-center inline-flex">
          <div className="w-[18px] h-[18px] justify-center items-center flex">
            <div className="w-[18px] h-[18px] relative"></div>
          </div>
          <div className="w-[121px] justify-start items-center gap-3 flex">
            <img
              className="w-10 h-10 rounded-[25px] bg-red-200"
              src="/icons/j.svg"
            />
            <div className="w-[69px] self-stretch justify-start items-center gap-2 flex">
              <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-['Montserrat'] leading-tight">
                gus0sus
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[416px] h-[17px] px-3 justify-start items-center gap-4 inline-flex">
  <div className="grow shrink basis-0 h-3 justify-start items-center gap-2 flex">
    <div className="text-center text-stone-950 text-opacity-40 text-[10px] font-bold font-['Montserrat'] uppercase leading-3 tracking-tight">Today</div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex" />
</div>

<div className="w-[416px] h-[72px] px-5 py-3 rounded-[21px] flex-col justify-center items-center gap-2 inline-flex">
  <div className="self-stretch justify-start items-center gap-4 inline-flex">
    <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
      <div className="w-10 h-10 relative">
        <div className="w-10 h-10 left-0 top-0 absolute bg-yellow-400 bg-opacity-25 rounded-[80px] justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch p-[6.67px] justify-center items-center inline-flex">
            <div className="w-[26.67px] h-[26.67px] relative flex-col justify-start items-start flex">
            <img src="/icons/Loader.svg"></img>
              <div className="w-[26.67px] h-[26.67px] justify-center items-center inline-flex">
                <div className="w-[26.67px] h-[26.67px] justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                    <div className="w-[26.67px] h-[26.67px] relative flex-col justify-start items-start flex">
                      <div className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[26.67px] h-[26.67px] justify-center items-center inline-flex">
                <div className="w-[26.67px] h-[26.67px] justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                    <div className="w-[26.67px] h-[26.67px] relative flex-col justify-start items-start flex">
                      <div className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[26.67px] h-[26.67px] justify-center items-center inline-flex">
                <div className="w-[26.67px] h-[26.67px] justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                    <div className="w-[26.67px] h-[26.67px] relative flex-col justify-start items-start flex">
                      <div className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[26.67px] h-[26.67px] justify-center items-center inline-flex">
                <div className="w-[26.67px] h-[26.67px] justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                    <div className="w-[26.67px] h-[26.67px] relative flex-col justify-start items-start flex">
                      <div className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[26.67px] h-[26.67px] justify-center items-center inline-flex">
                <div className="w-[26.67px] h-[26.67px] justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                    <div className="w-[26.67px] h-[26.67px] relative flex-col justify-start items-start flex">
                      <div className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[18px] h-[18px] pl-[2.31px] pr-[2.19px] pt-[2.43px] pb-[2.07px] left-[27px] top-[27px] absolute bg-violet-600 rounded border border-white backdrop-blur-[2.25px] justify-center items-center inline-flex">
          <div className="w-[13.50px] h-[13.50px] relative flex-col justify-start items-start flex" />
          <img src="/icons/chain_3.png"></img>
        </div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-['Montserrat'] leading-tight">MATIC</div>
        </div>
        <div className="self-stretch justify-start items-center gap-1 inline-flex">
          <div className="text-center text-yellow-400 text-xs font-medium font-['Montserrat'] leading-[14.40px]">Pending</div>
          <div className="text-center text-stone-950 text-opacity-40 text-xs font-medium font-['Montserrat'] leading-[14.40px]">To: avi@tria</div>
        </div>
      </div>
    </div>
    <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
      <div className="text-center text-zinc-500 text-base font-semibold font-['Montserrat'] leading-tight">$1.09</div>
      <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold font-['Montserrat'] leading-[16.80px]">2 MATIC</div>
    </div>
  </div>
</div>


<div className="w-[416px] h-[72px] px-5 py-3 rounded-[21px] flex-col justify-center items-center gap-2 inline-flex">
  <div className="self-stretch justify-start items-center gap-4 inline-flex">
    <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
      <div className="w-10 h-10 relative">
        <div className="w-10 h-10 pl-[5.13px] pr-[4.87px] pt-[5.39px] pb-[4.61px] left-0 top-0 absolute bg-violet-600 rounded-[50px] border-2 border-white backdrop-blur-[5px] justify-center items-center inline-flex">
          <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex" />
          <img src="/icons/Polygon.svg"></img>
        </div>
        <div className="w-[18px] h-[18px] pl-[2.31px] pr-[2.19px] pt-[2.43px] pb-[2.07px] left-[27px] top-[27px] absolute bg-violet-600 rounded border border-white backdrop-blur-[2.25px] justify-center items-center inline-flex">
          <div className="w-[13.50px] h-[13.50px] relative flex-col justify-start items-start flex" />
          <img src="/icons/chain_3.png"></img>
        </div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-['Montserrat'] leading-tight">MATIC</div>
        </div>
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-center text-stone-950 text-opacity-40 text-xs font-medium font-['Montserrat'] leading-[14.40px]">Sent by 0x44s2...348J</div>
        </div>
      </div>
    </div>
    <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
      <div className="text-center text-green-500 text-base font-semibold font-['Montserrat'] leading-tight">$10.03</div>
      <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold font-['Montserrat'] leading-[16.80px]">0.00124 ETH</div>
    </div>
  </div>
</div>


<div className="w-[416px] h-[17px] px-3 justify-start items-center gap-4 inline-flex">
  <div className="grow shrink basis-0 h-3 justify-start items-center gap-2 flex">
    <div className="text-center text-stone-950 text-opacity-40 text-[10px] font-bold font-['Montserrat'] uppercase leading-3 tracking-tight">yesterday</div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex" />
</div>

<div className="w-[416px] h-[72px] px-5 py-3 rounded-[21px] flex-col justify-center items-center gap-2 inline-flex">
  <div className="self-stretch justify-start items-center gap-4 inline-flex">
    <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
      <div className="w-10 h-10 relative rounded-[45px] border-2 border-neutral-100">
        <div className="w-10 h-10 left-0 top-0 absolute rounded-[42px] justify-center items-center inline-flex">
          <img className="w-10 h-[49.98px]" src="/icons/image 284.svg" />
        </div>
        <div className="w-[18px] h-[18px] left-[27px] top-[27px] absolute bg-red-600 rounded border border-white backdrop-blur-[2.25px] justify-center items-center inline-flex">
          <img className="w-[18px] h-[18px]" src="/icons/chain.svg" />
        </div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-stone-950 text-opacity-80 text-base font-semibold font-['Montserrat'] leading-tight">NFT - Sneakerheads</div>
        </div>
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-center text-stone-950 text-opacity-40 text-xs font-medium font-['Montserrat'] leading-[14.40px]">Received from opensea.io</div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="w-[416px] h-[72px] px-5 py-3 rounded-[21px] flex-col justify-center items-center gap-2 inline-flex">
  <div className="self-stretch justify-start items-center gap-4 inline-flex">
    <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
      <div className="w-10 h-10 relative">
        <div className="w-10 h-10 left-0 top-0 absolute bg-red-100 rounded-[40px]" />
        <div className="w-6 h-6 left-[8px] top-[8px] absolute">
          <div className="w-6 h-6 left-0 top-[0.50px] absolute">
            <img src="/icons/Property 36.svg"></img>
          </div>
        </div>
        <div className="w-[18px] h-[18px] pl-[2.31px] pr-[2.19px] pt-[2.43px] pb-[2.07px] left-[27px] top-[27px] absolute bg-violet-600 rounded border border-white backdrop-blur-[2.25px] justify-center items-center inline-flex">
          <div className="w-[13.50px] h-[13.50px] relative flex-col justify-start items-start flex" />
          <img src="/icons/chain_3.png"></img>
        </div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-['Montserrat'] leading-tight">MATIC</div>
        </div>
        <div className="self-stretch justify-start items-center gap-1 inline-flex">
          <div className="text-center text-red-500 text-xs font-medium font-['Montserrat'] leading-[14.40px]">Failed</div>
          <div className="text-center text-stone-950 text-opacity-40 text-xs font-medium font-['Montserrat'] leading-[14.40px]">To: avi@tria</div>
        </div>
      </div>
    </div>
    <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
      <div className="text-center text-zinc-500 text-base font-semibold font-['Montserrat'] leading-tight">$1.09</div>
      <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold font-['Montserrat'] leading-[16.80px]">2 MATIC</div>
    </div>
  </div>
</div>
    </>
  );
};

export default TransactionListHistory;
