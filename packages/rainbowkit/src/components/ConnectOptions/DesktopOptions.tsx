import axios from "axios";
import { KeyringController } from "@tria-sdk/web";
import { IframeController } from "@tria-sdk/connect";
import AnimateHeight from "react-animate-height";
import "../../css/index.css";
import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  useSocialLoginConnectors,
  SocialLoginTypes,
} from "../../socialLogins/socialLoginConnectors";
import {
  useOnboardingConnectOptions,
  ConnectOptionsType,
} from "../OnboardingConnectOptions/OnboardingConnectOptions";
import { isSafari } from "../../utils/browsers";
import {
  WalletConnector,
  useWalletConnectors,
} from "../../wallets/useWalletConnectors";
import { AsyncImage } from "../AsyncImage/AsyncImage";
import { Box } from "../Box/Box";
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
import { touchableStyles } from "../../css/touchableStyles";
import TagView from "../TagView/TagView";
import { Text } from "../Text/Text";
import WelcomeView from "../Welcome/Welcome";
import WelcomeToTria from "../WelcomeToTria/WelcomeToTria";
import EnterTriaNameComponent from "../EnterTriaName/EnterTriaName";
import HomeBackgroundVector from "../SVG/HomeBackgroundVector";
import TriaVector from "../SVG/TriaVector";
import GoogleIcon from "../SVG/GoogleIcon";
import XIcon from "../SVG/XIcon";
import PoweredByTriaVector from "../SVG/PoweredByTriaVector";
import { BorderedContainer } from "../BorderedContainer/BorderedContainer";
import { BackButton } from "../BackButton/BackButton";

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
    useState<boolean>(false);
  const [isWelcomeToTriaScreenBeingShown, setIsWelcomeToTriaScreenBeingShown] =
    useState<boolean>(false);

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
  const onboardingConnectOptions = useOnboardingConnectOptions();

  const baseUrl = "http://localhost:8000";

  const wallets = useWalletConnectors()
    .filter((wallet) => wallet.ready || !!wallet.extensionDownloadUrl)
    .sort((a, b) => a.groupIndex - b.groupIndex);

  const [loginIframeUrl, setLoginIframeUrl] = useState("");
  const [iframeController, setIframeController] = useState(null);
  const [eventType, setEventType] = useState("");
  const iglobalData = new Map();
  const [globalData, setGlobalData] = useState(iglobalData);

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

  useEffect(() => {
    console.log({ globalData });
  }, [globalData]);

  useEffect(() => {
    if (iframeController !== null) {
      if (eventType)
        window.addEventListener("message", (event) => {
          console.log({ eventType });
          // data response type mentioned below in postMessage response structure
          const data = iframeController?.handleMessageFromIframe(
            event,
            eventType
          );
          const tempMap = new Map();
          tempMap.set(`${eventType}`, data);
          console.log({ tempMap });
          const newMap = new Map([...globalData, ...tempMap]);
          setGlobalData(newMap);
        });

      return () =>
        window.removeEventListener("message", (event) =>
          iframeController?.handleMessageFromIframe(event, eventType)
        );
    }
  }, [loginIframeUrl, iframeController, eventType]);

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

  const imageSize = 96;
  const logo = async () => (await import("./Opensea.png")).default;
  const triaLogo = async () =>
    (await import("../../wallets/walletConnectors/triaWallet/triaWallet.png"))
      .default;

  const animationTiming = 300;
  const animationDelay = 100;
  const loginOptionFixedHeight = 26;

  const triaAndOpenSeaLogoIntersection = (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 28,
        marginRight: 36,
      }}
    >
      <div
        style={{
          borderRadius: "58px",
          borderStyle: "solid",
          borderWidth: "0px",
          overflow: "hidden",
          marginTop: 10,
          marginLeft: 10,
          zIndex: 2,
        }}
      >
        {" "}
        <AsyncImage
          height={imageSize + 20}
          src={triaLogo}
          width={imageSize + 20}
        />{" "}
      </div>
      <div style={{ marginRight: -120, position: "absolute" }}>
        {" "}
        <AsyncImage height={imageSize} src={logo} width={imageSize} />{" "}
      </div>
    </div>
  );

  let walletContent = null;
  let socialLoginContent = null;
  let getStartedWithTriaContent = null;
  const connectLogo = (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginTop: -10,
      }}
    >
      <div style={{ marginTop: 24 }}>
        <AsyncImage height={95} src={logo} width={95} />
      </div>
      <div
        style={{
          marginBottom: 24,
          marginTop: 24,
          color: "rgba(16, 16, 16, 0.8)",
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        <Text
          color="modalText"
          size="14"
          style={{
            color: "rgba(16, 16, 16, 1.0)",
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          Connect with Opensea
        </Text>
      </div>
    </div>
  );

  const triaNameEntered = (name) => {
    setTriaName(name);
    setContinueWithTriaStep(ContinueWithTriaStep.EnterPassword);
  };

  const loginViaTriaSection = (
    <BorderedContainer isSelected={connectType === ConnectType.Tria}>
      <AnimateHeight
        duration={animationTiming}
        delay={animationDelay}
        height={
          connectType === ConnectType.Tria ? "auto" : loginOptionFixedHeight
        }
      >
        <Box
          cursor="pointer"
          flexDirection="column"
          onClick={() => setConnectType(ConnectType.Tria)}
          style={{ flex: 1 }}
        >
          <div>
            <TagView
              backgroundColor="rgba(112, 83, 255, 0.12)"
              title="private"
              titleColor="rgba(112, 83, 255, 0.9)"
              width={64}
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
                <Text
                  color="accentColor"
                  size="14"
                  weight="bold"
                  style={{
                    color: "rgba(50, 50, 50, 1.0)",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Get started with Tria
                </Text>
              </Box>
            </div>
          )}
        </Box>
      </AnimateHeight>
    </BorderedContainer>
  );

  const loginViaSocialSection = (
    <BorderedContainer isSelected={connectType === ConnectType.EmailSocial}>
      <AnimateHeight
        duration={animationTiming}
        delay={animationDelay}
        height={
          connectType === ConnectType.EmailSocial
            ? "auto"
            : loginOptionFixedHeight
        }
      >
        <Box
          onClick={() => setConnectType(ConnectType.EmailSocial)}
          style={{ flex: 1 }}
        >
          <TagView
            actionText="Email & Social"
            backgroundColor="rgba(241, 84, 169, 0.12)"
            title="fast"
            titleColor="rgba(241, 84, 169, 0.9)"
            width={48}
          />
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
              {socialLogins.map((socialLogin, index) => {
                return (
                  <Box
                    cursor="pointer"
                    key={socialLogin.id}
                    onClick={() => {
                      console.log(
                        `index: ${index} social login: ${socialLogins[index].type}`
                      );
                      socialLoginClicked(index);
                    }}
                  >
                    {socialLogin.type === SocialLoginTypes.Google && (
                      <GoogleIcon />
                    )}
                    {socialLogin.type === SocialLoginTypes.X && <XIcon />}
                    {socialLogin.type !== SocialLoginTypes.Google &&
                      socialLogin.type !== SocialLoginTypes.X && (
                        <AsyncImage
                          borderRadius="full"
                          height={40}
                          src={socialLogin.iconUrl}
                          width={40}
                        />
                      )}
                  </Box>
                );
              })}
            </div>
          )}
        </Box>
      </AnimateHeight>
    </BorderedContainer>
  );

  const loginViaExternalWalletSection = (
    <BorderedContainer isSelected={connectType === ConnectType.ConnectWallet}>
      <AnimateHeight
        duration={animationTiming}
        delay={animationDelay}
        height={
          connectType === ConnectType.ConnectWallet
            ? "auto"
            : loginOptionFixedHeight
        }
      >
        <Box
          cursor="pointer"
          onClick={() => setConnectType(ConnectType.ConnectWallet)}
          style={{ flex: 1 }}
        >
          <Text
            color="modalText"
            size="18"
            style={{
              color: "rgba(50, 50, 50, 1.0)",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
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
                      .filter((_blank, index) => index < numberOfWalletsShown)
                      .map((wallet) => {
                        return (
                          <ModalSelection
                            currentlySelected={wallet.id === selectedOptionId}
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
                    <Text color="accentColor"> Explore other wallets </Text>
                  </Box>
                </Fragment>
              )}
            </Box>
          )}
        </Box>
      </AnimateHeight>
    </BorderedContainer>
  );

  useEffect(() => {
    setConnectionError(false);
  }, [walletStep, selectedWallet]);

  const signInUsingTria = async (triaName, password) => {
    const iframeController = new IframeController({
      walletUrl: "https://tria-wallet.web.app", // wallet.tria.so
      parentUrl: "http://localhost:3001", // get your own base url
    });
    if (iframeController !== null) {
      setIframeController(iframeController);
      const { iframeUrl, eventType } = iframeController.getVault({
        triaName,
        password,
        userId,
      });
      setEventType(eventType);

      console.log(
        `invisible iframe url: ${iframeUrl} and event type: ${eventType}`
      );
      setLoginIframeUrl(iframeUrl);
    }
    // const keyringController = new KeyringController({
    //   baseUrl,
    // });
    // const userId = null;
    // try {
    //   const res = await keyringController.getVault({
    //     triaName,
    //     password,
    //     userId,
    //   });
    //   console.log(`signin res: ${JSON.stringify(res)}`);
    //   setContinueWithTriaStep(ContinueWithTriaStep.EnterUserName);
    //   onClose();
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const createAccountUsingSocialLogin = async (name) => {
    // const keyringController = new KeyringController({
    //   baseUrl,
    // });
    // try {
    //   const res = await keyringController.socialogin({
    //     triaName: name,
    //     platform: SocialLoginTypes.Google,
    //     userId,
    //     isPasswordLess: true,
    //   });
    //   if (res.success) {
    //     onClose();
    //   }
    // } catch (err) {
    //   console.log(err);
    // }

    const iframeController = new IframeController({
      walletUrl: "https://tria-wallet.web.app", // wallet.tria.so
      parentUrl: "http://localhost:3001", // get your own base url
    });
    if (iframeController !== null) {
      setIframeController(iframeController);
      const { iframeUrl, eventType } = iframeController.socialogin({
        triaName: name,
        platform: SocialLoginTypes.Google,
        password: null,
        userId,
        isPasswordLess: true,
      });
      setEventType(eventType);

      console.log(
        `invisible iframe url: ${iframeUrl} and event type: ${eventType}`
      );
      setLoginIframeUrl(iframeUrl);
    }
  };

  const createAccountUsingTria = async (triaName: string, password: string) => {
    // const keyringController = new KeyringController({ baseUrl });
    // try {
    //   const res = await keyringController.createAccount({
    //     triaName,
    //     password,
    //   });
    //   if (res.success) {
    //     setContinueWithTriaStep(ContinueWithTriaStep.EnterUserName);
    //     setSocialLoginStep(SocialLoginStep.NotStarted);
    //     setIsWelcomeToTriaScreenBeingShown(true);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
    const iframeController = new IframeController({
      walletUrl: "https://tria-wallet.web.app", // wallet.tria.so
      parentUrl: "http://localhost:3001", // get your own base url
    });
    const { iframeUrl, eventType } = iframeController.createAccount({
      triaName,
      password,
    });
    setEventType(eventType);

    console.log(
      `invisible iframe url: ${iframeUrl} and event type: ${eventType}`
    );
    setLoginIframeUrl(iframeUrl);
  };

  const isBackButtonHidden = () =>
    (isWelcomeToTriaScreenBeingShown ||
      (connectType === ConnectType.Tria &&
        continueWithTriaStep === ContinueWithTriaStep.EnterUserName) ||
      (connectType === ConnectType.EmailSocial &&
        socialLoginStep === SocialLoginStep.NotStarted) ||
      (connectType === ConnectType.ConnectWallet &&
        searchingOtherWallet === false)) &&
    getStartedWithTriaStep === GetStartedWithTriaStep.NotStarted;

  const backButtonClicked = () => {
    if (getStartedWithTriaStep !== GetStartedWithTriaStep.NotStarted) {
      switch (getStartedWithTriaStep) {
        case GetStartedWithTriaStep.SetupPassword:
          setGetStartedWithTriaStep(GetStartedWithTriaStep.CreateTriaName);
          break;
        case GetStartedWithTriaStep.CreateTriaName:
          setGetStartedWithTriaStep(GetStartedWithTriaStep.NotStarted);
        default:
          break;
      }
    } else {
      switch (connectType) {
        case ConnectType.Tria:
          {
            switch (continueWithTriaStep) {
              case ContinueWithTriaStep.EnterPassword:
                setContinueWithTriaStep(ContinueWithTriaStep.EnterUserName);
                break;

              default:
                break;
            }
          }
          break;

        case ConnectType.EmailSocial:
          {
            switch (socialLoginStep) {
              case SocialLoginStep.EnterPassword:
                setSocialLoginStep(SocialLoginStep.ExtraLayerSecurity);
                break;
              case SocialLoginStep.ExtraLayerSecurity:
                setSocialLoginStep(SocialLoginStep.TriaNameCreation);
                break;
              case SocialLoginStep.TriaNameCreation:
                setSocialLoginStep(SocialLoginStep.NotStarted);
              default:
                break;
            }
          }
          break;

        case ConnectType.ConnectWallet:
          {
            setIsSearchingOtherWallet(!searchingOtherWallet);
          }
          break;

        default:
          break;
      }
    }
  };

  const popupSize = { width: 400, height: 660 };

  const PopupContainer = useCallback(
    ({ children }) => {
      return (
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            height: popupSize.height,
            margin: 10,
            width: popupSize.width,
            fontFamily: "Montserrat",
          }}
        >
          <iframe
            src={loginIframeUrl}
            title="Login"
            style={{ display: "none" }}
          />
          <div
            style={{ position: "absolute", marginLeft: -10, marginTop: -10 }}
          >
            {" "}
            <HomeBackgroundVector />
          </div>
          {!isBackButtonHidden() && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box marginRight="16" style={{ marginTop: 24, marginLeft: 24 }}>
                <BackButton onClick={backButtonClicked} />
              </Box>
              <Box marginRight="16" style={{ marginTop: 24, marginLeft: 24 }}>
                <CloseButton onClose={onClose} />
              </Box>
            </div>
          )}
          {isBackButtonHidden() && (
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <Box marginRight="16" style={{ marginTop: 24, marginLeft: 24 }}>
                <CloseButton onClose={onClose} />
              </Box>
            </div>
          )}

          {children}
          <div
            style={{
              marginTop: 10,
            }}
          >
            <PoweredByTriaVector />
          </div>
        </div>
      );
    },
    [
      continueWithTriaStep,
      socialLoginStep,
      searchingOtherWallet,
      getStartedWithTriaStep,
      isWelcomeToTriaScreenBeingShown,
    ]
  );

  const searchWallet = (
    <BorderedContainer>
      <Text color="accentColor">Connect a Wallet</Text>
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
              <Text color="accentColor"> Dont have a wallet? </Text>
            </Box>
          </Fragment>
        )}
      </Box>
    </BorderedContainer>
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
            <Text
              color="accentColor"
              style={{ alignSelf: "center", marginTop: 24 }}
            >
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
            <BorderedContainer>
              <Text
                color="accentColor"
                style={{
                  color: "rgba(51, 51, 51, 1.0)",
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                {" "}
                Create your tria name{" "}
              </Text>
              <Text
                color="accentColor"
                style={{
                  color: "rgba(128, 128, 128, 1.0)",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Your @tria is like Gmail, for Web3. Pay, receive and log-in to
                apps on any device, and blockchain.
              </Text>
              <LoginInput
                ctaClicked={(input) => {
                  //perform password validations here
                  console.log(`input: ${input}`);
                  setTriaName(input);
                  setGetStartedWithTriaStep(
                    GetStartedWithTriaStep.SetupPassword
                  );
                }}
                ctaTitle="Next"
                value={socialFirstName}
              />
            </BorderedContainer>
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
            <Text
              color="accentColor"
              style={{ alignSelf: "center", marginTop: 24 }}
            >
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
            <BorderedContainer>
              <Text color="accentColor"> Create your tria name </Text>
              <Text color="accentColor">
                {" "}
                Your @tria name is your shareable identity to get paid, log-in
                to Web3 applications, or to get on every blockchain network.{" "}
              </Text>
              <LoginInput
                ctaClicked={(name) => {
                  console.log(`name from callback: ${name}`);
                  setTriaName(name);
                  createAccountUsingSocialLogin(name);
                }}
                ctaTitle="Next"
                value={socialFirstName}
              />
            </BorderedContainer>
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
              // createAccountUsingSocialLogin(userId, password);
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

  if (isWelcomeToTriaScreenBeingShown) {
    return (
      <PopupContainer>
        <WelcomeToTria
          continueClicked={() => {
            setIsWelcomeToTriaScreenBeingShown(false);
            onClose();
          }}
          logo={triaAndOpenSeaLogoIntersection}
          username={triaName}
        />
      </PopupContainer>
    );
  }

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
          ctaClicked={(password) => {
            signInUsingTria(triaName, password);
          }}
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

  const getStartedWithTriaClicked = () => {
    setGetStartedWithTriaStep(GetStartedWithTriaStep.CreateTriaName);
  };

  const socialLoginClicked = async (socialLoginIndex) => {
    const socialNetwork =
      socialLogins[socialLoginIndex].type === SocialLoginTypes.Instagram
        ? "instagram"
        : "google";
    try {
      await window.open(
        `${baseUrl}/api/v1/auth/oauth/${socialNetwork}`,
        "_self"
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PopupContainer>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: popupSize.height * 0.3,
            marginTop: -10,
          }}
        >
          {selectedOptionId && !searchingOtherWallet && (
            <div
              style={{ display: "flex", justifyContent: "flex-start" }}
            ></div>
          )}
          <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
          {connectLogo}
        </div>
        {!searchingOtherWallet && selectedOptionId == null && (
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              gap: "16px",
              justifyContent: "flex-start",
              marginTop: 16,
            }}
          >
            {onboardingConnectOptions.map((connectOption) => {
              switch (connectOption) {
                case ConnectOptionsType.Tria:
                  return <Box> {loginViaTriaSection} </Box>;
                  break;
                case ConnectOptionsType.Social:
                  return <Box> {loginViaSocialSection} </Box>;
                  break;
                case ConnectOptionsType.ExternalWallets:
                  return <Box> {loginViaExternalWalletSection} </Box>;
                default:
                  break;
              }
            })}
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
