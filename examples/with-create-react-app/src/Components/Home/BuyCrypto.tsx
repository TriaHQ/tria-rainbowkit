import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "../Footer";

interface CoinData {
  name: string;
  symbol: string;
  imageSrc: string;
}

const data: CoinData[] = [
  {
    name: "BITCOIN",
    symbol: "ETH",
    imageSrc: "/icons/tether.png",
  },
  {
    name: "BITCOIN",
    symbol: "ETH",
    imageSrc: "/icons/tether.png",
  },
  {
    name: "BITCOIN",
    symbol: "ETH",
    imageSrc: "/icons/tether.png",
  },
  {
    name: "BITCOIN",
    symbol: "ETH",
    imageSrc: "/icons/tether.png",
  },
  {
    name: "BITCOIN",
    symbol: "ETH",
    imageSrc: "/icons/tether.png",
  },
  {
    name: "BITCOIN",
    symbol: "ETH",
    imageSrc: "/icons/tether.png",
  },
  // Add more data objects for other items
];

function BuyCrypto() {
  const[input,setInput]=useState('');
  const renderItemsInRows = () => {
    const itemsPerRow = 2;
    const rows: JSX.Element[] = [];

    for (let i = 0; i < data.length; i += itemsPerRow) {
      const rowItems = data.slice(i, i + itemsPerRow);
      const row = (
        <div
          className="self-stretch justify-center items-center gap-3 inline-flex"
          key={i}
        >
          {rowItems.map((item, index) => (
            <div
              className="grow shrink bg-neutral-50 rounded-[20px] flex-col justify-center items-center gap-2 inline-flex"
              key={index}
            >
              <div className="self-stretch h-[72px] px-5 py-3 rounded-[21px] flex-col justify-center items-center gap-2 flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
                    <div className="w-10 h-10 relative bg-violet-600 ">
                      <div className="w-10 h-10 left-0 top-0 absolute bg-white">
                        <img
                          className="w-[30px] h-[30px] left-[4px] top-[4px] absolute"
                          src={item.imageSrc}
                          alt={item.name}
                        />
                      </div>
                      <div className="left-[24px] top-[25px] absolute justify-start items-center gap-[5.71px]">
                        <div className="w-5 h-5 relative bg-white rounded-[20px] border border-white backdrop-blur-[2.50px]">
                          <img
                            className="w-[15.50px] h-[15.50px] rounded left-[2px] top-[2px] absolute bg-black"
                            src="/icons/polygon15.png"
                            alt="Placeholder"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold leading-tight">
                          {item.name}
                        </div>
                      </div>
                      <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold leading-[16.80px]">
                          {item.symbol}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );

      rows.push(row);
    }

    return rows;
  };

  return (
    <>
      <Nav />
      <div className="w-[416px] grow  flex-col justify-start items-center flex">
        <div className="self-stretch h-[345px] flex-col justify-center items-center flex">
          <div className="self-stretch h-[120px] px-5 rounded-2xl flex-col justify-center items-center gap-3 flex">
            <div className="self-stretch pt-12 justify-start items-center gap-4 inline-flex">
              <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                <div className="text-center text-stone-950 text-opacity-80 text-xl font-semibold leading-normal">
                  Buy Crypto
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex" />
            </div>
            <div className="self-stretch h-12 justify-start items-center gap-4 inline-flex">
              <div className="grow shrink basis-0 h-[34px] px-3 py-2 bg-stone-50 rounded-[30px] justify-start items-center gap-3 flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <input
                      className="focus:border-0 w-full text-stone-950  bg-stone-50 text-opacity-40 text-sm font-medium "
                      placeholder=" Search crypto"
                      onChange={(e) => { setInput(e.target.value) }}
                    ></input>
                    <div className="w-[18px] h-[18px] relative">
                      <div className="left-0 top-0 absolute">
                        <img src="/icons/search-normal.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch px-5 py-6 justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-3.5 justify-start items-center gap-2 flex">
              <div className="text-center text-stone-950 text-opacity-40 text-xs font-bold uppercase leading-[14.40px] tracking-tight">
                Popular
              </div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-center items-center gap-3 flex ">
            {!input ?renderItemsInRows(): <>
              <div className="w-[376px] h-3.5 justify-start items-center gap-2 inline-flex">
                <div className="text-center text-stone-950 text-opacity-40 text-xs font-bold  uppercase leading-[14.40px] tracking-tight">Current chain</div>
              </div>
              <div className="w-[416px] h-[72px] px-5 py-3 rounded-[21px] flex-col justify-center items-center gap-2 inline-flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
                    <div className="w-10 h-10 relative bg-violet-600 rounded-[40px] shadow border-2">
                      <div className="w-[30px] h-[30px] left-[5.13px] top-[5.39px] absolute" />
                      <div className="left-[24px] top-[25px] absolute justify-start items-center gap-[5.71px] inline-flex">
                        <div className="w-5 h-5 relative bg-violet-600 rounded-[20px] border border-white backdrop-blur-[2.50px]">
                          <div className="w-[15px] h-[15px] left-[2.56px] top-[2.70px] absolute" />
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold  leading-tight">MATIC</div>
                      </div>
                      <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold leading-[16.80px]">POLYGON</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[416px] h-[30px] px-5 py-2 justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-3.5 justify-start items-center gap-2 flex">
                  <div className="text-center text-stone-950 text-opacity-40 text-xs font-bold  uppercase leading-[14.40px] tracking-tight">Other chains</div>
                </div>
              </div>
              <div className="w-[416px] h-[72px] px-5 py-3 rounded-[21px] flex-col justify-center items-center gap-2 inline-flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
                    <div className="w-10 h-10 relative bg-violet-600 rounded-[40px] shadow border-2">
                      <div className="w-[30px] h-[30px] left-[5.13px] top-[5.39px] absolute" />
                      <div className="left-[24px] top-[25px] absolute justify-start items-center gap-[5.71px] inline-flex">
                        <div className="w-5 h-5 relative bg-white rounded-[20px] border border-white backdrop-blur-[2.50px]">
                          <img className="w-[15.50px] h-[15.50px] left-[2px] top-[2px] absolute" src="https://via.placeholder.com/15x15" />
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold  leading-tight">MATIC</div>
                      </div>
                      <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold  leading-[16.80px]">ETH</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>}
          </div>
        </div>
      </div>
      <div className="self-stretch h-[80px] mt-36 flex-col justify-start items-center gap-2 flex">
        <div className="self-stretch h-[163px] bg-white flex-col justify-center items-center gap-2 flex">
          <div className="self-stretch  justify-center items-center gap-2 inline-flex">
            <div className="w-[212px] h-10 px-5  bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[20px] justify-center items-center flex">
              <div className="justify-center items-center flex">
                <div className="text-center text-white text-base font-semibold leading-tight">
                  Continue
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyCrypto;
