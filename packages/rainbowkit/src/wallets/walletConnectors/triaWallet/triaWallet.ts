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
  ...options
}: TriaWalletLegacyOptions | TriaWalletOptions): Wallet => {
  return {
    id: 'tria',
    iconBackground: '#000',
    name: 'Tria Wallet',
    iconUrl: async () => (await import('./triaWallet.svg')).default,
    downloadUrls: {
      android: 'https://play.google.com/store/apps/details?id=com.ledger.live',
      ios: 'https://apps.apple.com/us/app/ledger-live-web3-wallet/id1361671700',
      mobile: 'https://www.ledger.com/ledger-live',
      qrCode: 'https://ledger.com/ledger-live',
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
