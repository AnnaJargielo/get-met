import React from 'react';
import { Image } from 'grommet';

const Loader = () => {
  return <Image alt="Loading indicator" src={process.env.PUBLIC_URL + '/loader.svg'} />;
};

export default Loader;
