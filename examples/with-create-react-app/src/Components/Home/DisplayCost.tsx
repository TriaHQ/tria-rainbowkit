import { useNavigate } from "react-router-dom";
import "./BuyCrypto.css"

const DisplayCost = () => {
  const navigate = useNavigate();
  return (
    <div className="card self-stretch h-[230px] mb  rounded-2xl border-2  border-opacity-30 flex-col justify-center items-center gap-3 flex font-montserrat text-white ">
      <div className="self-stretch h-[179px] px-5 py-4 rounded-2xl flex-col justify-center items-start gap-4 flex ">
        <div className="flex items-center mt-16">
          <div className="mr-4">Assets up</div>
          <div className="">
            <img src="/icons/Frame 1000002849.png"></img>
          </div>
        </div>
        <div className="self-stretch h-[67px]  flex-col justify-center items-start gap-2 flex">
          <div className="self-stretch h-[43px] flex-col justify-center items-start gap-1 flex">
            <div className="self-stretch justify-between items-center inline-flex mb-8">
              <div className="justify-center items-center gap-2 flex">
                <div className="text-center text-4xl font-semibold  leading-[43.20px] text-white">
                  $1490.00
                </div>
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute ">
                    <img src="/icons/refresh-2.png" alt="wallet" />
                  </div>
                </div>
              </div>
              <div className="w-[18px] h-[18px] relative">
                <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                  <img src="/icons/eye-slash.png" alt="wallet" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch py-3 justify-center items-center gap-4 inline-flex mb-12 "
              >
          <div
            className="grow shrink basis-0 h-10 px-3 py-2 rounded-lg border border-zinc-300 bg-white border-opacity-60  justify-center items-center gap-3 flex cursor-pointer z-100"
            onClick={() => navigate("/home/buycrypto")}
          >
            <div className="text-center text-base font-semibold  leading-tight text-violet-600 "
          
            >
              Buy
            </div>
            <div className="w-[18px] h-[18px] relative">
              <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                <img src="/icons/wallet-2.png" alt="wallet" />
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-10 px-3 py-2 rounded-lg border border-zinc-300 bg-white border-opacity-60 justify-center items-center gap-3 flex cursor-pointer"
          onClick={() => navigate("/home/sendCrypto")} >
            <div className="text-center text-base font-semibold  leading-tight   text-violet-600">
              Send
            </div>
            <div className="w-[18px] h-[18px] relative">
              <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                <img src="/icons/money-send.png" alt="wallet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCost;
