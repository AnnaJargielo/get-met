import { DiscoveriesGeneratorContext } from '../discoveriesGenerator.context';
import { useContext } from 'react';

export const useDiscoveryGeneratorContext = () => {
  const context = useContext(DiscoveriesGeneratorContext);

  if (!context) {
    throw new Error('useDiscoveryGeneratorContext cannot be used outside of DiscoveryContext');
  }

  return context;
};
