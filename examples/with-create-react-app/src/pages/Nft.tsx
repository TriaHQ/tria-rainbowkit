import React from 'react';
import Nav from "../Components/Home/Nav";
import DisplayCost from "../Components/Home/DisplayCost";
import Footer from "../Components/Footer/index";
import HomeBackgroundVector from "../Components/UI/HomeBackgroundVector";
import Assets from "../Components/Nfts/Assets";

export default function Nft() {
  return (
    <div>
<div className="flex items-center justify-center relative   ">
        <div
          style={{ marginLeft: "-150px"  }}
          className="absolute top-0 "
        >
          {" "}
          <HomeBackgroundVector />
        </div>

        <div className="w-[100%] h-[840px] p-4 flex-col justify-center items-center gap-3 inline-flex bg-white rounded-xl font-montserrat">
          <div className="w-[100%] flex-col justify-start items-center flex"></div>
          <div className="w-[416px] grow shrink basis-0 flex-col justify-start items-center flex">
            <Nav />
            <DisplayCost />
            <Assets />
          </div>
          <Footer />
        </div>
      </div>


    </div>
  )
}
