import React from 'react';
import { Expand, IconProps } from 'grommet-icons';
import { classes } from 'typestyle';
import styles from './icon.styles';
import { ThemeContext } from 'grommet';

interface ExpandIconProps extends IconProps {
  isButton?: boolean;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  viewBox?: string;
}

const ExpandIcon = ({ isButton, ...rest }: ExpandIconProps) => {
  return (
    <ThemeContext.Consumer>
      {(theme: any) => (
        <Expand
          {...rest}
          className={classes(isButton && styles.buttonIcon(theme.global.colors['accent-1']))}
        />
      )}
    </ThemeContext.Consumer>
  );
};

export default ExpandIcon;
