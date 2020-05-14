import React from 'react';
import { Box, Image, Text } from 'grommet';
import { useDataApi } from '../../../../hooks/useDataApi';

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
        <Text alignSelf="center" color="#E4032B">
          Artwork not found
        </Text>
      )}
      {isLoading && <Image src={process.env.PUBLIC_URL + '/loader.svg'} />}
      {!isLoading && !error && <Image fit="contain" src={data?.primaryImageSmall} />}
    </Box>
  );
};

export default GridElement;
