import axios from "axios";
import { KeyringController } from "@tria-sdk/web";
import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useSocialLoginConnectors } from "../../socialLogins/socialLoginConnectors";
import { isSafari } from "../../utils/browsers";
import {
  WalletConnector,
  useWalletConnectors,
} from "../../wallets/useWalletConnectors";
import { AsyncImage } from "../AsyncImage/AsyncImage";
import { Box } from "../Box/Box";
import BorderedBox from "../BorderedBox/BorderedBox";
import { CloseButton } from "../CloseButton/CloseButton";
import { ConnectModalIntro } from "../ConnectModal/ConnectModalIntro";
import EnterTriaPassword, {
  PasswordScreenType,
} from "../EnterTriaPassword/EnterTriaPassword";
import LoginInput from "../LoginInput/LoginInput";
import { ModalSelection } from "../ModalSelection/ModalSelection";
import {
  ModalSizeContext,
  ModalSizeOptions,
} from "../RainbowKitProvider/ModalSizeContext";
import TagView from "../TagView/TagView";
import { Text } from "../Text/Text";
import WelcomeView, { SocialLoginTypes } from "../Welcome/Welcome";
import EnterTriaNameComponent from "../EnterTriaName/EnterTriaName";

import {
  ConnectDetail,
  DownloadDetail,
  DownloadOptionsDetail,
  GetDetail,
  InstructionExtensionDetail,
  InstructionMobileDetail,
} from "./ConnectDetails";
import { ScrollClassName } from "./DesktopOptions.css";

enum ConnectType {
  Tria = "Continue with Tria",
  EmailSocial = "Email & Social Login",
  ConnectWallet = "Connect a Wallet",
}

export enum WalletStep {
  None = "NONE",
  LearnCompact = "LEARN_COMPACT",
  Get = "GET",
  Connect = "CONNECT",
  DownloadOptions = "DOWNLOAD_OPTIONS",
  Download = "DOWNLOAD",
  InstructionsMobile = "INSTRUCTIONS_MOBILE",
  InstructionsExtension = "INSTRUCTIONS_EXTENSION",
}

export enum SocialLoginStep {
  NotStarted = "NotStarted",
  TriaNameCreation = "TriaNameCreation",
  ExtraLayerSecurity = "ExtraLayerSecurity",
  EnterPassword = "EnterPassword",
}

enum ContinueWithTriaStep {
  EnterUserName = "EnterUserName",
  EnterPassword = "EnterPassword",
}

enum GetStartedWithTriaStep {
  NotStarted = "NotStarted",
  CreateTriaName = "CreateTriaName",
  SetupPassword = "SetupPassword",
}

