import React from "react";
import { useNavigate } from "react-router-dom";



function TransactionDetailCrypto() {

  let navigate = useNavigate();
    function HandleClick() {
      navigate("/activity/TransactionList");
    }


  return (
<div className="w-[448px] h-[840px] p-4 flex-col justify-between items-center inline-flex">
  <div className="self-stretch h-[626px] flex-col justify-start items-center flex">
    <div className="self-stretch h-[72px] px-5 py-3 rounded-[21px] justify-center items-center gap-2 inline-flex">
      <div className="w-[18px] h-[18px] justify-center items-center flex">
        <div className="w-[18px] h-[18px] relative">
          <button type="button" onClick={HandleClick}>
          <img src="/icons/arrow-left.svg"></img>
    </button>

        </div>
      </div>
      <div className="grow shrink basis-0 h-9 justify-center items-center gap-4 flex">
        <div className="px-3 py-2 bg-white rounded-[48px] border-2 border-zinc-100 justify-center items-center gap-2 flex">
          <div className="text-center  text-sm font-semibold font-Montserrat leading-[16.80px]">received on</div>
          <div className="w-5 h-5 pl-[2.57px] pr-[2.43px] pt-[2.70px] pb-[2.30px] bg-violet-600 rounded-[20px] border border-white backdrop-blur-[2.50px] justify-center items-center flex">
            <div className="w-[15px] h-[15px] relative flex-col justify-start items-start flex" />
            <img src="/icons/chain_3.png"></img>
          </div>
        </div>
      </div>
      <div className="w-[18px] h-[18px] relative" />
    </div>
    <div className="self-stretch h-[554px] py-2 flex-col justify-start items-center gap-2 flex">
      <div className="self-stretch px-5 py-4 rounded-2xl justify-between items-center inline-flex">
        <div className="px-2 justify-start items-center gap-1 flex">
          <div className="text-center text-zinc-500 text-sm font-semibold font-['Red Hat Display']">View on explorer</div>
          <div className="w-[18px] h-[18px] relative">
            <div className="origin-top-left  w-[18px] h-[18px] left-[9px] top-[-3.73px] absolute">
              <img src="/icons/arrow-up2.svg"></img>
            </div>
          </div>
        </div>
        <div className="w-[18px] h-[18px] relative">
          <div className="w-[18px] h-[18px] left-0 top-0 absolute">
          <img src="/icons/copy.svg"></img>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[214px] px-5 py-4 bg-white rounded-2xl border-2 border-violet-400 border-opacity-30 flex-col justify-center items-center flex">
        <div className="h-[78px] py-3 flex-col justify-center items-start gap-1 flex">
          <div className="self-stretch justify-center items-center gap-2 inline-flex">
            <div className="text-center text-stone-950 text-opacity-90 text-[26px] font-semibold font-Montserrat leading-loose">$1.07</div>
          </div>
          <div className="self-stretch justify-center items-center gap-1 inline-flex">
            <div className="w-[18px] h-[18px] pl-[2.31px] pr-[2.19px] pt-[2.43px] pb-[2.07px] bg-violet-600 rounded-[18px] border border-white backdrop-blur-[2.25px] flex-col justify-center items-center inline-flex">
              <div className="w-[13.50px] h-[13.50px] relative flex-col justify-start items-start flex" />
              <img src="/icons/chain_3.png"></img>
            </div>
            <div className="text-center text-stone-950 text-opacity-60 text-base font-medium font-Montserrat leading-tight">2 MATIC</div>
          </div>
        </div>
        <div className="w-[376px] justify-center items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-3 inline-flex">
            <img className="w-[50px] h-[50px] rounded-[50px]" src="/icons/profile2.svg" alt="" />
            <div className="px-2 justify-start items-center gap-1 inline-flex">
              <div className="text-center text-zinc-500 text-sm font-semibold font-Montserrat leading-[16.80px]">0x44s2....348J</div>
              <div className="w-[18px] h-[18px] relative">
                <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                  <img src="/icons/copy.svg"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 flex-col justify-center items-center gap-3 inline-flex">
            <img src="/icons/arrow-right.svg"></img>
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute">
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-3 inline-flex">
            <img className="w-[50px] h-[50px] rounded-[50px]" src="/icons/user2.svg" />
            <div className="px-2 justify-start items-center gap-1 inline-flex">
              <div className="text-center text-zinc-500 text-sm font-semibold font-Montserrat leading-[16.80px]">thekaypo@tria</div>
              <div className="w-[18px] h-[18px] relative">
              <img src="/icons/copy.svg"></img>
                <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[257px] px-5 py-4 rounded-2xl flex-col justify-center items-center gap-2 flex">
        <div className="self-stretch py-3 justify-start items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold font-Montserrat leading-snug">Confirmed on</div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-60 text-lg font-normal font-Montserrat leading-snug">21 Sept 2023</div>
            </div>
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal font-Montserrat leading-[16.80px]">06:05 pm</div>
            </div>
          </div>
        </div>
        <div className="self-stretch py-3 justify-start items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold font-Montserrat leading-snug">Network Fee</div>
              <div className="w-[18px] h-[18px] relative">
                <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-20 text-xs font-medium font-Montserrat leading-[14.40px]">Refreshes in: 30</div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-60 text-lg font-normal font-Montserrat leading-snug">$0.024</div>
            </div>
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal font-Montserrat leading-[16.80px]">0 MATIC</div>
            </div>
          </div>
        </div>
        <div className="self-stretch py-3 justify-start items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
            <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold font-Montserrat leading-snug">Total Cost</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
            <div className="text-center text-stone-950 text-opacity-60 text-lg font-medium font-Montserrat leading-snug">$1.094</div>
            <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal font-Montserrat leading-[16.80px]">2 MATIC</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="self-stretch h-[104px] flex-col justify-center items-center gap-2 flex">
    <div className="self-stretch h-[53px]" />
    <div className="self-stretch py-3 rounded-[44px] justify-start items-start inline-flex">
      <div className="grow shrink basis-0 h-[19px] justify-center items-center gap-2 flex">
        <div className="w-[19px] h-[19px] relative rounded-[5px]" />
        <img src="/icons/logo.svg"></img>
        <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold font-Montserrat leading-[16.80px]">Powered by Tria</div>
      </div>
    </div>
  </div>
</div>
  );
}

export default TransactionDetailCrypto;