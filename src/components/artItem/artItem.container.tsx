import React, { useState, useEffect } from 'react';
import ArtItem from './artItem.view';
import { Object } from '../../actions';
import { EnvVariables } from '../../utils';

const useArtItem = (id: number): [Object | undefined | null, boolean, Error | null] => {
  const [data, setData] = useState<Object | undefined | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getObject = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${EnvVariables.API_URL}/public/collection/v1/objects/${id}`);
        const object = await response.json();
        setData(object);
      } catch (ex) {
        setError(ex);
        setIsLoading(false);
        setData(null);
      }
      setIsLoading(false);
    };

    getObject();
    // eslint-disable-next-line
  }, [id]);

  return [data, isLoading, error];
};

const ArtItemContainer = ({ id }: { id: number }) => {
  const [object, isLoading, error] = useArtItem(id);
  if (isLoading || object === undefined) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return <ArtItem item={object!} />;
};

export default ArtItemContainer;
