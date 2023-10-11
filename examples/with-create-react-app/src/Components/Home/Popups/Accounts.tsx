import { useState } from "react";
import QR from "./QR";
import QR2 from "./QR2";

const Accounts = () => {
  const [showQr, setShowQr] = useState(false);
  const[showQr2,setShowQr2]=useState(false);
  return (
    <div className="block-inline ">
      {showQr ? (
        // <div className="shadow-2xl absolute top-0 right-10  flex font-montserrat bg-white rounded-[45px]   ">
        <div
          className={` shadow-2xl absolute top-20 right-2  flex font-montserrat  bg-white rounded-lg  z-50 ${
            showQr ? "" : "hidden"
          }`}
        >
          <QR2 />
        </div>
      ):
      <div
          className={` shadow-2xl absolute top-20 right-2  flex font-montserrat  bg-white rounded-lg  z-50 ${
            showQr2 ? "" : "hidden"
          }`}
        >
          <QR />
        </div>
      }
      <div className="w-full h-16 px-5 py-3 bg-stone-50 flex-col justify-start items-center gap-2 inline-flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold  leading-tight">
                Ethereum
              </div>
            </div>
            <div className="text-center text-neutral-400 text-sm font-semibold leading-[16.80px]">
              0xfa84...1E50
            </div>
          </div>
          <div
            className="w-[18px] h-[18px] justify-center items-center flex cursor-pointer"
            onClick={() => setShowQr(!showQr)}
          >
            <div className="w-[18px] h-[18px] relative">
              <img src="/scan-barcode.svg" alt="" />
            </div>
          </div>
          <div className="w-[18px] h-[18px] relative">
            <div className="w-[18px] h-[18px] left-0 top-0 absolute">
              <img src="/copy.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-16 px-5 py-3 bg-white flex-col justify-start items-center gap-2 inline-flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold  leading-tight">
                Solana
              </div>
            </div>
            <div className="text-center text-neutral-400 text-sm font-semibold  leading-[16.80px]">
              xV9BjM...Wnbq
            </div>
          </div>
          <div className="w-[18px] h-[18px] justify-center items-center flex cursor-pointer"
           onClick={() => setShowQr2(!showQr2)}>
            <div className="w-[18px] h-[18px] relative">
              <img src="/scan-barcode.svg" alt="" />
            </div>
          </div>
          <div className="w-[18px] h-[18px] relative">
            <div className="w-[18px] h-[18px] left-0 top-0 absolute">
              <img src="/copy.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
