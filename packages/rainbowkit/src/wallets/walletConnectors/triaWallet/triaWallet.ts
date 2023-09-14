/* eslint-disable sort-keys-fix/sort-keys-fix */
import type { InjectedConnectorOptions } from '@wagmi/core';
import { InjectedConnector } from 'wagmi/connectors/injected';
import type { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { getWalletConnectUri } from '../../../utils/getWalletConnectUri';
import { isAndroid } from '../../../utils/isMobile';
import type { Wallet } from '../../Wallet';
import type {
  WalletConnectConnectorOptions,
  WalletConnectLegacyConnectorOptions,
} from '../../getWalletConnectConnector';
import { getWalletConnectConnector } from '../../getWalletConnectConnector';

declare global {
  interface Window {
    tria: any;
  }
}

export interface TriaWalletLegacyOptions {
  projectId?: string;
  chains: Chain[];
  walletConnectVersion: '1';
  walletConnectOptions?: WalletConnectLegacyConnectorOptions;
}

export interface TriaWalletOptions {
  projectId: string;
  chains: Chain[];
  walletConnectVersion?: '2';
  walletConnectOptions?: WalletConnectConnectorOptions;
}

export const triaWallet = ({
  chains,
  projectId,
  walletConnectOptions,
  walletConnectVersion = '2',
  ...options
}: (TriaWalletLegacyOptions | TriaWalletOptions) &
  InjectedConnectorOptions): Wallet => {
  const isTriaInjected =
    typeof window !== 'undefined' &&
    typeof window.tria !== 'undefined' &&
    window?.tria?.ethereum?.isTria;
  return {
    id: 'tria',
    name: 'Tria Wallet',
    installed:
      typeof window !== 'undefined' &&
      typeof window.tria !== 'undefined' &&
      window?.tria?.ethereum?.isTria
        ? true
        : undefined,
    iconUrl: async () => (await import('./triaWallet.svg')).default,
    iconBackground: '#CC703C',
    downloadUrls: {
      android:
        'https://play.google.com/store/apps/details?id=com.frontierwallet',
      ios: 'https://apps.apple.com/us/app/frontier-crypto-defi-wallet/id1482380988',
      qrCode: 'https://www.frontier.xyz/download',
      chrome:
        'https://chrome.google.com/webstore/detail/frontier-wallet/kppfdiipphfccemcignhifpjkapfbihd',
      browserExtension: 'https://www.frontier.xyz/download',
    },
    createConnector: () => {
      const shouldUseWalletConnect = !isTriaInjected;
      const connector = shouldUseWalletConnect
        ? getWalletConnectConnector({
            chains,
            projectId,
            options: walletConnectOptions,
            version: walletConnectVersion,
          })
        : new InjectedConnector({ chains });
      const getUri = async () => {
        const uri = await getWalletConnectUri(connector, walletConnectVersion);
        return isAndroid() ? `tria://wc?uri=${encodeURIComponent(uri)}` : uri;
      };
      return {
        connector: new InjectedConnector({
          chains,
          options: {
            getProvider: () => {
              const getTria = (tria?: any) =>
                tria?.ethereum ? tria?.ethereum : undefined;
              if (typeof window === 'undefined') return;
              return getTria(window.tria);
            },
            ...options,
          },
        }),
        mobile: {
          getUri: shouldUseWalletConnect ? getUri : undefined,
        },
        qrCode: shouldUseWalletConnect
          ? {
              getUri,
              instructions: {
                learnMoreUrl: 'https://help.frontier.xyz/en/',
                steps: [
                  {
                    description:
                      'We recommend putting Frontier Wallet on your home screen for quicker access.',
                    step: 'install',
                    title: 'Open the Frontier Wallet app',
                  },
                  {
                    description:
                      'Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.',
                    step: 'create',
                    title: 'Create or Import a Wallet',
                  },
                  {
                    description:
                      'After you scan, a connection prompt will appear for you to connect your wallet.',
                    step: 'scan',
                    title: 'Tap the scan button',
                  },
                ],
              },
            }
          : undefined,
        extension: {
          instructions: {
            learnMoreUrl:
              'https://help.frontier.xyz/en/articles/6967236-setting-up-frontier-on-your-device',
            steps: [
              {
                description:
                  'We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.',
                step: 'install',
                title: 'Install the Frontier Wallet extension',
              },
              {
                description:
                  'Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.',
                step: 'create',
                title: 'Create or Import a Wallet',
              },
              {
                description:
                  'Once you set up your wallet, click below to refresh the browser and load up the extension.',
                step: 'refresh',
                title: 'Refresh your browser',
              },
            ],
          },
        },
      };
    },
  };
};
