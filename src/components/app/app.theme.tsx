import { ThemeType } from 'grommet/themes';

export const MET_BRAND_COLOR = '#E4022B';
export const GREY_COLOR = '#ADADAD';
export const BLACK_COLOR = '#000';
export const WHITE_COLOR = '#FFF';

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
      'accent-3': BLACK_COLOR,
      'accent-4': WHITE_COLOR,
      focus: GREY_COLOR,
    },
    font: {
      family: 'Roboto-Thin',
    },
  },
};

export default customTheme;
