import React from "react";
import { useNavigate } from "react-router-dom";

function TransactionDetailMultipleNft() {
  let navigate = useNavigate();
  function HandleClick() {
    navigate("/activity");
  }

  return (
<div className="w-[448px] bg-white rounded-2xl h-[840px] p-4 flex-col justify-between items-center inline-flex">
  <div className="self-stretch h-[644px] flex-col justify-start items-center flex">
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
          <div className="text-center text-zinc-400 text-sm font-semibold  leading-[16.80px]">received on</div>
          <div className="w-5 h-5 pl-[2.57px] pr-[2.43px] pt-[2.70px] pb-[2.30px] bg-violet-600 rounded border border-white backdrop-blur-[2.50px] justify-center items-center flex">
            <div className="w-[15px] h-[15px] relative flex-col justify-start items-start flex" />
            <img src="/icons/chain_3.png"></img>
          </div>
        </div>
      </div>
      <div className="w-[18px] h-[18px] relative" />
    </div>
    <div className="self-stretch h-[572px] py-2 flex-col justify-start items-center gap-2 flex">
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
          </div>
        </div>
      </div>
      <div className="w-[416px] px-5 py-4 rounded-2xl border-2 border-violet-400 border-opacity-30 justify-center items-center gap-6 inline-flex">
        <div className="w-[176.12px] h-[200px] relative">
          <div className="w-[134.69px] h-[179.34px] p-[5.88px] left-[26.32px] top-[16.54px] absolute origin-top-left rotate-[-5deg] bg-white rounded-lg shadow border border-neutral-50 flex-col justify-center items-center gap-[5.88px] inline-flex">
            <div className="w-[122.92px] h-[137.49px] relative">
              <img className="w-[122.92px] h-[137.49px] left-0 top-0 absolute rounded-[2.94px] rotate-[97.5deg]" src="/images/Rectangle_3786.svg" />
              <div className="w-[17.66px] h-[17.65px] left-[4.42px] top-[5.52px] absolute shadow justify-start items-center gap-[5.04px] inline-flex">
                <div className="w-[17.66px] h-[17.65px] pl-[1.77px] pr-[2.21px] pt-[1.76px] pb-[2.21px] bg-white rounded-[17.65px] border border-white backdrop-blur-[2.21px] justify-center items-center flex">
                  <img className="w-[13.69px] h-[13.68px]" src="/images/Rectangle_3786.svg"  />
                </div>
              </div>
            </div>
            <div className="self-stretch px-[4.41px] py-[5.88px] rounded-xl justify-start items-center gap-[5.88px] inline-flex">
              <div className="justify-center items-center gap-[5.88px] flex">
                <div className="text-center text-neutral-600 text-[10.30px] font-semibold  leading-3">#10 EVOL Fanny</div>
              </div>
            </div>
          </div>
          <div className="w-[134.69px] h-[179.34px] p-[5.88px] left-[13.08px] top-[19.89px] absolute origin-top-left rotate-[-7.50deg] bg-white rounded-lg shadow border border-neutral-50 flex-col justify-center items-center gap-[5.88px] inline-flex">
            <div className="w-[122.92px] h-[137.49px] relative">
              <img className="w-[122.92px] h-[137.49px] left-0 top-0 absolute rounded-[2.94px] rotate-[100deg]" src="/images/Rectangle_3786.svg"  />
              <div className="w-[17.66px] h-[17.65px] left-[4.42px] top-[5.51px] absolute shadow justify-start items-center gap-[5.04px] inline-flex">
                <div className="w-[17.66px] h-[17.65px] pl-[1.77px] pr-[2.21px] pt-[1.77px] pb-[2.20px] bg-white rounded-[17.65px] border border-white backdrop-blur-[2.21px] justify-center items-center flex">
                  <img className="w-[13.69px] h-[13.68px]" src="/icons/profile.png" />
                </div>
              </div>
            </div>
            <div className="self-stretch px-[4.41px] py-[5.88px] rounded-xl justify-start items-center gap-[5.88px] inline-flex">
              <div className="justify-center items-center gap-[5.88px] flex">
                <div className="text-center text-neutral-600 text-[10.30px] font-semibold  leading-3">#10 EVOL Fanny</div>
              </div>
            </div>
          </div>
          <div className="w-[134.69px] h-[179.34px] p-[5.88px] left-0 top-[23.39px] absolute origin-top-left rotate-[-10deg] bg-white rounded-lg shadow border border-neutral-50 flex-col justify-center items-center gap-[5.88px] inline-flex">
            <div className="w-[122.92px] h-[137.49px] relative">
              <img className="w-[122.92px] h-[137.49px] left-0 top-0 absolute rounded-[2.94px] rotate-[10deg]" src="/images/Rectangle_3786.svg"  />
              <div className="w-[17.66px] h-[17.65px] left-[4.42px] top-[5.51px] absolute shadow justify-start items-center gap-[5.04px] inline-flex">
                <div className="w-[17.66px] h-[17.65px] pl-[1.77px] pr-[2.21px] pt-[1.77px] pb-[2.20px] bg-white rounded-[17.65px] border border-white backdrop-blur-[2.21px] justify-center items-center flex">
                  <img className="w-[13.69px] h-[13.68px]" src="/icons/ether2.svg"/>
                </div>
              </div>
            </div>
            <div className="self-stretch px-[4.41px] py-[5.88px] rounded-xl justify-start items-center gap-[5.88px] inline-flex">
              <div className="grow shrink basis-0 h-3 justify-between items-center flex">
                <div className="text-center text-neutral-600 text-[10.30px] font-semibold  leading-3">#10 EVOL Fanny</div>
                <div className="text-center text-zinc-400 text-[10.30px] font-semibold  leading-3">x3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
          <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
            <img className="w-[50px] h-[50px] rounded-[50px]" src="/icons/profile2.svg" />
            <div className="px-2 justify-start items-center flex">
              <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">avi@tria</div>
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
            <img className="w-[50px] h-[50px] rounded-[50px]" src="/icons/user2.svg" />
            <div className="px-2 justify-start items-center flex">
              <div className="text-center text-zinc-500 text-sm font-semibold  leading-[16.80px]">thekaypo@tria</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[257px] px-5 py-4 rounded-2xl flex-col justify-center items-center gap-2 flex">
        <div className="self-stretch py-3 justify-start items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold  leading-snug">Confirmed on</div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-60 text-lg font-normal  leading-snug">21 Sept 2023</div>
            </div>
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal  leading-[16.80px]">06:05 pm</div>
            </div>
          </div>
        </div>
        <div className="self-stretch py-3 justify-start items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold  leading-snug">Network Fee</div>
              <div className="w-[18px] h-[18px] relative">
                <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                    <img src="/icons/info-circle.svg"></img>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-20 text-xs font-medium  leading-[14.40px]">Refreshes in: 30</div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-60 text-lg font-normal  leading-snug">$0.024</div>
            </div>
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal  leading-[16.80px]">0 MATIC</div>
            </div>
          </div>
        </div>
        <div className="self-stretch py-3 justify-start items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
            <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold  leading-snug">Total Cost</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
            <div className="text-center text-stone-950 text-opacity-60 text-lg font-medium  leading-snug">$1.094</div>
            <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal  leading-[16.80px]">2 MATIC</div>
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
        <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold  leading-[16.80px]">Powered by Tria</div>
      </div>
    </div>
  </div>
</div>
 );
}

export default TransactionDetailMultipleNft;