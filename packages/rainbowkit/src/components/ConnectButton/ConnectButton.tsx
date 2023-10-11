import React, { useEffect, useState } from "react";
import {
  ResponsiveValue,
  mapResponsiveValue,
  normalizeResponsiveValue,
} from "../../css/sprinkles.css";
import { touchableStyles } from "../../css/touchableStyles";
import { useConnectionStatus } from "../../hooks/useConnectionStatus";
import { isMobile } from "../../utils/isMobile";
import { AsyncImage } from "../AsyncImage/AsyncImage";
import { Avatar } from "../Avatar/Avatar";
import { Box } from "../Box/Box";
import { DropdownIcon } from "../Icons/Dropdown";
import { useRainbowKitChains } from "../RainbowKitProvider/RainbowKitChainContext";
import { ConnectButtonRenderer } from "./ConnectButtonRenderer";

type AccountStatus = "full" | "avatar" | "address";
type ChainStatus = "full" | "icon" | "name" | "none";

export interface ConnectButtonProps {
  accountStatus?: ResponsiveValue<AccountStatus>;
  showBalance?: ResponsiveValue<boolean>;
  chainStatus?: ResponsiveValue<ChainStatus>;
  label?: string;
  loggedInStatusChanged: (boolean) => void;
}

const defaultProps = {
  accountStatus: "full",
  chainStatus: { largeScreen: "full", smallScreen: "icon" },
  label: "Login",
  showBalance: { largeScreen: true, smallScreen: false },
} as const;

