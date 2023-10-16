import "./Crypto.css";

interface CryptoData {
  name: string;
  cost: string;
  number: string;
  chain_image: string;
  image: string;
}

const jsonData: CryptoData[] = [
 
  {
    name: "ETH",
    cost: "$1615.83",
    number: "1 ETH",
    chain_image: "icons/chain_1.png",
    image:
      "/icons/ether.png",
  },
  {
    name: "USDT",
    cost: "$128",
    number: "128 USDT",
    chain_image: "icons/chain_2.png",
    image: "/icons/tether.png",
  },
  {
    name: "USDC",
    cost: "$95",
    number: "95 USDC",
    chain_image: "/icons/chain_3.png",
    image:
      "/icons/usdc.png",
  },
];

const Crypto = () => {
  return (
    <div className="self-stretch h-[370px] rounded-2xl flex-col justify-center items-center gap-2 flex">
      <div className="self-stretch h-[67px] px-5 py-3 rounded-2xl flex-col justify-center items-center gap-2 flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
            <div className="text-center text-stone-950 text-opacity-90 text-xl font-semibold font-montserrat leading-normal">
              Crypto
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex" />
        </div>
      </div>
      <div className="self-stretch scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-stone-100 overflow-y-auto">
        {jsonData.map((item, index) => (
          // <div className="self-stretch h-[72px] px-5 py-3 bg-stone-50 rounded-[21px] flex-col justify-center items-center gap-2 flex">
          //   <div className="self-stretch justify-start items-center gap-4 inline-flex">
          //     <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
          //       <div className="w-10 h-10 relative bg-violet-600 rounded-[40px] shadow border-2">
          //         <img
          //           src={item.image}
          //           alt={`image of ${item.name}`}
          //           className=""
          //         />
          //       </div>
          //       <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
          //         <div className="self-stretch justify-start items-center gap-2 inline-flex">
          //           <div className="text-center text-black text-opacity-80 font-montserrat text-lg font-semibold leading-6">
          //             {item.name.toUpperCase()}
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //     <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
          //       <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-montserrat leading-tight">
          //         {item.cost}
          //       </div>
          //       <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold font-montserrat leading-[16.80px]">
          //         {item.number}
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <div className="w-[416px] h-[72px] px-5 py-3 bg-white rounded-[21px] flex-col font-montserrat justify-center items-center gap-2 inline-flex group">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="grow shrink basis-0 h-10 justify-start items-center gap-2 flex">
                <div className="w-10 h-10 relative rounded-[40px] shadow border-2">
                  <div className="w-10 h-10 left-0 top-0 absolute bg-white rounded-[40px] font-montserrat  flex-col justify-center items-center inline-flex">
                    <img
                      src={item.image}
                      alt={`image of ${item.name}`}
                      className=""
                    />
                  </div>
                  <div className="left-[24px] top-[25px] absolute justify-start items-center gap-[5.71px] inline-flex">
                    {/* <div className="w-5 h-5 left-[24px] top-[25px] absolute bg-slate-800 rounded border border-white backdrop-blur-[2.50px]">
      <img className="w-5 h-5 left-[-0.25px] top-[-0.25px] absolute rounded-[19px]" src={item.chain_image} />
    </div> */}
                    <div className="chain_image w-5 h-5 bg-white  flex-col justify-center items-center inline-flex">
                      <img
                        className="w-5 h-5 transform scale-110"
                        src={item.chain_image}
                      />
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="text-center ml-1 text-stone-950 text-opacity-90 text-base font-semibold  leading-tight">
                      {item.name.toUpperCase()}
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-1 inline-flex ml-2  relative">
                    <div className="text-center text-neutral-400 text-xs font-semibold  leading-[14.40px] overflow-hidden transform translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-opacity duration-300 ease-in-out">
                    {item.cost}
                    </div>
                    <div className="absolute bottom-0 left-10 ml-2 h-0  px-2  bg-rose-500 bg-opacity-10 rounded-[30px] overflow-hidden transition-all duration-300 ease-in-out group-hover:h-4">
                      <div className="text-center text-rose-500 text-[10px] font-semibold  leading-3 transform translate-y-8 group-hover:translate-y-1">
                        -2.5%
                      </div>
                    </div>
                    {/* <div className=" bottom-0 left-10 h-0  px-2 py-0.5 bg-rose-500 bg-opacity-10 rounded-[30px] overflow-hidden transition-all duration-300 ease-in-out group-hover:h-8">
                      <div className="text-center text-rose-500 text-[10px] font-semibold leading-3 transform translate-y-8 group-hover:translate-y-2">
                        -2.5%
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
                <div className="text-center text-stone-950 text-opacity-90 text-base font-semibold  leading-tight">
                  {item.cost}
                </div>
                <div className="text-center text-stone-950 text-opacity-60 text-sm font-semibold  leading-[16.80px]">
                  {item.number}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crypto;
