import React from 'react';
import { Text, ThemeContext } from 'grommet';
import { Link as RouterLink } from 'react-router-dom';
import { style } from 'typestyle';

const linkStyle = (color?: string) => ({
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
    color: color,
  },
});

const Link = ({
  to,
  color,
  children,
}: {
  to: string;
  color?: string;
  children: React.ReactNode;
}) => (
  <ThemeContext.Consumer>
    {(theme: any) => (
      <RouterLink to={to} className={style(linkStyle(theme.global.colors[color || 'accent-3']))}>
        <Text color={color || 'accent-3'}>{children}</Text>
      </RouterLink>
    )}
  </ThemeContext.Consumer>
);

export default Link;
