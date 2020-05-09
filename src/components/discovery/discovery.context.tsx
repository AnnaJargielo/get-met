import React, { useState, useEffect, useCallback } from 'react';
import { SearchResult, useSearch } from '../../hooks';
import { getRandomInt } from '../../utils';
import DiscoveryContainer from './discovery.container';

export interface DiscoveryState {
  searchResult: SearchResult;
  selectedId?: number;
  selectNewDiscovery: () => void;
}

const initialState: DiscoveryState = {
  searchResult: {
    objectIDs: [],
    total: 0,
  },
  selectedId: undefined,
  selectNewDiscovery: () => {
    throw new Error('method not implemented');
  },
};

export const DiscoveryContext = React.createContext<DiscoveryState>(initialState);

const DiscoveryContextProvider = () => {
  const [data, isLoading, error] = useSearch({ q: '', hasImages: true });

  const [selectedId, setSelectedId] = useState<number | undefined>();

  useEffect(() => {
    if (data?.total) {
      setSelectedId(data.objectIDs[getRandomInt(0, data.total - 1)]);
    }
  }, [data]);

  const selectNewDiscovery = useCallback(() => {
    if (data?.total) {
      setSelectedId(data.objectIDs[getRandomInt(0, data.total - 1)]);
    }
  }, [data]);

  if (isLoading || data === undefined || selectedId === undefined) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <DiscoveryContext.Provider value={{ searchResult: data, selectedId, selectNewDiscovery }}>
      <DiscoveryContainer />
    </DiscoveryContext.Provider>
  );
};

export default DiscoveryContextProvider;
