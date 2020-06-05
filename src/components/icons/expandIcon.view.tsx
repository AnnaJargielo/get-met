import React from 'react';
import { Expand, IconProps } from 'grommet-icons';
import { style, classes } from 'typestyle';
import styles from './icon.styles';

interface ExpandIconProps extends IconProps {
  isButton?: boolean;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  viewBox?: string;
}

const ExpandIcon = ({ isButton, ...rest }: ExpandIconProps) => {
  return <Expand {...rest} className={classes(isButton && style(styles.icon))} />;
};

export default ExpandIcon;