export function DesktopOptions({ onClose }: { onClose: () => void }) {
  const safari = isSafari();
  const [selectedOptionId, setSelectedOptionId] = useState<
    string | undefined
  >();
  const [searchingOtherWallet, setIsSearchingOtherWallet] =
    useState<bool>(false);

  const [selectedWallet, setSelectedWallet] = useState<WalletConnector>();
  const [qrCodeUri, setQrCodeUri] = useState<string>();
  const [connectionError, setConnectionError] = useState(false);
  const [connectType, setConnectType] = useState<ConnectType>(ConnectType.Tria);
  const modalSize = useContext(ModalSizeContext);
  const compactModeEnabled = modalSize === ModalSizeOptions.COMPACT;
  const [walletStep, setWalletStep] = useState<WalletStep>(WalletStep.None);
  const [socialLoginStep, setSocialLoginStep] = useState<SocialLoginStep>(
    SocialLoginStep.NotStarted
  );
  const [continueWithTriaStep, setContinueWithTriaStep] =
    useState<ContinueWithTriaStep>(ContinueWithTriaStep.EnterUserName);
  const [getStartedWithTriaStep, setGetStartedWithTriaStep] =
    useState<GetStartedWithTriaStep>(GetStartedWithTriaStep.NotStarted);
  const [triaName, setTriaName] = useState("");
  const [isSocialLoginInProgress, setIsSocialLoginInProgress] = useState(false);
  const [socialFirstName, setSocialFirstName] = useState("");
  const [userId, setUserId] = useState("");

  const socialLogins = useSocialLoginConnectors();

  const baseUrl = "http://localhost:8000";

  const wallets = useWalletConnectors()
    .filter((wallet) => wallet.ready || !!wallet.extensionDownloadUrl)
    .sort((a, b) => a.groupIndex - b.groupIndex);

  useEffect(() => {
    async function submitData() {
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get("code");
      const scope = searchParams.get("scope");

      if (code && scope && !isSocialLoginInProgress) {
        setIsSocialLoginInProgress(true);
        try {
          const {
            data: { email, firstName, userId, isAccountExist },
          } = await axios.get(
            `${baseUrl}/api/v1/auth/google/callback?code=${code}&scope=${scope}`
          );
          setUserId(userId);

          if (isAccountExist === true) {
            //sign in flow
          } else {
            //sign up flow
            const { data } = await axios.get(
              `${baseUrl}/api/v1/get-name-recommendation?name=${firstName}`
            );
            const parsedFirstName =
              data?.data?.length > 0
                ? data.data[0]
                : firstName
                ? firstName
                : email;
            setSocialFirstName(parsedFirstName);
          }
          setIsSocialLoginInProgress(false);
        } catch (err) {
          console.log(err);
        }
      }
    }
    submitData();
  }, [isSocialLoginInProgress]);

  useEffect(() => {
    if (socialFirstName.length !== 0) {
      setSocialLoginStep(SocialLoginStep.TriaNameCreation);
      // checkUsername(socialFirstName);
    }
  }, [socialFirstName]);

  const numberOfWalletsShown = 3;

  const connectToWallet = (wallet: WalletConnector) => {
    setConnectionError(false);
    if (wallet.ready) {
      wallet?.connect?.()?.catch(() => {
        setConnectionError(true);
      });

      const getDesktopDeepLink = wallet.desktop?.getUri;
      if (getDesktopDeepLink) {
        // if desktop deep link, wait for uri
        setTimeout(async () => {
          const uri = await getDesktopDeepLink();
          window.open(uri, safari ? "_blank" : "_self");
        }, 0);
      }
    }
  };

  const selectWallet = (wallet: WalletConnector) => {
    connectToWallet(wallet);
    setSelectedOptionId(wallet.id);

    if (wallet.ready) {
      // We need to guard against "onConnecting" callbacks being fired
      // multiple times since connector instances can be shared between
      // wallets. Ideally wagmi would let us scope the callback to the
      // specific "connect" call, but this will work in the meantime.
      let callbackFired = false;

      wallet?.onConnecting?.(async () => {
        if (callbackFired) return;
        callbackFired = true;

        const sWallet = wallets.find((w) => wallet.id === w.id);
        const uri = await sWallet?.qrCode?.getUri();
        setQrCodeUri(uri);

        // This timeout prevents the UI from flickering if connection is instant,
        // otherwise users will see a flash of the "connecting" state.
        setTimeout(
          () => {
            setSelectedWallet(sWallet);
            changeWalletStep(WalletStep.Connect);
          },
          uri ? 0 : 50
        );

        // If the WalletConnect request is rejected, restart the wallet
        // selection flow to create a new connection with a new QR code
        const provider = await sWallet?.connector.getProvider();
        const connection = provider?.signer?.connection;
        if (connection?.on && connection?.off) {
          const handleConnectionClose = () => {
            removeHandlers();
            selectWallet(wallet);
          };
          const removeHandlers = () => {
            connection.off("close", handleConnectionClose);
            connection.off("open", removeHandlers);
          };
          connection.on("close", handleConnectionClose);
          connection.on("open", removeHandlers);
        }
      });
    } else {
      setSelectedWallet(wallet);
      changeWalletStep(
        wallet?.extensionDownloadUrl
          ? WalletStep.DownloadOptions
          : WalletStep.Connect
      );
    }
  };

  const getWalletDownload = (id: string) => {
    setSelectedOptionId(id);
    const sWallet = wallets.find((w) => id === w.id);
    const isMobile = sWallet?.downloadUrls?.qrCode;
    const isExtension = !!sWallet?.extensionDownloadUrl;
    setSelectedWallet(sWallet);
    if (isMobile && isExtension) {
      changeWalletStep(WalletStep.DownloadOptions);
    } else if (isMobile) {
      changeWalletStep(WalletStep.Download);
    } else {
      changeWalletStep(WalletStep.InstructionsExtension);
    }
  };

  const clearSelectedWallet = () => {
    setSelectedOptionId(undefined);
    setSelectedWallet(undefined);
    setQrCodeUri(undefined);
  };
  const changeWalletStep = (newWalletStep: WalletStep, isBack = false) => {
    if (
      isBack &&
      newWalletStep === WalletStep.Get &&
      initialWalletStep === WalletStep.Get
    ) {
      clearSelectedWallet();
    } else if (!isBack && newWalletStep === WalletStep.Get) {
      setInitialWalletStep(WalletStep.Get);
    } else if (!isBack && newWalletStep === WalletStep.Connect) {
      setInitialWalletStep(WalletStep.Connect);
    }
    setWalletStep(newWalletStep);
  };
  const [initialWalletStep, setInitialWalletStep] = useState<WalletStep>(
    WalletStep.None
  );

  let walletContent = null;
  let socialLoginContent = null;
  let getStartedWithTriaContent = null;

  // biome-ignore lint/nursery/useExhaustiveDependencies: TODO
  useEffect(() => {
    setConnectionError(false);
  }, [walletStep, selectedWallet]);

  // const signInAccount = async (triaName, password) => {
  //   const keyringController = new KeyringController({ baseUrl });
  //   try {
  //     const res = await keyringController.createAccount({ triaName, password });
  //     console.log(`response from signIn: ${JSON.stringify(res)}`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const createAccount = async (id, password) => {
    const keyringController = new KeyringController({
      baseUrl,
    });
    try {
      const res = await keyringController.socialogin({
        password: password,
        platform: SocialLoginTypes.Google,
        userId: id,
        isPasswordLess: false,
      });
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  const createAccountUsingTria = async (triaName, password) => {
    const keyringController = new KeyringController({ baseUrl });
    try {
      const res = await keyringController.createAccount({ triaName, password });
      if (res.success) {
        onClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const popupSize = { width: 400, height: 600 };

  const PopupContainer = useCallback(({ children }) => {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          height: popupSize.height,
          margin: 10,
          width: popupSize.width,
        }}
      >
        {children}
      </div>
    );
  }, []);

  const BorderedContainer = useCallback(
    ({ children, isSelected }: any) => {
      return (
        <div
          style={{
            borderImage: "linear-gradient(#9F8BFF4D, #7053FF4D) 30",
            borderRadius: "16px",
            borderStyle: "solid",
            borderWidth: "1.5px",
            display: "flex",
            overflow: "hidden",
            padding: 16,
          }}
        >
          {children}
        </div>
      );
    },
    [connectType]
  );

  const searchWallet = (
    <div
      style={{
        borderImage: "linear-gradient(#9F8BFF4D, #7053FF4D) 30",
        borderRadius: "16px",
        borderStyle: "solid",
        borderWidth: "1.5px",
        display: "flex",
        flexDirection: "column",
        padding: 16,
      }}
    >
      <Text>Connect a Wallet</Text>
      <input
        placeholder="Search wallet"
        style={{
          background: "rgba(16, 16, 16, 0.05)",
          borderRadius: "35px",
          borderWidth: "0px",
          flex: 1,
          height: "70px",
          marginBottom: "20px",
          marginRight: "12px",
          marginTop: "20px",
          paddingLeft: "20px",
        }}
      />
      <Box className={ScrollClassName} paddingBottom="18">
        {wallets.length > 0 && (
          <Fragment key={0}>
            <Box
              display="flex"
              flexDirection="column"
              gap="4"
              style={{ marginLeft: -6, marginTop: 20 }}
            >
              {wallets.map((wallet) => {
                return (
                  <ModalSelection
                    currentlySelected={wallet.id === selectedOptionId}
                    iconBackground={wallet.iconBackground}
                    iconUrl={wallet.iconUrl}
                    key={wallet.id}
                    name={wallet.name}
                    onClick={() => {
                      selectWallet(wallet);
                      setIsSearchingOtherWallet(false);
                    }}
                    ready={wallet.ready}
                    recent={wallet.recent}
                    testId={`wallet-option-${wallet.id}`}
                  />
                );
              })}
            </Box>
            <Box
              onClick={() => {
                setIsSearchingOtherWallet(true);
              }}
            >
              <Text> Dont have a wallet? </Text>
            </Box>
          </Fragment>
        )}
      </Box>
    </div>
  );

  const imageSize = 96;
  const logo = async () => (await import("./Opensea.png")).default;
  const triaLogo = async () =>
    (await import("../../wallets/walletConnectors/triaWallet/triaWallet.png"))
      .default;
  const triaAndOpenSeaLogoIntersection = (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 24,
      }}
    >
      <div
        style={{
          borderRadius: "48px",
          borderStyle: "solid",
          borderWidth: "0px",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        {" "}
        <AsyncImage height={imageSize} src={triaLogo} width={imageSize} />{" "}
      </div>
      <div style={{ marginRight: -120, position: "absolute" }}>
        {" "}
        <AsyncImage height={imageSize} src={logo} width={imageSize} />{" "}
      </div>
    </div>
  );

  switch (getStartedWithTriaStep) {
    case GetStartedWithTriaStep.CreateTriaName:
      getStartedWithTriaContent = (
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flex: 0.5, flexDirection: "column" }}>
            {triaAndOpenSeaLogoIntersection}
            <Text style={{ alignSelf: "center", marginTop: 24 }}>
              {" "}
              Creating your Tria account{" "}
            </Text>
          </div>
          <div
            style={{
              display: "flex",
              flex: 0.5,
              flexDirection: "row",
              alignItems: "flex-end",
              padding: 16,
            }}
          >
            <BorderedBox>
              <Text> Create your tria name </Text>
              <Text>
                Your @tria is like Gmail, for Web3. Pay, receive and log-in to
                apps on any device, and blockchain.
              </Text>
              <LoginInput
                ctaClicked={(input) => {
                  //perform password validations here
                  console.log(`input: ${input}`);
                  setGetStartedWithTriaStep(
                    GetStartedWithTriaStep.SetupPassword
                  );
                }}
                ctaTitle="Next"
                value={socialFirstName}
              />
            </BorderedBox>
          </div>
        </div>
      );
      break;
    case GetStartedWithTriaStep.SetupPassword:
      getStartedWithTriaContent = (
        <div style={{ display: "flex", flex: 1 }}>
          <EnterTriaPassword
            ctaClicked={(password) => {
              createAccountUsingTria(triaName, password);
            }}
            ctaTitle="Sign up"
            logo={triaAndOpenSeaLogoIntersection}
            primaryPlaceholder="Password"
            screenType={PasswordScreenType.EnterAndConfirmPassword}
            secondaryPlaceholder="Confirm password"
            title="Creating your Tria account"
          />
        </div>
      );
      break;
  }

  switch (socialLoginStep) {
    case SocialLoginStep.NotStarted:
      socialLoginContent = null;
      break;
    case SocialLoginStep.TriaNameCreation:
      socialLoginContent = (
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flex: 0.5, flexDirection: "column" }}>
            {triaAndOpenSeaLogoIntersection}
            <Text style={{ alignSelf: "center", marginTop: 24 }}>
              {" "}
              Creating your Tria account{" "}
            </Text>
          </div>
          <div
            style={{
              display: "flex",
              flex: 0.5,
              flexDirection: "row",
              alignItems: "flex-end",
              padding: 16,
            }}
          >
            <BorderedBox>
              <Text> Create your tria name </Text>
              <Text>
                {" "}
                Your @tria name is your shareable identity to get paid, log-in
                to Web3 applications, or to get on every blockchain network.{" "}
              </Text>
              <LoginInput
                ctaClicked={() =>
                  setSocialLoginStep(SocialLoginStep.ExtraLayerSecurity)
                }
                ctaTitle="Next"
                value={socialFirstName}
              />
            </BorderedBox>
          </div>
        </div>
      );
      break;
    case SocialLoginStep.ExtraLayerSecurity:
      socialLoginContent = (
        <WelcomeView
          enterPasswordCallback={() =>
            setSocialLoginStep(SocialLoginStep.EnterPassword)
          }
          id={userId}
          logo={triaAndOpenSeaLogoIntersection}
          onClose={onClose}
          username={socialFirstName}
        />
      );
      break;
    case SocialLoginStep.EnterPassword:
      socialLoginContent = (
        <div style={{ display: "flex", flex: 1 }}>
          <EnterTriaPassword
            ctaClicked={(password) => {
              createAccount(userId, password);
            }}
            ctaTitle="Sign up"
            logo={triaAndOpenSeaLogoIntersection}
            primaryPlaceholder="Password"
            screenType={PasswordScreenType.EnterAndConfirmPassword}
            secondaryPlaceholder="Confirm password"
            title="Creating your Tria account"
          />
        </div>
      );
    default:
      break;
  }

  switch (walletStep) {
    case WalletStep.None:
      walletContent = (
        <ConnectModalIntro getWallet={() => changeWalletStep(WalletStep.Get)} />
      );
      break;
    case WalletStep.LearnCompact:
      walletContent = (
        <ConnectModalIntro
          compactModeEnabled={compactModeEnabled}
          getWallet={() => changeWalletStep(WalletStep.Get)}
        />
      );
      break;
    case WalletStep.Get:
      walletContent = <GetDetail getWalletDownload={getWalletDownload} />;
      break;
    case WalletStep.Connect:
      walletContent = selectedWallet && (
        <ConnectDetail
          changeWalletStep={changeWalletStep}
          compactModeEnabled={compactModeEnabled}
          connectionError={connectionError}
          onClose={onClose}
          qrCodeUri={qrCodeUri}
          reconnect={connectToWallet}
          wallet={selectedWallet}
        />
      );
      break;
    case WalletStep.DownloadOptions:
      walletContent = selectedWallet && (
        <DownloadOptionsDetail
          changeWalletStep={changeWalletStep}
          wallet={selectedWallet}
        />
      );
      break;
    case WalletStep.Download:
      walletContent = selectedWallet && (
        <DownloadDetail
          changeWalletStep={changeWalletStep}
          wallet={selectedWallet}
        />
      );
      break;
    case WalletStep.InstructionsMobile:
      walletContent = selectedWallet && (
        <InstructionMobileDetail
          connectWallet={selectWallet}
          wallet={selectedWallet}
        />
      );
      break;
    case WalletStep.InstructionsExtension:
      walletContent = selectedWallet && (
        <InstructionExtensionDetail wallet={selectedWallet} />
      );
      break;
    default:
      break;
  }
  const backPress = () => {
    setSelectedOptionId(undefined);
  };

  if (getStartedWithTriaStep !== GetStartedWithTriaStep.NotStarted) {
    return (
      <PopupContainer>
        <div style={{ display: "flex", flex: 1 }}>
          {getStartedWithTriaContent}
        </div>
      </PopupContainer>
    );
  }

  if (continueWithTriaStep === ContinueWithTriaStep.EnterPassword) {
    return (
      <PopupContainer>
        <EnterTriaPassword
          logo={triaAndOpenSeaLogoIntersection}
          primaryText={triaName}
        />
      </PopupContainer>
    );
  }

  if (
    socialLoginStep === SocialLoginStep.TriaNameCreation ||
    socialLoginStep === SocialLoginStep.ExtraLayerSecurity ||
    socialLoginStep === SocialLoginStep.EnterPassword
  ) {
    return (
      <PopupContainer>
        <div style={{ display: "flex", flex: 1 }}>{socialLoginContent}</div>
      </PopupContainer>
    );
  }

  const triaNameEntered = (name) => {
    setTriaName(name);
    setContinueWithTriaStep(ContinueWithTriaStep.EnterPassword);
  };

  const getStartedWithTriaClicked = () => {
    setGetStartedWithTriaStep(GetStartedWithTriaStep.CreateTriaName);
  };

  const socialLoginClicked = async () => {
    try {
      await window.open(`${baseUrl}/api/v1/auth/oauth/google`, "_self");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PopupContainer>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        {selectedOptionId && !searchingOtherWallet && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Box marginRight="16">
              <CloseButton onClose={backPress} />
            </Box>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Box marginRight="16">
            <CloseButton onClose={onClose} />
          </Box>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ marginTop: 24 }}>
            <AsyncImage height={95} src={logo} width={95} />
          </div>
          <div style={{ marginBottom: 24, marginTop: 24 }}>
            <Text color="modalText" size="14">
              Connect with Opensea
            </Text>
          </div>
        </div>

        {!searchingOtherWallet && selectedOptionId == null && (
          <div>
            <BorderedContainer isSelected={connectType === ConnectType.Tria}>
              <Box
                cursor="pointer"
                display="flex"
                flexDirection="column"
                onClick={() => setConnectType(ConnectType.Tria)}
                style={{ flex: 1 }}
              >
                <div display="flex">
                  <TagView
                    backgroundColor="rgba(112, 83, 255, 0.12)"
                    title="decentralized"
                    titleColor="rgba(112, 83, 255, 0.9)"
                  />
                </div>

                {connectType === ConnectType.Tria && (
                  <div>
                    <LoginInput
                      ctaClicked={triaNameEntered}
                      placeholder="@tria name"
                    />
                    <Box
                      onClick={() => getStartedWithTriaClicked()}
                      style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                    >
                      <Text color="modalText" size="14" weight="bold">
                        Get started
                      </Text>
                      <Text color="modalText" size="14">
                        with Tria
                      </Text>
                    </Box>
                  </div>
                )}
              </Box>
            </BorderedContainer>

            <BorderedContainer
              isSelected={connectType === ConnectType.EmailSocial}
            >
              <Box
                cursor="pointer"
                onClick={() => setConnectType(ConnectType.EmailSocial)}
                style={{ flex: 1 }}
              >
                <Text color="modalText" size="18">
                  Email and Social Logins
                </Text>
                {connectType === ConnectType.EmailSocial && (
                  <div>
                    <LoginInput placeholder="your@email.com" />
                  </div>
                )}
                {connectType === ConnectType.EmailSocial && (
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    {socialLogins.map((socialLogin) => {
                      return (
                        <Box
                          cursor="pointer"
                          key={socialLogin.id}
                          onClick={() => {
                            socialLoginClicked(socialLogin);
                          }}
                        >
                          <AsyncImage
                            borderRadius="full"
                            height={40}
                            src={socialLogin.iconUrl}
                            width={40}
                          />
                        </Box>
                      );
                    })}
                  </div>
                )}
              </Box>
            </BorderedContainer>

            <BorderedContainer
              isSelected={connectType === ConnectType.ConnectWallet}
            >
              <Box
                cursor="pointer"
                onClick={() => setConnectType(ConnectType.ConnectWallet)}
                style={{ flex: 1 }}
              >
                <Text color="modalText" size="18">
                  Connect a Wallet
                </Text>
                {connectType === ConnectType.ConnectWallet && (
                  <Box className={ScrollClassName} paddingBottom="18">
                    {wallets.length > 0 && (
                      <Fragment key={0}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          gap="4"
                          style={{ marginLeft: -6, marginTop: 20 }}
                        >
                          {wallets
                            .filter(
                              (_blank, index) => index < numberOfWalletsShown
                            )
                            .map((wallet) => {
                              return (
                                <ModalSelection
                                  currentlySelected={
                                    wallet.id === selectedOptionId
                                  }
                                  iconBackground={wallet.iconBackground}
                                  iconUrl={wallet.iconUrl}
                                  key={wallet.id}
                                  name={wallet.name}
                                  onClick={() => selectWallet(wallet)}
                                  ready={wallet.ready}
                                  recent={wallet.recent}
                                  testId={`wallet-option-${wallet.id}`}
                                />
                              );
                            })}
                        </Box>
                        <Box onClick={() => setIsSearchingOtherWallet(true)}>
                          <Text> Explore other wallets </Text>
                        </Box>
                      </Fragment>
                    )}
                  </Box>
                )}
              </Box>
            </BorderedContainer>
          </div>
        )}
        {!searchingOtherWallet && selectedOptionId && (
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            gap="6"
            height="full"
            justifyContent="center"
            marginX="8"
          >
            {walletContent}
          </Box>
        )}
        {searchingOtherWallet && <Box>{searchWallet}</Box>}
      </div>
    </PopupContainer>
  );
}
