import { ThemeType } from 'grommet/themes';

const MET_BRAND_COLOR = '#E4022B';
const GREY_COLOR = '#C5C5C5';
const BLACK_COLOR = '#000';

const customTheme: ThemeType = {
  button: {
    primary: {
      color: MET_BRAND_COLOR,
    },
    border: {
      color: MET_BRAND_COLOR,
    },
  },
  anchor: {
    fontWeight: 300,
    color: BLACK_COLOR,
  },
  global: {
    colors: {
      'accent-1': MET_BRAND_COLOR,
      'accent-2': GREY_COLOR,
    },
    font: {
      family: 'Roboto-Thin',
    },
  },
};

export default customTheme;
