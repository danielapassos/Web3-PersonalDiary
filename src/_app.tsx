import { WagmiConfig, createConfig, mainnet } from 'wagmi';
import { createPublicClient, http } from 'viem';
import { LensContextProvider } from './lensContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <LensContextProvider>
        <Component {...pageProps} />
      </LensContextProvider>
    </WagmiConfig>
  );
}

export default MyApp;
