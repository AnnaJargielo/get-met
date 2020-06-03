import React from 'react';
import { useObject } from '../../../../../hooks';
import GridElement from './gridElement.view';
import { Text, Image } from 'grommet';

const GridElementContainer = ({ objectId }: { objectId: number }) => {
  const [data, isLoading, error] = useObject(objectId);

  return (
    <GridElement>
      {error && (
        <Text alignSelf="center" color="#E4032B">
          Artwork not found
        </Text>
      )}
      {isLoading && <Image src={process.env.PUBLIC_URL + '/loader.svg'} />}
      {!isLoading && !error && <Image fit="contain" src={data?.primaryImageSmall} />}
    </GridElement>
  );
};

export default GridElementContainer;
