import '../index.css'
import Nav from '../Components/Home/Nav';
import DisplayCost from '../Components/Home/DisplayCost';
import Crypto from '../Components/Home/Crypto';

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
    image: "https://s3.coinmarketcap.com/static-gravity/image/b8db9a2ac5004c1685a39728cdf4e100.png",
  },
  {
    name: "Bitcoin",
    cost: "$1402",
    number: "0.05 BTC",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
  },
];

function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-[448px] h-[840px] p-4 flex-col justify-center items-center gap-3 inline-flex bg-white rounded-xl font-montserrat">
          <div className="w-[416px] grow shrink basis-0 flex-col justify-start items-center flex">
            <Nav />
            <DisplayCost />
            <div className="self-stretch h-[227px] rounded-2xl flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch h-[67px] px-5 py-3 rounded-2xl flex-col justify-center items-center gap-2 flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                    <div className="text-center text-stone-950 text-opacity-80 text-xl font-semibold font-montserrat leading-normal">Crypto</div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex" />
                </div>
              </div>
              {jsonData.map((item, index) => (
                <Crypto key={index} data={item} />
              ))}
            </div>
          </div>
          <div className="self-stretch h-[91px] flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch h-[91px] bg-white flex-col justify-center items-center gap-2 flex">
              <div className="justify-center items-center gap-2 inline-flex">
                <div className="px-3 py-2 bg-zinc-800 rounded-[25px] justify-center items-center flex">
                  <div className="flex-col justify-center items-center gap-1.5 inline-flex">
                    <div className="w-6 h-6 relative">
                  
                    </div>
                  </div>
                  <img className="w-6 h-6 " src="/icons/home.svg" />
                  <div className="w-[63px] self-stretch px-2.5 justify-start items-center gap-2 flex">
                    <div className="text-center text-white text-sm font-semibold font-montserrat leading-[16.80px]">home</div>
                  </div>
                </div>
                <div className="px-5 py-2 bg-stone-50 rounded-[25px] justify-center items-center flex">
                  <div className="w-6 h-6 relative">
                    <img src="/icons/colorfilter.png" className="w-6 h-6 left-0 top-0 absolute" alt="Color Filter" />
                  </div>
                </div>
                <div className="px-5 py-2 bg-stone-50 rounded-[25px] justify-center items-center flex">
                  <div className="w-6 h-6 relative">
                    <img src="/icons/arrange-square-2.png" className="w-6 h-6 left-0 top-0 absolute" alt="Arrange Square" />
                    <div className="w-6 h-6 left-0 top-0 absolute"></div>
                  </div>
                </div>
              </div>
              <div className="self-stretch py-3 rounded-[44px] justify-center items-center inline-flex">
                <div className="justify-center items-center gap-2 flex">
                  <div className="w-[19px] h-[19px] relative rounded-[5px]" />
                  <div className="justify-center items-start gap-0.5 flex">
                  <img src="/tria-logo.png" alt="wallet"/>
                    <div className="text-center text-zinc-400 text-sm font-semibold font-montserrat leading-[16.80px]">Open Tria</div>
                    <div className="w-[18px] h-[18px] relative">
                      <div className="origin-top-left w-[18px] h-[18px]  absolute">
                      <img src="/icons/arrow-up.png" alt="wallet"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
