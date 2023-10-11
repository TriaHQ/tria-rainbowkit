import { KeyringController } from "@tria-sdk/web";
import React, { useState } from "react";
import { Box } from "../Box/Box";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { Text } from "../Text/Text";
import { SocialLoginTypes } from "../../socialLogins/socialLoginConnectors";

enum WelcomeStep {
  ContinueToDAppORSetupWallet = "ContinueToDAppORSetupWallet",
  EnhancedSecurity = "EnhancedSecurity",
}

const WelcomeView = ({
  logo = null,
  username,
  id,
  enterPasswordCallback = (f) => f,
  onClose,
}) => {
  const [welcomeStep, setWelcomeStep] = useState<WelcomeStep>(
    WelcomeStep.ContinueToDAppORSetupWallet
  );

  const baseUrl = "https://staging.tria.so/";

  async function createAccountWithoutPassword() {
    const keyringController = new KeyringController({
      baseUrl,
    });
    try {
      const res = await keyringController.socialogin({
        password: null,
        platform: SocialLoginTypes.Google,
        userId: id,
        isPasswordLess: true,
        triaName: null,
      });
      onClose();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flex: 0.5, flexDirection: "column" }}>
        {logo}
        <Text color="modalText" style={{ alignSelf: "center", marginTop: 24 }}>
          {" "}
          Welcome to Tria{" "}
        </Text>
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
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
            <Text color="modalText"> Continue to Opensea!</Text>
            <Text color="modalText">
              Your @tria wallet is created and can be used on any device and
              blockchain.
            </Text>
            <PrimaryButton
              title="Continue"
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
              borderColor: "1.5px solid rgba(50, 50, 50, 0.03)",
              borderRadius: "16!important",
              borderStyle: "solid",
              borderWidth: "1.5px",
              padding: 16,
            }}
          >
            <Text color="modalText"> Continue to dApp </Text>
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
            <Text color="modalText"> Enhanced Security </Text>
            <Text color="modalTextDim">
              {" "}
              Elevate your wallet protection with a strong password!{" "}
            </Text>
            <PrimaryButton
              title="Add a passkey"
              clickAction={enterPasswordCallback}
            />
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
              borderColor: "border: 1.5px solid rgba(255, 255, 255, 0.03)",
              borderRadius: "16!important",
              borderStyle: "solid",
              borderWidth: "1.5px",
              padding: 16,
            }}
          >
            <Text color="modalText"> Enhanced Security </Text>
          </Box>
        )}
      </div>
    </div>
  );
};
export default WelcomeView;
