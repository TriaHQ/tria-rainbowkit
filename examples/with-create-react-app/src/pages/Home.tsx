import "../index.css";
import Nav from "../Components/Home/Nav";
import DisplayCost from "../Components/Home/DisplayCost";
import Crypto from "../Components/Home/Crypto";
import Footer from "../Components/Footer/index";

function Home() {
  return (
    <>
      <div className="w-[416px] grow shrink basis-0 flex-col justify-start items-center flex">
        <Nav />
        <DisplayCost />
        <Crypto />
      </div>
    </>
  );
}

export default Home;
