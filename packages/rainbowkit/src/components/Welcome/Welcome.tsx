import { KeyringController } from "@tria-sdk/web";
import React, { useState } from "react";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

enum WelcomeStep {
  ContinueToDAppORSetupWallet = "ContinueToDAppORSetupWallet",
  SetupOnOtherDevices = "SetupOnOtherDevices",
  EnhancedSecurity = "EnhancedSecurity",
}

const WelcomeView = ({ logo = null, username, id }) => {
  const [welcomeStep, setWelcomeStep] = useState<WelcomeStep>(
    WelcomeStep.ContinueToDAppORSetupWallet
  );

  const PrimaryButton = ({ clickAction = (f) => f, title = "" }) => {
    return (
      <div style={{ margin: 6 }}>
        <Box onClick={clickAction}>
          <div
            style={{
              background:
                "linear-gradient(111.34deg, #9F8BFF 0%, #7053FF 100%)",
              borderRadius: "16px",
              borderStyle: "solid",
              borderWidth: "0px",
              padding: 8,
            }}
          >
            <Text textAlign="center" titleColor="white">
              {" "}
              {title}{" "}
            </Text>
          </div>
        </Box>
      </div>
    );
  };

  const SecondaryButton = ({ clickAction = (f) => f, title = "" }) => {
    return (
      <div style={{ margin: 6 }}>
        <Box onClick={clickAction}>
          <Text textAlign="center" titleColor="white">
            {" "}
            {title}{" "}
          </Text>
        </Box>
      </div>
    );
  };

  const baseUrl = "http://localhost:8000";

  async function createAccount(password) {
    const keyringController = new KeyringController({
      baseUrl,
    });

    const res = await keyringController.socialogin({
      password: password,
      platform: "google",
      userId: id,
      isPasswordLess: false,
    });
  }

  async function createAccountWithoutPassword() {
    const keyringController = new KeyringController({
      baseUrl,
    });

    const res = await keyringController.socialogin({
      password: null,
      platform: "google",
      userId: id,
      isPasswordLess: true,
    });
    console.log(`response: ${JSON.stringify(res)}`);
  }

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flex: 0.5, flexDirection: "column" }}>
        {logo}
        <Text style={{ alignSelf: "center", marginTop: 24 }}>
          {" "}
          Welcome to Tria{" "}
        </Text>
      </div>

      {welcomeStep === WelcomeStep.ContinueToDAppORSetupWallet && (
        <Box
          cursor="pointer"
          onClick={() =>
            setWelcomeStep(WelcomeStep.ContinueToDAppORSetupWallet)
          }
          style={{
            borderImage: "linear-gradient(#9F8BFF4D, #7053FF4D) 30",
            borderRadius: "16!important",
            borderStyle: "solid",
            borderWidth: "1.5px",
            padding: 16,
          }}
        >
          <Text> Meet web3, again! </Text>
          <Text>
            {" "}
            You’re now connected to tria wallet. You can now continue using the
            dApp, or set up your newly established tria wallet.{" "}
          </Text>
          <PrimaryButton
            title="Continue to the dApp"
            clickAction={createAccountWithoutPassword}
          />
          <SecondaryButton title="Set up the wallet" />
        </Box>
      )}
      {welcomeStep !== WelcomeStep.ContinueToDAppORSetupWallet && (
        <Box
          cursor="pointer"
          onClick={() =>
            setWelcomeStep(WelcomeStep.ContinueToDAppORSetupWallet)
          }
          style={{
            borderImage: "linear-gradient(#9F8BFF4D, #7053FF4D) 30",
            borderRadius: "16!important",
            borderStyle: "solid",
            borderWidth: "1.5px",
            padding: 16,
          }}
        >
          <Text> Continue to dApp </Text>
        </Box>
      )}
      {welcomeStep === WelcomeStep.SetupOnOtherDevices && (
        <Box
          cursor="pointer"
          onClick={() => setWelcomeStep(WelcomeStep.SetupOnOtherDevices)}
          style={{
            borderImage: "linear-gradient(#9F8BFF4D, #7053FF4D) 30",
            borderRadius: "16!important",
            borderStyle: "solid",
            borderWidth: "1.5px",
            padding: 16,
          }}
        >
          <Text> Set up Tria on other devices </Text>
        </Box>
      )}
      {welcomeStep !== WelcomeStep.SetupOnOtherDevices && (
        <Box
          cursor="pointer"
          onClick={() => setWelcomeStep(WelcomeStep.SetupOnOtherDevices)}
          style={{
            borderImage: "linear-gradient(#9F8BFF4D, #7053FF4D) 30",
            borderRadius: "16!important",
            borderStyle: "solid",
            borderWidth: "1.5px",
            padding: 16,
          }}
        >
          <Text> Set up Tria on other devices </Text>
        </Box>
      )}
      {welcomeStep === WelcomeStep.EnhancedSecurity && (
        <Box
          cursor="pointer"
          onClick={() => setWelcomeStep(WelcomeStep.EnhancedSecurity)}
          style={{
            borderImage: "linear-gradient(#9F8BFF4D, #7053FF4D) 30",
            borderRadius: "16!important",
            borderStyle: "solid",
            borderWidth: "1.5px",
            padding: 16,
          }}
        >
          <Text> Enhanced Security </Text>
          <Text color="modalTextDim">
            {" "}
            Elevate your wallet protection with a strong password!{" "}
          </Text>
          <PrimaryButton title="Add a passkey" />
          <SecondaryButton
            title="Skip for now"
            clickAction={createAccountWithoutPassword}
          />
        </Box>
      )}
      {welcomeStep !== WelcomeStep.EnhancedSecurity && (
        <Box
          cursor="pointer"
          onClick={() => setWelcomeStep(WelcomeStep.EnhancedSecurity)}
          style={{
            borderImage: "linear-gradient(#9F8BFF4D, #7053FF4D) 30",
            borderRadius: "16!important",
            borderStyle: "solid",
            borderWidth: "1.5px",
            padding: 16,
          }}
        >
          <Text> Enhanced Security </Text>
        </Box>
      )}
    </div>
  );
};
export default WelcomeView;
