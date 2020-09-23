import { useLocalStore } from 'mobx-react';
import React from 'react';
import { createAppStore } from '../store/appStore';

const AppContext = React.createContext(null);

export const AppProvider = ({ children }) => {
  const appStore = useLocalStore(createAppStore);
  return <AppContext.Provider value={appStore}>{children}</AppContext.Provider>;
};

export const useAppStore = () => React.useContext(AppContext);
