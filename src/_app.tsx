import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { LensContextProvider } from './lensContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <LensContextProvider>
        {/* Ensure all components using wagmi hooks are descendants of WagmiConfig */}
        <Component {...pageProps} />
      </LensContextProvider>
    </WagmiConfig>
  );
}

export default MyApp;
