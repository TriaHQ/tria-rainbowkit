// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Home from "./pages/Home";
import TransactionListPage from "./pages/TransactionListPage";
import TransactionDetails from "./pages/TransactionDetailsPage";
import BuyCrypto from "./Components/Home/BuyCrypto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/buycrypto" element={<BuyCrypto />} />
          <Route path="/activity/TransactionList" element={<TransactionListPage />} />
          <Route path="/activity/TransactionDetails" element={<TransactionDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
