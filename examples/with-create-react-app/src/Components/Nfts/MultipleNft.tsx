import React from "react";
import { useNavigate } from "react-router-dom";

export default function MultipleNft() {

    let navigate = useNavigate();
    function HandleClick() {
      navigate("/nfts");
    }

  return (
    <div>
      <div className="w-[448px] h-[840px] bg-white rounded-xl p-4 flex-col justify-between items-center inline-flex">
        <div className="w-[416px] h-[703px] flex-col justify-start items-center flex">
          <div className="self-stretch h-[72px] px-5 py-3 rounded-[21px] justify-center items-center gap-2 inline-flex">
            <div className="w-[18px] h-[18px] justify-center items-center flex">
              <div className="w-[18px] h-[18px] relative">
              <button onClick={HandleClick}>
              <img src="/icons/arrow-left.svg"></img>
              </button>
              </div>
            </div>
            <div className="grow shrink basis-0 h-9 justify-center items-center gap-4 flex">
              <div className="px-3 py-2 bg-white rounded-[48px] border-2 border-zinc-100 justify-center items-center gap-2 flex">
                <div className="text-center text-zinc-400 text-sm font-semibold font-['Montserrat'] leading-[16.80px]">
                  NFT on
                </div>
                <div className="w-5 h-5 pl-[2.57px] pr-[2.43px] pt-[2.70px] pb-[2.30px] bg-violet-600 rounded border border-white backdrop-blur-[2.50px] justify-center items-center flex">
                  <div className="w-[15px] h-[15px] relative flex-col justify-start items-start flex" />
                  <img src='/icons/chain_3.png'></img>
                </div>
              </div>
            </div>
            <div className="rounded-[27.58px] border-stone-300 justify-center items-center gap-[5.66px] flex">
              <div className="origin-top-left rotate-45 w-[12.73px] h-[12.73px] relative"></div>
              <img src="/icons/arrow-up3.svg"></img>
            </div>
          </div>
          <div className="self-stretch h-[610px] py-2 flex-col justify-start items-center gap-2 flex">
            {/*<div className="self-stretch h-[382px] py-4 rounded-2xl border-2 flex-col justify-center items-center gap-8 flex">
              <div className="w-[308.21px] h-[350px] relative">
                <img
                  className="w-[215px] h-[241px] left-[46.11px] top-[54px] absolute rounded-md blur-[175px]"
                  src="https://via.placeholder.com/215x241"
                />
                <div className="w-[235.70px] h-[313.84px] p-[10.30px] left-[46.05px] top-[28.95px] absolute origin-top-left rotate-[-5deg] bg-white rounded-[12.87px] shadow border-2 border-neutral-50 flex-col justify-center items-center gap-[10.30px] inline-flex">
                   <div className="w-[215.11px] h-[240.60px] relative">
                    <img
                      className="w-[215.11px] h-[240.60px] left-0 top-0 absolute rounded-[5.15px]"
                      src="https://via.placeholder.com/215x241"
                    />
                    <div className="w-[30.91px] h-[30.88px] left-[7.73px] top-[9.65px] absolute shadow justify-start items-center gap-[8.83px] inline-flex">
                      <div className="w-[30.91px] h-[30.88px] pl-[3.09px] pr-[3.86px] pt-[3.09px] pb-[3.86px] bg-white rounded-[30.90px] border-2 border-white backdrop-blur-[3.86px] justify-center items-center flex">
                        <img
                          className="w-6 h-[23.93px]"
                          src="https://via.placeholder.com/24x24"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch px-[7.72px] py-[10.30px] rounded-[20.60px] justify-start items-center gap-[10.30px] inline-flex">
                    <div className="justify-center items-center gap-[10.30px] flex">
                      <div className="text-center text-neutral-600 text-lg font-semibold font-['Montserrat'] leading-snug">
                        #10 EVOL Fanny
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[235.70px] h-[313.84px] p-[10.30px] left-[22.90px] top-[34.80px] absolute origin-top-left rotate-[-7.50deg] bg-white rounded-[12.87px] shadow border-2 border-neutral-50 flex-col justify-center items-center gap-[10.30px] inline-flex">
                  <div className="w-[215.11px] h-[240.60px] relative">
                    <img
                      className="w-[215.11px] h-[240.60px] left-0 top-0 absolute rounded-[5.15px]"
                      src="https://via.placeholder.com/215x241"
                    />
                    <div className="w-[30.91px] h-[30.88px] left-[7.73px] top-[9.65px] absolute shadow justify-start items-center gap-[8.83px] inline-flex">
                      <div className="w-[30.91px] h-[30.88px] pl-[3.09px] pr-[3.86px] pt-[3.09px] pb-[3.86px] bg-white rounded-[30.90px] border-2 border-white backdrop-blur-[3.86px] justify-center items-center flex">
                        <img
                          className="w-6 h-[23.93px]"
                          src="https://via.placeholder.com/24x24"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch px-[7.72px] py-[10.30px] rounded-[20.60px] justify-start items-center gap-[10.30px] inline-flex">
                    <div className="justify-center items-center gap-[10.30px] flex">
                      <div className="text-center text-neutral-600 text-lg font-semibold font-['Montserrat'] leading-snug">
                        #10 EVOL Fanny
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[235.70px] h-[313.84px] p-[10.30px] left-0 top-[40.93px] absolute origin-top-left rotate-[-10deg] bg-white rounded-[12.87px] shadow border-2 border-neutral-50 flex-col justify-center items-center gap-[10.30px] inline-flex">
                  <img
                    className="w-[215.11px] h-[240.60px] rounded-[5.15px]"
                    src="https://via.placeholder.com/215x241"
                  />
                  <div className="self-stretch px-[7.72px] py-[10.30px] rounded-[20.60px] justify-start items-center gap-[10.30px] inline-flex">
                    <div className="grow shrink basis-0 h-[22px] justify-between items-center flex">
                      <div className="text-center text-neutral-600 text-lg font-semibold font-['Montserrat'] leading-snug">
                        #10 EVOL Fanny
                      </div>
                      <div className="text-center text-zinc-400 text-lg font-semibold font-['Montserrat'] leading-snug">
                        x3
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
            {/* </div>  */}
            <div className="self-stretch h-[382px] mt-6 rounded-2xl  flex-col justify-center items-center gap-8 flex">
      <img src="/images/Frame1848.svg"></img>
      </div>
            <div className="self-stretch h-[431px] px-5 py-4 rounded-2xl flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch h-[68px] py-2 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch h-[52px] flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="text-center text-stone-950 text-opacity-60 text-base font-semibold font-['Montserrat'] leading-tight">
                      Floor price
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-stone-950 text-opacity-80 text-2xl font-medium font-['Montserrat'] leading-[28.80px]">
                      0.044 ETH
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[135px] py-3 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch h-[70px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="text-center text-stone-950 text-opacity-80 text-xl font-semibold font-['Montserrat'] leading-normal">
                      About
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-stone-950 text-opacity-60 text-base font-medium font-['Montserrat'] leading-tight">
                      A collection of EVOL in his various forms and guises, all
                      pieces are individual and unique.
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[25px] rounded-[20px] flex-col justify-center items-center gap-2 flex">
                  <div className="self-stretch h-[25px] px-5 py-1 rounded-[21px] flex-col justify-center items-center gap-2 flex">
                    <div className="self-stretch justify-center items-center gap-4 inline-flex">
                      <div className="grow shrink basis-0 h-[17px] justify-center items-center gap-2 flex">
                        <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold font-['Montserrat'] leading-[16.80px]">
                          View more
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[105px] flex-col justify-center items-center gap-2 flex">
          <div className="self-stretch h-[54px] flex-col justify-center items-center gap-4 flex">
            <div className="self-stretch justify-center items-center gap-6 inline-flex">
              <div className="h-[54px] p-5 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[58px] justify-center items-center flex">
                <div className="justify-center items-center flex">
                  <div className="text-center w-[13.25rem] text-white text-xl font-semibold font-['Montserrat'] leading-normal">
                    Send
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch py-3 rounded-[44px] justify-center items-center inline-flex">
            <div className="justify-center items-center gap-2 flex">
              <div className="w-[19px] h-[19px] relative rounded-[5px]" />
              <img src="/icons/logo.svg"></img>
              <div className="justify-center items-start gap-0.5 flex">
                <div className="text-center text-zinc-400 text-sm font-semibold font-['Montserrat'] leading-[16.80px]">
                  Open Tria
                </div>
                <div className="w-[18px] h-[18px] relative">
                  <div className="origin-top-left rotate-45 w-[18px] h-[18px] left-[9px] top-[-3.73px] absolute"></div>
                  <img src="/icons/arrow-up2.svg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
