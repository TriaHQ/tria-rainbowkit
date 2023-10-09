import { useNavigate } from "react-router-dom";

const DisplayCost =()=>{
  const navigate = useNavigate();
    return(
        <div className="self-stretch h-[179px] mb  bg-white rounded-2xl border-2 border-violet-400 border-opacity-30 flex-col justify-center items-center gap-3 flex font-montserrat">
        <div className="self-stretch h-[179px] px-5 py-4 rounded-2xl flex-col justify-center items-start gap-4 flex">
          <div className="self-stretch h-[67px] py-3 flex-col justify-center items-start gap-2 flex">
            <div className="self-stretch h-[43px] flex-col justify-center items-start gap-1 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-center text-stone-950 text-opacity-80 text-4xl font-semibold  leading-[43.20px]">$1490.00</div>
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                    <img src="/icons/refresh.png" alt="wallet"/>
                    </div>
                  </div>
                </div>
                <div className="w-[18px] h-[18px] relative">
                  <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                  <img src="/icons/eye-slash.png" alt="wallet"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch py-3 justify-center items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-10 px-3 py-2 rounded-lg border border-zinc-300 border-opacity-60 justify-center items-center gap-3 flex cursor-pointer"
            onClick={()=>navigate("/home/buycrypto")}>
              <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold  leading-tight">Buy</div>
              <div className="w-[18px] h-[18px] relative">
                <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                  <img src="/icons/wallet.png" alt="wallet"/>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 h-10 px-3 py-2 rounded-lg border border-zinc-300 border-opacity-60 justify-center items-center gap-3 flex cursor-pointer">
              <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold  leading-tight">Send</div>
              <div className="w-[18px] h-[18px] relative">
                <div className="w-[18px] h-[18px] left-0 top-0 absolute">
                <img src="/icons/export.png" alt="wallet"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default DisplayCost;