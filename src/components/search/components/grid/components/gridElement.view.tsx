import { Box } from 'grommet';
import React from 'react';

interface GridProps {
  children: React.ReactNode;
}

export const GridElement = ({ children }: GridProps) => {
  return <Box justify="center">{children}</Box>;
};

export default GridElement;
