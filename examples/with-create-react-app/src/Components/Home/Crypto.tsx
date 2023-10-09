
interface CryptoData {
  name: string;
  cost: string;
  number: string;
  image: string;
}

const jsonData: CryptoData[] = [
  {
    name: "USDT",
    cost: "$1615.83",
    number: "128 USDT",
    image:
      "/icons/tether.png",
  },
  {
    name: "Matic",
    cost: "$123",
    number: "2 MATIC",
    image:
      "https://s3.coinmarketcap.com/static-gravity/image/b8db9a2ac5004c1685a39728cdf4e100.png",
  },
  {
    name: "Bitcoin",
    cost: "$1402",
    number: "0.05 BTC",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
  }
];

const Crypto = () => {
  return (
    <div className="self-stretch h-[390px] rounded-2xl flex-col justify-center items-center gap-2 flex">
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
      <div className="self-stretch h-[500px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-stone-100 overflow-y-auto">
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
          <div className="w-[416px] h-[72px] px-5 py-3 bg-white rounded-[21px] flex-col font-montserrat justify-center items-center gap-2 inline-flex">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-10 justify-start items-center gap-2 flex">
              <div className="w-10 h-10 relative rounded-[40px] shadow border-2">
                <div className="w-10 h-10 pl-1 pr-[5px] pt-1 pb-[5px] left-0 top-0 absolute bg-white rounded-[40px] font-montserrat border-2 border-white backdrop-blur-[5px] flex-col justify-center items-center inline-flex">
                <img
                    src={item.image}
                    alt={`image of ${item.name}`}
                    className=""
                  />  
                </div>
                <div className="left-[24px] top-[25px] absolute justify-start items-center gap-[5.71px] inline-flex">
                  <div className="w-5 h-5 pl-0.5 pr-[2.50px] pt-0.5 pb-[2.50px] bg-white rounded-[20px] border border-white backdrop-blur-[2.50px] flex-col justify-center items-center inline-flex">
                    <img className="w-[15.50px] h-[15.50px]" src="/icons/coin.png" />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="text-center text-stone-950 text-opacity-90 text-base font-semibold  leading-tight">
                  {item.name.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
              <div className="text-center text-stone-950 text-opacity-90 text-base font-semibold  leading-tight">{item.cost}</div>
              <div className="text-center text-stone-950 text-opacity-60 text-sm font-semibold  leading-[16.80px]">{item.number}</div>
            </div>
          </div>
        </div>

        ))}
      </div>
    </div>
  );
};

export default Crypto;
