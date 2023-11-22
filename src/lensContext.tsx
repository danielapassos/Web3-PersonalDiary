import React, { createContext, useContext, ReactNode } from 'react';
import { LensConfig, production } from '@lens-protocol/react-web';
import { bindings as wagmiBindings } from '@lens-protocol/wagmi';
import { LensProvider as Provider } from '@lens-protocol/react-web';

const LensContext = createContext(null);

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: production,
};

type LensContextProviderProps = {
  children: ReactNode;
};

export const LensContextProvider = ({ children }: LensContextProviderProps) => {
  return (
    <Provider config={lensConfig}>
      {children}
    </Provider>
  );
};

export const useLens = () => useContext(LensContext);
