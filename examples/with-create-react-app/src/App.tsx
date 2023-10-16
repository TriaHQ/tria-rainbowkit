// import { ConnectButton } from "@rainbow-me/rainbowkit";
const App = () => {
  const [showWallet, setShowWallet] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    navigate("/home");
  },[]);
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: 12,
      }}
    >
      {/* <ConnectButton /> */}
    </div>
  );
};

export default App;
