import { useState } from "react";
import Chains from "./Popups/Chains";
import Accounts from "./Popups/Accounts";

const Nav = () => {
  const [showChain, setShowChains] = useState(false);
  const[accountsVisible,setAccountsVisible]=useState(false);
  
  return (
    <>
      <div className="self-stretch h-[92px] py-4 rounded-2xl  flex-col justify-start items-center gap-2 flex relative ">
      {showChain  && (
        // <div className="shadow-2xl absolute top-0 right-10  flex font-montserrat bg-white rounded-[45px]   ">
          <div className={` shadow-2xl absolute top-20 right-10  flex font-montserrat p-2 bg-white rounded-lg  z-50 ${showChain ? '' : 'hidden'}`}>
          <Chains />
        </div>
      )}
       {accountsVisible  && (
        // <div className="shadow-2xl absolute top-0 right-10  flex font-montserrat bg-white rounded-[45px]   ">
          <div className={` w-[80%] shadow-2xl absolute top-20 right-10  flex font-montserrat p-2  bg-white rounded-lg z-50 ${accountsVisible ? '' : 'hidden'}`}>
          <Accounts />
        </div>
      )}
        <div className="self-stretch p-2 justify-between items-center inline-flex">
          <div className="grow shrink basis-0 h-11 justify-between items-center flex">
            <div className="justify-center items-center flex">
              <img
                src="/icons/user.png"
                className="w-8 h-8 rounded-[22.50px]"
              />
              <div className="px-2 justify-start items-center gap-2 flex">
                <div className="text-center text-black bg-opacity-90 text-opacity-80 text-lg font-montserrat font-semibold leading-6">
                  thekaypo@tria
                </div>
              </div>
              <div className="w-6 h-6 relative">
                <div className="w-[18px] h-[18px] ">
                  <div className="w-[18px] h-[18px] pt-1">
                    <img src="/icons/arrow-down.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-end items-center gap-2 flex">
              <div className="p-2 bg-white rounded-[45px]  justify-start items-center gap-2 flex cursor-pointer"
               onClick={() => {setAccountsVisible(!accountsVisible);
                setShowChains(false) }}>
                <div className="w-[18px] h-[18px] flex justify-center items-center">
                  <img className="w-8 h-8 " src="/icons/copy.svg" />
                </div>
              </div>
              <div
                className="w-7 h-7 relative bg-violet-600 rounded-md border backdrop-blur-[3.50px] cursor-pointer"
                onClick={() => {setShowChains(!showChain);
                  setAccountsVisible(false)}}
              >
                <div className="w-[21px] h-[21px] left-[3.59px] top-[3.78px] absolute" />
                <img
                  className=""
                  src="https://s3.coinmarketcap.com/static-gravity/image/b8db9a2ac5004c1685a39728cdf4e100.png"
                />
              </div>

              {/* <div className="p-2 rounded-[45px] border justify-start items-center flex ">
                    <div className="w-[20px] h-[20px] flex justify-center items-center ">
                    <img className="" src="https://s3.coinmarketcap.com/static-gravity/image/b8db9a2ac5004c1685a39728cdf4e100.png"/>
                    </div>
                  </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
