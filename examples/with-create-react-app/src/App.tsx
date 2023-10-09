// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Home from "./pages/Home";
import TransactionListPage from "./pages/TransactionListPage";
import TransactionDetails from "./pages/TransactionDetailsPage";
import BuyCrypto from "./Components/Home/BuyCrypto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import "./index.css";
const App = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-black p-6">
        <div className="w-[448px] h-[840px] p-4 flex-col justify-center items-center gap-3 inline-flex bg-white rounded-xl font-montserrat">
          <div className="w-[416px] grow shrink basis-0 flex-col justify-start items-center flex">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/home/buycrypto" element={<BuyCrypto />} />
              <Route
                path="/activity/TransactionList"
                element={<TransactionListPage />}
              />
              <Route
                path="/activity/TransactionDetails"
                element={<TransactionDetails />}
              />
            </Routes>
          </div>
        <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
