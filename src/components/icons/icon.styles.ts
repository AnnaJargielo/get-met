import { style } from 'typestyle';

const buttonIcon = (color: string) => ({
  cursor: 'pointer',
  '&:hover': {
    stroke: color,
    fill: color,
    transition: 'ease-in-out .3s',
  },
});

export default {
  icon: style({
    width: 24,
    height: 24,
  }),
  buttonIcon,
};