export function ConnectButton({
  accountStatus = defaultProps.accountStatus,
  chainStatus = defaultProps.chainStatus,
  label = defaultProps.label,
  showBalance = defaultProps.showBalance,
  loggedInStatusChanged,
}: ConnectButtonProps) {
  const chains = useRainbowKitChains();
  const connectionStatus = useConnectionStatus();

  const [loggedInStatus, setLoggedInStatus] = useState(false);

  return (
    <ConnectButtonRenderer>
      {({
        account,
        chain,
        mounted,
        openAccountModal,
        openChainModal,
        openConnectModal,
      }) => {
        const ready = mounted && connectionStatus !== "loading";
        const unsupportedChain = chain?.unsupported ?? false;

        const [userDisplayName, setUserDisplayName] = useState(null);
        const [userAddress, setUserAddress] = useState(null);

        useEffect(() => {
          const isPopupOpen =
            JSON.parse(localStorage.getItem("isModalOpen")) === true;
          if (isPopupOpen) {
            openConnectModal();
          }
        }, []);

        useEffect(() => {
          const userDisplayName = localStorage.getItem("userDisplayName");
          if (userDisplayName) {
            setUserDisplayName(userDisplayName);
          }

          const address = localStorage.getItem("address");
          if (address) {
            setUserAddress(address);
          }
          console.log(
            `user name : ${userDisplayName}, wallet status: ${
              ready && account && connectionStatus === "connected"
            }, combined status: ${
              isUserLoggedInAsNonWallet() ||
              (ready && account && connectionStatus === "connected")
            } and address: ${userAddress}`
          );
          setLoggedInStatus(
            isUserLoggedInAsNonWallet() ||
              (ready && account && connectionStatus === "connected")
          );
          loggedInStatusChanged(
            isUserLoggedInAsNonWallet() ||
              (ready && account && connectionStatus === "connected")
          );
        });

        useEffect(() => {
          console.log(`updating dapp with status: ${loggedInStatus}`);
          loggedInStatusChanged(loggedInStatus);
        }, [loggedInStatus]);

        const disconnectUser = () => {
          localStorage.removeItem("userDisplayName");
          localStorage.removeItem("address");
          setUserDisplayName(null);
          setUserAddress(null);
          setLoggedInStatus(false);
        };

        const isUserLoggedInAsNonWallet = () => userDisplayName && userAddress;

        if (isUserLoggedInAsNonWallet()) {
          return (
            <>
              <Box
                alignItems="center"
                as="button"
                background="connectButtonBackground"
                borderRadius="connectButton"
                boxShadow="connectButton"
                className={touchableStyles({
                  active: "shrink",
                  hover: "grow",
                })}
                color="connectButtonText"
                display="flex"
                fontFamily="body"
                fontWeight="bold"
                onClick={openAccountModal}
                testId="account-button"
                transition="default"
                type="button"
              >
                <Box
                  background={
                    normalizeResponsiveValue(showBalance)[
                      isMobile() ? "smallScreen" : "largeScreen"
                    ]
                      ? "connectButtonInnerBackground"
                      : "connectButtonBackground"
                  }
                  borderColor="connectButtonBackground"
                  borderRadius="connectButton"
                  borderStyle="solid"
                  borderWidth="2"
                  color="connectButtonText"
                  fontFamily="body"
                  fontWeight="bold"
                  paddingX="8"
                  paddingY="6"
                  transition="default"
                >
                  <Box alignItems="center" display="flex" gap="6" height="24">
                    {/* <Box
                    display={mapResponsiveValue(accountStatus, (value) =>
                      value === "full" || value === "avatar" ? "block" : "none"
                    )}
                  >
                    <Avatar
                      address={account.address}
                      imageUrl={account.ensAvatar}
                      loading={account.hasPendingTransactions}
                      size={24}
                    />
                  </Box> */}

                    <Box alignItems="center" display="flex" gap="6">
                      {/* <Box
                      display={mapResponsiveValue(accountStatus, (value) =>
                        value === "full" || value === "address"
                          ? "block"
                          : "none"
                      )}
                    > */}
                      {userDisplayName}
                    </Box>
                  </Box>
                </Box>
                {/* </Box> */}
              </Box>
              <Box
                alignItems="center"
                as="button"
                background="connectButtonBackground"
                borderRadius="connectButton"
                boxShadow="connectButton"
                className={touchableStyles({
                  active: "shrink",
                  hover: "grow",
                })}
                color="connectButtonText"
                display="flex"
                fontFamily="body"
                fontWeight="bold"
                onClick={disconnectUser}
                testId="account-button"
                transition="default"
                type="button"
                style={{
                  marginTop: 10,
                }}
              >
                <Box
                  background={
                    normalizeResponsiveValue(showBalance)[
                      isMobile() ? "smallScreen" : "largeScreen"
                    ]
                      ? "connectButtonInnerBackground"
                      : "connectButtonBackground"
                  }
                  borderColor="connectButtonBackground"
                  borderRadius="connectButton"
                  borderStyle="solid"
                  borderWidth="2"
                  color="connectButtonText"
                  fontFamily="body"
                  fontWeight="bold"
                  paddingX="8"
                  paddingY="6"
                  transition="default"
                >
                  <Box alignItems="center" display="flex" gap="6" height="24">
                    {/* <Box
                    display={mapResponsiveValue(accountStatus, (value) =>
                      value === "full" || value === "avatar" ? "block" : "none"
                    )}
                  >
                    <Avatar
                      address={account.address}
                      imageUrl={account.ensAvatar}
                      loading={account.hasPendingTransactions}
                      size={24}
                    />
                  </Box> */}

                    <Box alignItems="center" display="flex" gap="6">
                      {/* <Box
                      display={mapResponsiveValue(accountStatus, (value) =>
                        value === "full" || value === "address"
                          ? "block"
                          : "none"
                      )}
                    > */}
                      Logout
                    </Box>
                  </Box>
                </Box>
                {/* </Box> */}
              </Box>
            </>
          );
        }

        return (
          <Box
            display="flex"
            gap="12"
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {ready && account && connectionStatus === "connected" ? (
              <>
                {chain && (chains.length > 1 || unsupportedChain) && (
                  <Box
                    alignItems="center"
                    aria-label="Chain Selector"
                    as="button"
                    background={
                      unsupportedChain
                        ? "connectButtonBackgroundError"
                        : "connectButtonBackground"
                    }
                    borderRadius="connectButton"
                    boxShadow="connectButton"
                    className={touchableStyles({
                      active: "shrink",
                      hover: "grow",
                    })}
                    color={
                      unsupportedChain
                        ? "connectButtonTextError"
                        : "connectButtonText"
                    }
                    display={mapResponsiveValue(chainStatus, (value) =>
                      value === "none" ? "none" : "flex"
                    )}
                    fontFamily="body"
                    fontWeight="bold"
                    gap="6"
                    key={
                      // Force re-mount to prevent CSS transition
                      unsupportedChain ? "unsupported" : "supported"
                    }
                    onClick={openChainModal}
                    paddingX="10"
                    paddingY="8"
                    testId={
                      unsupportedChain ? "wrong-network-button" : "chain-button"
                    }
                    transition="default"
                    type="button"
                  >
                    {unsupportedChain ? (
                      <Box
                        alignItems="center"
                        display="flex"
                        height="24"
                        paddingX="4"
                      >
                        Wrong network
                      </Box>
                    ) : (
                      <Box alignItems="center" display="flex" gap="6">
                        {chain.hasIcon ? (
                          <Box
                            display={mapResponsiveValue(chainStatus, (value) =>
                              value === "full" || value === "icon"
                                ? "block"
                                : "none"
                            )}
                            height="24"
                            width="24"
                          >
                            <AsyncImage
                              alt={chain.name ?? "Chain icon"}
                              background={chain.iconBackground}
                              borderRadius="full"
                              height="24"
                              src={chain.iconUrl}
                              width="24"
                            />
                          </Box>
                        ) : null}
                        <Box
                          display={mapResponsiveValue(chainStatus, (value) => {
                            if (value === "icon" && !chain.iconUrl) {
                              return "block"; // Show the chain name if there is no iconUrl
                            }

                            return value === "full" || value === "name"
                              ? "block"
                              : "none";
                          })}
                        >
                          {chain.name ?? chain.id}
                        </Box>
                      </Box>
                    )}
                    <DropdownIcon />
                  </Box>
                )}

                {!unsupportedChain && (
                  <Box
                    alignItems="center"
                    as="button"
                    background="connectButtonBackground"
                    borderRadius="connectButton"
                    boxShadow="connectButton"
                    className={touchableStyles({
                      active: "shrink",
                      hover: "grow",
                    })}
                    color="connectButtonText"
                    display="flex"
                    fontFamily="body"
                    fontWeight="bold"
                    onClick={openAccountModal}
                    testId="account-button"
                    transition="default"
                    type="button"
                  >
                    {account.displayBalance && (
                      <Box
                        display={mapResponsiveValue(showBalance, (value) =>
                          value ? "block" : "none"
                        )}
                        padding="8"
                        paddingLeft="12"
                      >
                        {account.displayBalance}
                      </Box>
                    )}
                    <Box
                      background={
                        normalizeResponsiveValue(showBalance)[
                          isMobile() ? "smallScreen" : "largeScreen"
                        ]
                          ? "connectButtonInnerBackground"
                          : "connectButtonBackground"
                      }
                      borderColor="connectButtonBackground"
                      borderRadius="connectButton"
                      borderStyle="solid"
                      borderWidth="2"
                      color="connectButtonText"
                      fontFamily="body"
                      fontWeight="bold"
                      paddingX="8"
                      paddingY="6"
                      transition="default"
                    >
                      <Box
                        alignItems="center"
                        display="flex"
                        gap="6"
                        height="24"
                      >
                        <Box
                          display={mapResponsiveValue(accountStatus, (value) =>
                            value === "full" || value === "avatar"
                              ? "block"
                              : "none"
                          )}
                        >
                          <Avatar
                            address={account.address}
                            imageUrl={account.ensAvatar}
                            loading={account.hasPendingTransactions}
                            size={24}
                          />
                        </Box>

                        <Box alignItems="center" display="flex" gap="6">
                          <Box
                            display={mapResponsiveValue(
                              accountStatus,
                              (value) =>
                                value === "full" || value === "address"
                                  ? "block"
                                  : "none"
                            )}
                          >
                            {account.displayName}
                          </Box>
                          <DropdownIcon />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </>
            ) : (
              <Box
                as="button"
                background="accentColor"
                borderRadius="connectButton"
                boxShadow="connectButton"
                className={touchableStyles({ active: "shrink", hover: "grow" })}
                color="accentColorForeground"
                fontFamily="body"
                fontWeight="bold"
                height="40"
                key="connect"
                onClick={() => {
                  localStorage.setItem("isModalOpen", "true");
                  openConnectModal();
                }}
                paddingX="14"
                testId="connect-button"
                transition="default"
                type="button"
              >
                {label}
              </Box>
            )}
          </Box>
        );
      }}
    </ConnectButtonRenderer>
  );
}

ConnectButton.__defaultProps = defaultProps;
ConnectButton.Custom = ConnectButtonRenderer;
