
interface CryptoData {
  name: string;
  cost: string;
  number: string;
  image: string;
}

const jsonData: CryptoData[] = [
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
  },
];

const Crypto = () => {
  return (
    <div className="self-stretch h-[227px] rounded-2xl flex-col justify-center items-center gap-2 flex">
      <div className="self-stretch h-[67px] px-5 py-3 rounded-2xl flex-col justify-center items-center gap-2 flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
            <div className="text-center text-stone-950 text-opacity-80 text-xl font-semibold font-montserrat leading-normal">
              Crypto
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex" />
        </div>
      </div>
      {jsonData.map((item, index) => (
        <div className="self-stretch h-[72px] px-5 py-3 bg-stone-50 rounded-[21px] flex-col justify-center items-center gap-2 flex">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
              <div className="w-10 h-10 relative bg-violet-600 rounded-[40px] shadow border-2">
                <img
                  src={item.image}
                  alt={`image of ${item.name}`}
                  className=""
                />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="text-center text-black text-opacity-80 font-montserrat text-lg font-semibold leading-6">
                    {item.name.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
              <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-montserrat leading-tight">
                {item.cost}
              </div>
              <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold font-montserrat leading-[16.80px]">
                {item.number}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Crypto;
