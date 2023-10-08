import '../index.css'
import TransactionDetails from "../Components/Activity/TransactionDetails";
import Footer from "../Components/Footer/index";



function TransactionListPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-[448px] h-[840px] p-4 flex-col justify-center items-center gap-3 inline-flex bg-white rounded-xl font-montserrat">
          <div className="w-[416px] grow shrink basis-0 flex-col justify-start items-center flex">
            <TransactionDetails/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionListPage;
