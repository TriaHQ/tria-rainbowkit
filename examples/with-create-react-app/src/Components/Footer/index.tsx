import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IconData {
  name: string;
  iconSrc: string;
  text: string;
  route: string;
}

const iconData: IconData[] = [
  {
    name: "home",
    iconSrc: "/icons/home.svg",
    text: "home",
    route: "/home"
  },
  {
    name: "colorfilter",
    iconSrc: "/icons/colorfilter.png",
    text: "nfts",
    route: "/nfts"
  },
  {
    name: "arrangesquare",
    iconSrc: "/icons/clock.svg",
    text: "activity",
    route: "/activity/TransactionList"
  },
];

const Footer: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(iconData[0].name);
  const navigate = useNavigate();


  const handleIconClick = (icon: IconData) => {
    setSelectedIcon(icon.name);
    isTextVisible(icon.name);
    navigate(icon.route);
  };

  const isTextVisible = (iconName: string) => {
    return iconName === selectedIcon ? "block" : "none";
  };

  return (
    <div className="self-stretch h-[91px] flex-col justify-start items-center gap-2 flex">
      <div className="self-stretch h-[91px] bg-white flex-col justify-center items-center gap-2 flex">
        <div className="justify-center items-center gap-2 inline-flex">
          {iconData.map((item) => (
            <div
              key={item.name}
              className={`px-3 py-2  rounded-[25px] flex justify-center items-center cursor-pointer ${item.name == selectedIcon?"bg-black":"bg-slate-50 "}`}
              onClick={() => handleIconClick(item)}
            >
              <div className="flex-col justify-center items-center gap-1.5 inline-flex">
                <div className="w-6 h-6 relative">
                <img className="w-6 h-6" src={item.iconSrc} />
                </div>
              </div>
             
              <div
                className="text-center pl-2 text-white text-m font-semibold font-montserrat leading-[10px] "
                style={{ display: isTextVisible(item.name) }}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
        <div className="self-stretch py-3 rounded-[44px] justify-center items-center inline-flex">
          <div className="justify-center items-center gap-2 flex">
            <div className="w-[19px] h-[19px] relative rounded-[5px]" />
            <div className="justify-center items-start gap-0.5 flex">
              <img src="/tria-logo.png" alt="wallet" />
              <div className="text-center text-zinc-400 text-sm font-semibold font-montserrat leading-[16.80px]">
                Open Tria
              </div>
              <div className="w-[18px] h-[18px] relative">
                <div className="origin-top-left w-[18px] h-[18px]  absolute">
                  <img src="/icons/arrow-up.png" alt="wallet" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
