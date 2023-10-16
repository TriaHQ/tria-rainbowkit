import React from "react";

function TransactionDetailNft() {
  return (
<div className="w-[448px] h-[840px] p-4 flex-col justify-between items-center inline-flex">
  <div className="self-stretch h-[643.25px] flex-col justify-start items-center flex">
    <div className="self-stretch h-[72px] px-5 py-3 rounded-[21px] justify-center items-center gap-2 inline-flex">
      <div className="w-[18px] h-[18px] justify-center items-center flex">
        <div className="w-[18px] h-[18px] relative">
        <img src="/icons/arrow-left.svg"></img>
        </div>
      </div>
      <div className="grow shrink basis-0 h-9 justify-center items-center gap-4 flex">
        <div className="px-3 py-2 bg-white rounded-[48px] border-2 border-zinc-100 justify-center items-center gap-2 flex">
          <div className="text-center text-zinc-400 text-sm font-semibold font-['Montserrat'] leading-[16.80px]">received on</div>
          <div className="w-5 h-5 pl-[2.57px] pr-[2.43px] pt-[2.70px] pb-[2.30px] bg-violet-600 rounded border border-white backdrop-blur-[2.50px] justify-center items-center flex">
            <div className="w-[15px] h-[15px] relative flex-col justify-start items-start flex" />
            <img src="/icons/chain_3.png"></img>
          </div>
        </div>
      </div>
      <div className="w-[18px] h-[18px] relative" />
    </div>
    <div className="self-stretch h-[571.25px] py-2 flex-col justify-start items-center gap-2 flex">
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
      <div className="w-[416px] px-5 py-4 rounded-2xl  border-blue  border-opacity-30 justify-center items-center gap-6 inline-flex">
        <div className="w-[149px] p-[6.52px] bg-white rounded-lg shadow border-2 border-neutral-50 flex-col justify-center items-center gap-[6.52px] inline-flex">
          <div className="w-[135.96px] h-[152.64px] relative">
            <img className="w-[135.96px] h-[152.64px] left-0 top-0 absolute rounded" src="/images/Rectangle3785.svg" />
            <div className="w-[19.54px] h-[19.59px] left-[4.88px] top-[6.12px] absolute shadow justify-start items-center gap-[5.59px] inline-flex">
              <div className="w-[19.54px] h-[19.59px] pl-0.5 pr-[2.44px] pt-0.5 pb-[2.45px] bg-white rounded-[19.56px] border border-white backdrop-blur-[2.45px] flex-col justify-center items-center inline-flex">
                <img className="w-[15.14px] h-[15.18px]" src="/icons/ether2.svg" />
              </div>
            </div>
          </div>
          <div className="self-stretch px-[4.89px] py-[6.52px] rounded-[13.04px] justify-start items-center gap-[6.52px] inline-flex">
            <div className="grow shrink basis-0 h-3.5 justify-between items-center flex">
              <div className="text-center text-neutral-600 text-xs font-semibold font-['Montserrat'] leading-[13.70px]">#10 EVOL Fanny</div>
              <div className="text-center text-zinc-400 text-xs font-semibold font-['Montserrat'] leading-[13.70px]">x1</div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
          <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
            <img className="w-[50px] h-[50px] rounded-[50px]" src="/icons/profile.png" />
            <div className="px-2 justify-start items-center flex">
              <div className="text-center text-zinc-500 text-sm font-semibold font-['Montserrat'] leading-[16.80px]">avi@tria</div>
            </div>
          </div>
          <div className="self-stretch px-3 py-1 justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute">
                <img src="/icons/arrow-down2.png"></img>
              </div>
            </div>
          </div>
          <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
            <img className="w-[50px] h-[50px] rounded-[50px]" src="/icons/user.png" />
            <div className="px-2 justify-start items-center flex">
              <div className="text-center text-zinc-500 text-sm font-semibold font-['Montserrat'] leading-[16.80px]">thekaypo@tria</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[257px] px-5 py-4 rounded-2xl flex-col justify-center items-center gap-2 flex">
        <div className="self-stretch py-3 justify-start items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold font-['Montserrat'] leading-snug">Confirmed on</div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-60 text-lg font-normal font-['Montserrat'] leading-snug">21 Sept 2023</div>
            </div>
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal font-['Montserrat'] leading-[16.80px]">06:05 pm</div>
            </div>
          </div>
        </div>
        <div className="self-stretch py-3 justify-start items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold font-['Montserrat'] leading-snug">Network Fee</div>
              <div className="w-[18px] h-[18px] relative">
                <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-20 text-xs font-medium font-['Montserrat'] leading-[14.40px]">Refreshes in: 30</div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-60 text-lg font-normal font-['Montserrat'] leading-snug">$0.024</div>
            </div>
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal font-['Montserrat'] leading-[16.80px]">0 MATIC</div>
            </div>
          </div>
        </div>
        <div className="self-stretch py-3 justify-start items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
            <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold font-['Montserrat'] leading-snug">Total Cost</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
            <div className="text-center text-stone-950 text-opacity-60 text-lg font-medium font-['Montserrat'] leading-snug">$1.094</div>
            <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal font-['Montserrat'] leading-[16.80px]">2 MATIC</div>
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
        <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold font-['Montserrat'] leading-[16.80px]">Powered by Tria</div>
      </div>
    </div>
  </div>
</div>
  );
}

export default TransactionDetailNft;