import React from 'react';
import DiscoveriesGeneratorView from './discoveriesGenerator.view';
import { useDiscoveryGeneratorContext } from './hooks';

const DiscoveriesGeneratorContainer = () => {
  const { selectedId, selectNewDiscovery } = useDiscoveryGeneratorContext();

  return (
    <DiscoveriesGeneratorView selectedId={selectedId!} selectNewDiscovery={selectNewDiscovery} />
  );
};

export default DiscoveriesGeneratorContainer;
