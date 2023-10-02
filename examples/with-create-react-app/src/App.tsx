import { ConnectButton } from "@rainbow-me/rainbowkit";
import { KeyringController } from "@tria-sdk/web";

const App = () => {
  async function createAccountWithoutPassword(username: string) {
    const keyringController = new KeyringController({
      baseUrl: "http://localhost:8000",
    });

    const res = await keyringController.socialogin({
      password: "",
      platform: "google",
      userId: username,
      isPasswordLess: true,
    });
    console.log(`res: ${res}`);
  }

  // createAccountWithoutPassword("abhijeet");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: 12,
      }}
    >
      <ConnectButton />
    </div>
  );
};

export default App;
