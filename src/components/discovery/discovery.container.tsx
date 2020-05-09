import React from 'react';
import Discovery from './discovery.view';
import { useDiscoveryContext } from './hooks';
import { useObject } from '../../hooks';

const DiscoveryContainer = () => {
  const { selectedId, selectNewDiscovery } = useDiscoveryContext();
  const [data, isLoading, error] = useObject(selectedId!);

  if (isLoading || data === undefined) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <Discovery discovery={data} newDiscoveryClick={selectNewDiscovery} />;
};

export default DiscoveryContainer;
