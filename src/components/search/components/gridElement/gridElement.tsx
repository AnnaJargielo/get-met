import React from 'react';
import { Box, Image, Text } from 'grommet';
import { useDataApi } from '../../../../hooks/useDataApi';
import Loader from '../../../loader';

interface GridProps {
  gridItem: number;
}

export interface Artwork {
  title: string;
  primaryImageSmall: string;
}

export const GridElement = ({ gridItem }: GridProps) => {
  const url = `/objects/${gridItem}`;
  const [{ data, isLoading, error }] = useDataApi<Artwork>(url);
  return (
    <Box justify="center">
      {error && (
        <Text alignSelf="center" color="accent-1">
          Artwork not found
        </Text>
      )}
      {isLoading && <Loader />}
      {!isLoading && !error && <Image fit="contain" src={data?.primaryImageSmall} />}
    </Box>
  );
};

export default GridElement;
