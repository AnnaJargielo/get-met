import { MET_BRAND_COLOR } from '../app/app.theme';

export default {
  icon: {
    cursor: 'pointer',
    '&:hover': {
      stroke: MET_BRAND_COLOR,
      fill: MET_BRAND_COLOR,
      transition: 'ease-in-out .3s',
    },
  },
};
