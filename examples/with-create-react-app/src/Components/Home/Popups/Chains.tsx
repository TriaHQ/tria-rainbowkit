import React from "react";

export default function Chains() {
  return (
    <div className="w-80 h-[336px] bg-white rounded-2xl  flex-col justify-center items-center inline-flex font-Montserrat">
    <div className="self-stretch h-20 px-5 py-3 bg-white  flex-col justify-center items-center gap-2 flex">
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 h-10 justify-center items-start gap-2 flex font-Montserrat">
          <div className=" flex-col justify-center items-center gap-[3.37px] inline-flex">
            <img className="w-10 h-10" src="/icons/opensea.png" />
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold  leading-[16.80px]">connected</div>
            </div>
            <div className="text-center text-neutral-400 text-xs font-semibold  leading-[14.40px]">https://opensea.io</div>
          </div>
        </div>
        <div className="p-1 rounded-[34px] justify-start items-center gap-2 flex">
          <div className="text-center text-rose-500 text-xs font-semibold  leading-[14.40px]">disconnect</div>
        </div>
      </div>
    </div>
    <div className="self-stretch px-5 py-3 bg-white justify-center items-center gap-2 inline-flex">
      <div className="grow shrink basis-0 h-10 justify-start items-center gap-2 flex">
        <div className="w-10 h-10 relative bg-violet-600 rounded-[40px] shadow border-2">
          <img className="w-10 h-10 left-0 top-0 absolute" src="/icons/solana.png" />
        </div>
        <div className="p-1 rounded-[34px] justify-start items-center gap-2 flex">
          <div className="text-center text-stone-950 text-opacity-80 text-base font-medium  leading-tight">Solana</div>
        </div>
      </div>
      <div className="w-8 h-8 relative text-green" ><img src="/icons/tick-circle.png"/></div>
    </div>
    <div className="self-stretch px-5 py-3 bg-stone-50 justify-center items-center gap-2 inline-flex">
      <div className="grow shrink basis-0 h-10 justify-start items-center gap-2 flex">
        <div className="w-10 h-10 relative bg-violet-600 rounded-[40px] shadow border-2">
          <img className="w-10 h-10 left-0 top-0 absolute" src="/icons/base.png" />
        </div>
        <div className="w-[212px] self-stretch justify-start items-center gap-2 flex">
          <div className="text-center text-stone-950 text-opacity-80 text-base font-medium  leading-tight">Base</div>
        </div>
      </div>
    </div>
    <div className="self-stretch px-5 py-3 bg-white justify-center items-center gap-2 inline-flex">
      <div className="grow shrink basis-0 h-10 justify-start items-center gap-2 flex">
        <div className="w-10 h-10 relative rounded-[40px] shadow border-2">
          <img className="w-10 h-10 left-0 top-0 absolute" src="/icons/ethereum.png" />
        </div>
        <div className="w-[212px] self-stretch justify-start items-center gap-2 flex">
          <div className="text-center text-stone-950 text-opacity-80 text-base font-medium  leading-tight">Ethereum</div>
        </div>
      </div>
    </div>
    <div className="self-stretch px-5 py-3 bg-white justify-center items-center gap-2 inline-flex">
      <div className="grow shrink basis-0 h-10 justify-start items-center gap-2 flex">
        <div className="w-10 h-10 relative rounded-[40px] shadow border-2">
          <img className="w-10 h-10 left-0 top-0 absolute" src="/icons/arbitrum.png" />
        </div>
        <div className="w-[212px] self-stretch justify-start items-center gap-2 flex">
          <div className="text-center text-stone-950 text-opacity-80 text-base font-medium  leading-tight">Arbitrum</div>
        </div>
      </div>
    </div>
  </div>
  );
}
