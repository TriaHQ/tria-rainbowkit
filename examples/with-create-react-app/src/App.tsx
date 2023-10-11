// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Home from "./pages/Home";
import TransactionListPage from "./pages/TransactionListPage";
import TransactionDetails from "./pages/TransactionDetailsPage";
import Landing from "./pages/Landing";
import "./pages/Landing.css";
import BuyCrypto from "./Components/Home/BuyCrypto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import HomeBackgroundVector from "./Components/UI/HomeBackgroundVector";
import "./index.css";
import { useState } from "react";
const App = () => {
  const [showWallet, setShowWallet] = useState(false);
  return (
    <>
      <div className="bg flex  justify-between">
        <section className=" w-[100%]">
          {/* Glass background */}
          <div className="absolute inset-0 backdrop-blur-md"></div>

          {/* Illustration behind hero content */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
            aria-hidden="true"
          >
            <svg
              width="1360"
              height="578"
              viewBox="0 0 1360 578"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Your SVG code */}
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-20 md:pb-20">
              {/* Section header */}
              <div className="p-20  text-center bordered rounded-2xl   backdrop-blur-sm bg-black/50">
                <h1 className="main_text font-sans  text-6xl font-bold leading-tighter tracking-tighter animate__animated animate__fadeIn animate__delay-1s text-white">
                  Welcome to Acme{" "}
                  <div className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-teal-400 animate__animated animate__fadeIn animate__delay-1s pb-8">
                    Marketplace
                  </div>
                </h1>
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl font-bold font-sans text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-1s text-white">
                    A single place to buy and sell any digital asset across any
                    chain from Ethereum, Solana, Polygon, and more!
                  </p>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center animate__animated animate__fadeIn animate__delay-1s">
                    <div className="animate__animated animate__fadeIn animate__delay-1s">
                      <a
                        className="btn text-white bodered font-sans text-2xl rounded-lg text-black mt-2 py-4 pointer-cursor px-8 bg-blue-800 w-full mb-4 sm:w-auto sm:mb-0"
                        href="#0"
                      >
                        Login
                      </a>
                    </div>
                    {/* <div className="animate__animated animate__fadeIn animate__delay-4s">
                  <a className="btn text-white p-2 bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">
                    Learn more
                  </a>
                </div> */}
                  </div>
                </div>
              </div>

              {/* Hero image */}
              <img
                className=" w-[1096px] mt-16 animate__animated animate__fadeIn animate__delay-3s"
                src="/images/image.png"
                alt="Hero"
              />
            </div>
          </div>
        </section>
        <div className="mb-4 mr-2 fixed right-2 bottom-24">
          {showWallet && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/nfts" element={<Home />} />
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
          )}
          <div
            className="wallet_icon fixed w-[80px] bottom-4 right-8 cursor-pointer"
            onClick={() => {
              setShowWallet(!showWallet);
            }}
          >
            {/* <img className="w-[80px] justify-end rounded-full " src="/images/wallet.jpeg" alt="wallet" /> */}
            <div className="w-[58.98px] h-[58.98px] relative bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[100px] shadow border border-violet-400 backdrop-blur-2">
              <div className="w-7 h-7 left-[15.49px] top-[15.49px] absolute rounded-md">
                {" "}
                <img src="/images/wallet.svg" alt="wallet" />
              </div>
            </div>
            {/* <div className="w-16 h-16 relative  rounded-[100px] shadow">
              <img src="/images/wallet.svg" alt="wallet" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
