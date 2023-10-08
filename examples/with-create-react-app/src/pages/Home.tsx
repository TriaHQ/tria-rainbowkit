import "../index.css";
import Nav from "../Components/Home/Nav";
import DisplayCost from "../Components/Home/DisplayCost";
import Crypto from "../Components/Home/Crypto";
import Footer from "../Components/Footer/index";

function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-[448px] h-[840px] p-4 flex-col justify-center items-center gap-3 inline-flex bg-white rounded-xl font-montserrat">
          <div className="w-[416px] grow shrink basis-0 flex-col justify-start items-center flex">
            <Nav />
            <DisplayCost />
            <Crypto />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
