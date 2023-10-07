export enum ConnectOptionsType {
  Tria,
  Social,
  ExternalWallets,
}

export function useOnboardingConnectOptions() {
  return [
    ConnectOptionsType.Tria,
    ConnectOptionsType.Social,
    ConnectOptionsType.ExternalWallets,
  ];
}
