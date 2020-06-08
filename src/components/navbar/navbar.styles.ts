import { style } from 'typestyle';

const navbarElement = (color: string) =>
  style({
    fontSize: '1.2rem',
    textDecoration: 'none',
    color: color,
  });

export default {
  logoFirst: style({
    fontSize: '5rem',
    fontFamily: 'Otamendi',
  }),
  logoSecond: style({
    fontSize: '6.5rem',
    height: 32,
    marginLeft: '2rem',
    fontFamily: 'ButlerBold',
  }),
  logoStacked: style({ height: '72px' }),
  navbarElementActive: style({
    fontWeight: 600,
  }),
  navbarElement,
};
