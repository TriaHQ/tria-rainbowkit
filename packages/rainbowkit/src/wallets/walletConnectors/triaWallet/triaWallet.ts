/* eslint-disable sort-keys-fix/sort-keys-fix */
import type { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { getWalletConnectUri } from '../../../utils/getWalletConnectUri';
import { isAndroid } from '../../../utils/isMobile';
import type { Wallet } from '../../Wallet';
import type {
  WalletConnectConnectorOptions,
  WalletConnectLegacyConnectorOptions,
} from '../../getWalletConnectConnector';
import { getWalletConnectConnector } from '../../getWalletConnectConnector';

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
}: TriaWalletLegacyOptions | TriaWalletOptions): Wallet => {
  return {
    id: 'tria',
    iconBackground: '#000',
    name: 'Tria Wallet',
    iconUrl: async () => (await import('./triaWallet.png')).default,
    downloadUrls: {
      ios: 'https://apps.apple.com/app/apple-store/id6443944476',
      mobile: 'https://app.tria.so/',
      qrCode: 'https://app.tria.so/',
    },
    createConnector: () => {
      const connector = getWalletConnectConnector({
        projectId,
        chains,
        version: walletConnectVersion,
        options: walletConnectOptions,
      });

      return {
        connector,
        mobile: {
          getUri: async () => {
            const uri = await getWalletConnectUri(
              connector,
              walletConnectVersion
            );
            return isAndroid()
              ? uri
              : `tria://wc?uri=${encodeURIComponent(uri)}`;
          },
        },
        qrCode: {
          getUri: async () =>
            getWalletConnectUri(connector, walletConnectVersion),
          instructions: {
            learnMoreUrl: 'https://tria.so/',
            steps: [
              {
                description: 'Install Tria wallet from App store.',
                step: 'install',
                title: 'Open the Tria app',
              },
              {
                description: 'Create a new wallet or import an existing one.',
                step: 'create',
                title: 'Create or Import a Wallet',
              },
              {
                description:
                  'Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect.',
                step: 'scan',
                title: 'Tap the QR icon and scan',
              },
            ],
          },
        },
        desktop: {
          getUri: async () => {
            const uri = await getWalletConnectUri(
              connector,
              walletConnectVersion
            );
            return `tria://wc?uri=${encodeURIComponent(uri)}`;
          },
        },
      };
    },
  };
};
