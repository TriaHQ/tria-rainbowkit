import "../index.css";
import Nav from "../Components/Home/Nav";
import Header from "../Components/Activity/Header";
import DisplayCost from "../Components/Home/DisplayCost";
import Crypto from "../Components/Home/Crypto";
import TransactionListHistory from "../Components/Activity/TransactionListHistory";
import TransactionListRecent from "../Components/Activity/TransactionListRecent";
import TransactionListUsers from "../Components/Activity/TransactionListUsers";
import TransactionTabs from "../Components/Activity/TransactionTabs";
import Footer from "../Components/Footer/index";
import HomeBackgroundVector from "../Components/UI/HomeBackgroundVector";
import { useState } from "react";

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

function TransactionListPage() {
  const [activeTab, setActiveTab] = useState('history'); // Default active tab

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex items-center justify-center relative font-montserrat">
        {/* <div
          style={{ marginLeft: "-150px", marginTop: "50px" }}
          className="absolute top-0 "
        >
          {" "}
          <HomeBackgroundVector />
        </div> */}

        <div className="w-[100%] h-[840px] p-4 flex-col  items-center gap-3 inline-flex bg-white rounded-xl font-montserrat">
          <div className="w-[100%] flex-col justify-start items-center flex"></div>
          <Nav />
          <Header />
          
          <TransactionTabs handleTabClick={handleTabClick} activeTab={activeTab} />
        {activeTab === 'history' && <TransactionListHistory />}
        {activeTab === 'users' && <TransactionListUsers />}
        {activeTab === 'recent' && <TransactionListRecent />}
        <div className="absolute bottom-4 z-[100] left-0 right-0">
          <Footer />
          </div>
        </div>
      
      </div>
    </>
  );
}

export default TransactionListPage;
