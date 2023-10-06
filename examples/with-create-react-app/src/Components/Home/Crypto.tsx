

interface CryptoProps {
  data: {
    name: string;
    cost: string;
    number: string;
    image: string;
  };
}

const Crypto: React.FC<CryptoProps> = ({ data }) => {
  return (
    <div className="self-stretch h-[72px] px-5 py-3 bg-stone-50 rounded-[21px] flex-col justify-center items-center gap-2 flex">
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
          <div className="w-10 h-10 relative bg-violet-600 rounded-[40px] shadow border-2">
            <img src={data.image} alt={`image of ${data.name}`} className="" />
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-black text-opacity-80 font-montserrat text-lg font-semibold leading-6">
                {data.name.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
          <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-montserrat leading-tight">
            {data.cost}
          </div>
          <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold font-montserrat leading-[16.80px]">
            {data.number}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;




