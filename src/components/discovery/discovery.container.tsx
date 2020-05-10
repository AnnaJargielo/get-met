import React from 'react';
import Discovery from './discovery.view';
import { useObject } from '../../hooks';

const DiscoveryContainer = ({ id }: { id: number }) => {
  const [data, isLoading, error] = useObject(id);

  if (isLoading || data === undefined) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <Discovery discovery={data!} />;
};

export default DiscoveryContainer;
