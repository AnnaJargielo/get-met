import React from 'react';
import { style } from 'typestyle';
import { Text } from 'grommet';

const justify = style({ textAlign: 'justify' });

const JustifiedText = ({ children, bold }: { children: React.ReactNode; bold?: boolean }) => (
  <Text weight={bold ? 'bold' : 'normal'} className={justify} margin={{ bottom: 'small' }}>
    {children}
  </Text>
);
export default JustifiedText;
