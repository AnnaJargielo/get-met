import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { style } from 'typestyle';
import { Box } from 'grommet';
import styles from './navbar.styles';

const Logo = () => <div className={style(styles.logo)}>let's get MET</div>;

const NavLayout = ({ children }: { children: React.ReactNode }) => (
  <Box align="center" flex justify="center">
    <Box id="navlayout" flex direction="column">
      {children}
    </Box>
  </Box>
);

const NavRoutes = () => {
  const routes = useMemo(
    () =>
      ROUTES.filter((item) => item.showInNavbar).map((item, idx) => (
        <Box key={idx} margin={{ left: 'xsmall', right: 'xsmall' }}>
          <Link to={item.path as string}>{item.title}</Link>
        </Box>
      )),
    []
  );

  return (
    <Box flex justify="end" direction="row">
      {routes}
    </Box>
  );
};

export const Navbar = () => {
  return (
    <NavLayout>
      <Logo />
      <NavRoutes />
    </NavLayout>
  );
};

export default Navbar;
