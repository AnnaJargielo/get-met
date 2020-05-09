import { DiscoveryContext } from '../discovery.context';
import { useContext } from 'react';

export const useDiscoveryContext = () => {
  const context = useContext(DiscoveryContext);

  if (!context) {
    throw new Error('useDiscoveryContext cannot be used outside of DiscoveryContext');
  }

  return context;
};
