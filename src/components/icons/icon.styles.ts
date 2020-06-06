import { MET_BRAND_COLOR } from '../app/app.theme';

export default {
  buttonIcon: {
    cursor: 'pointer',
    '&:hover': {
      stroke: MET_BRAND_COLOR,
      fill: MET_BRAND_COLOR,
      transition: 'ease-in-out .3s',
    },
  },
  icon: {
    width: 24,
    height: 24,
  },
};
