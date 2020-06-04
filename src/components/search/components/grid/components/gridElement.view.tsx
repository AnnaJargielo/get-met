import { Box } from 'grommet';
import React from 'react';

interface GridProps {
  children: React.ReactNode;
}

export const GridElement = React.forwardRef(({ children }: GridProps, ref: any) => {
  return (
    <Box ref={ref} justify="center">
      {children}
    </Box>
  );
});

export default GridElement;
