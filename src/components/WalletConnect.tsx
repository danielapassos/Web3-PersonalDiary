import React from 'react';
import { useConnect, useAccount, useDisconnect } from 'wagmi';

const WalletConnect = () => {
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const { connector: activeConnector, isConnected } = useAccount();

  return (
    <div>
      {isConnected && activeConnector && <div>Connected to {activeConnector.name}</div>}
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {isLoading && pendingConnector?.id === connector.id && ' (connecting)'}
        </button>
      ))}
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default WalletConnect;
