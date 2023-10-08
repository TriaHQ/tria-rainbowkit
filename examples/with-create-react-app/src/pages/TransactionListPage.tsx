import '../index.css'
import Nav from '../Components/Home/Nav';
import DisplayCost from '../Components/Home/DisplayCost';
import Crypto from '../Components/Home/Crypto';
import TransactionList from "../Components/Activity/TransactionList";
import Footer from "../Components/Footer/index";

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

function TransactionListPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-[448px] h-[840px] p-4 flex-col justify-center items-center gap-3 inline-flex bg-white rounded-xl font-montserrat">
          <div className="w-[416px] grow shrink basis-0 flex-col justify-start items-center flex">
            <Nav />
            <TransactionList/>
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default TransactionListPage;
