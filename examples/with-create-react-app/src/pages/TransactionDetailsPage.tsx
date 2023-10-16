import "../index.css";
import TransactionDetail from "../Components/Activity/TransactionDetailCrypto";
import Footer from "../Components/Footer/index";
import HomeBackgroundVector from "../Components/UI/HomeBackgroundVector";
import TransactionDetailCrypto from "../Components/Activity/TransactionDetailCrypto";
import TransactionDetailNft from "../Components/Activity/TransactionDetailNft";
import TransactionDetailMultipleNft from "../Components/Activity/TransactionDetailMultipleNft";

function TransactionListPage() {
  return (
    <>
      <div className="flex items-center justify-center relative">
        <div style={{marginLeft:'-150px',marginTop:"50px"}} className="absolute top-0 ">
          {" "}
          <HomeBackgroundVector />
        </div>

        <div className="w-[430px] h-90vh p-4 flex-col justify-center items-center gap-3 inline-flex bg-white rounded-xl font-montserrat">
          <div className="w-[416px] flex-col justify-start items-center flex"></div>
      {/* <TransactionDetailCrypto /> */}
      {/* <TransactionDetailNft /> */}
      <TransactionDetailMultipleNft />
      {/* <Footer /> */}
      </div>
          
        </div>
    </>
  );
}

export default TransactionListPage;
