import React from "react";

function TransactionDetails() {
  return (
    <div className="w-[448px] h-[730px] p-4 flex-col justify-center items-center gap-3 inline-flex font-Montserrat]">
      <div className="w-[416px] grow shrink basis-0 flex-col justify-start items-center flex">
        <div className="self-stretch h-[72px] px-5 py-3 rounded-[21px] justify-center items-center gap-2 inline-flex">
          <div className="w-[18px] h-[18px] relative">
            <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
          </div>
          <div className="grow shrink basis-0 h-9 justify-center items-center gap-4 flex">
            <div className="px-3 py-2 bg-white rounded-[48px] border-2 border-zinc-100 justify-center items-center gap-2 flex">
              <div className="w-5 h-5 relative bg-violet-600 rounded-[20px] border border-white backdrop-blur-[2.50px]">
                <div className="w-[15px] h-[15px] left-[2.57px] top-[2.70px] absolute" />
              </div>
              <div className="text-center text-zinc-400 text-sm font-semibold  ">
                received
              </div>
            </div>
          </div>
          <div className="w-[18px] h-[18px] relative">
            <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 px-5 py-3 rounded-[21px] flex-col justify-start items-center gap-5 flex">
          <div className="self-stretch h-14 flex-col justify-center items-center gap-5 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-[70px] self-stretch justify-start items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
                </div>
                <div className="text-center text-zinc-600 text-base font-semibold  leading-tight">
                  From
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">
                  0x44s2....348J
                </div>
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-[46px] self-stretch justify-start items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                    <div className="w-[4.25px] h-[4.25px] left-[6.88px] top-[5.76px] absolute"></div>
                  </div>
                </div>
                <div className="text-center text-zinc-600 text-base font-semibold  leading-tight">
                  To
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="text-center">
                  <span className="text-zinc-500 text-sm font-semibold font-montserrat leading-[16.80px]">
                    You
                  </span>
                  <span className="text-zinc-400 text-sm font-semibold font-montserrat leading-[16.80px]">
                    (thekaypo@tria)
                  </span>
                </div>

                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-2 px-3 py-1 bg-white flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch h-[0px] border border-gray-200"></div>
          </div>
          <div className="self-stretch h-[132px] flex-col justify-center items-center gap-5 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-[135px] self-stretch justify-start items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
                </div>
                <div className="text-center text-zinc-600 text-base font-semibold  leading-tight">
                  Confirmed at
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">
                  Sep 21, 2023
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-[72px] self-stretch justify-start items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
                </div>
                <div className="text-center text-zinc-600 text-base font-semibold  leading-tight">
                  Value
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">
                  $1.05
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-[76px] self-stretch justify-start items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
                </div>
                <div className="text-center text-zinc-600 text-base font-semibold  leading-tight">
                  Token
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative bg-violet-600 rounded-[18px] border border-white backdrop-blur-[2.25px]">
                  <div className="w-[13.50px] h-[13.50px] left-[2.31px] top-[2.43px] absolute" />
                </div>
                <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">
                  2 MATIC
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-[98px] self-stretch justify-start items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
                </div>
                <div className="text-center text-zinc-600 text-base font-semibold  leading-tight">
                  Network
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative bg-violet-600 rounded-[18px] border border-white backdrop-blur-[2.25px]">
                  <div className="w-[13.50px] h-[13.50px] left-[2.31px] top-[2.43px] absolute" />
                </div>
                <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">
                  Polygon
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-2 px-3 py-1 bg-white flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch h-[0px] border border-gray-200"></div>
          </div>
          <div className="self-stretch h-[246px] flex-col justify-center items-center gap-5 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-[87px] self-stretch justify-start items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
                </div>
                <div className="text-center text-zinc-600 text-base font-semibold  leading-tight">
                  TxHash
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">
                  0xe12fb3b4a99983...
                </div>
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-[73px] self-stretch justify-start items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                    <div className="w-[8.65px] h-[9.01px] left-[4.68px] top-[4.50px] absolute">
                      <div className="w-[7.92px] h-[6.38px] left-[0.35px] top-[2.45px] absolute"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center text-zinc-600 text-base font-semibold  leading-tight">
                  Block
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">
                  473900891
                </div>
                <div className="text-center text-zinc-400 text-sm font-semibold  leading-[16.80px]">
                  601.6K Confirmations
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-[132px] self-stretch justify-start items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
                </div>
                <div className="text-center text-zinc-600 text-base font-semibold  leading-tight">
                  Network Fee
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">
                  $0.012
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-[101px] self-stretch justify-start items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                    <div className="w-[15.44px] h-[12.71px] left-[1.28px] top-[2.64px] absolute"></div>
                  </div>
                </div>
                <div className="text-center text-zinc-600 text-base font-semibold  leading-tight">
                  Base Fee
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">
                  51.11 Gwei
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-[139px] self-stretch justify-start items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                    <div className="w-[15.44px] h-[12.71px] left-[1.28px] top-[2.64px] absolute"></div>
                  </div>
                </div>
                <div className="text-center text-zinc-600 text-base font-semibold  leading-tight">
                  Max Base Fee
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">
                  56.11 Gwei
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-[104px] self-stretch justify-start items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                    <div className="w-[15.44px] h-[12.71px] left-[1.28px] top-[2.64px] absolute"></div>
                  </div>
                </div>
                <div className="text-center text-zinc-600 text-base font-semibold  leading-tight">
                  Miner Tip
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">
                  40 Gwei
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="w-20 self-stretch justify-start items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
                </div>
                <div className="text-center text-zinc-600 text-base font-semibold  leading-tight">
                  Nonce
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">
                  8
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="self-stretch h-[91px] flex-col justify-start items-center gap-2 flex">
        <div className="self-stretch h-[91px] bg-white flex-col justify-center items-center gap-2 flex">
          <div className="justify-center items-center gap-2 inline-flex">
            <div className="px-5 py-2 bg-stone-50 rounded-[25px] justify-center items-center flex">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute"></div>
              </div>
            </div>
            <div className="px-5 py-2 bg-stone-50 rounded-[25px] justify-center items-center flex">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute"></div>
              </div>
            </div>
            <div className="px-3 py-2 bg-zinc-800 rounded-[25px] justify-center items-center flex">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute"></div>
              </div>
              <div className="w-[73px] self-stretch px-2.5 justify-start items-center gap-2 flex">
                <div className="text-center text-white text-sm font-semibold  leading-[16.80px]">
                  activity
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch py-3 rounded-[44px] justify-center items-center inline-flex">
            <div className="justify-center items-center gap-2 flex">
              <div className="w-[19px] h-[19px] relative rounded-[5px]" />
              <div className="justify-center items-start gap-0.5 flex">
                <div className="text-center text-zinc-400 text-sm font-semibold  leading-[16.80px]">
                  Open Tria
                </div>
                <div className="w-[18px] h-[18px] relative">
                  <div className="origin-top-left rotate-45 w-[18px] h-[18px] left-[9px] top-[-3.73px] absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default TransactionDetails;
