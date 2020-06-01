import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { style } from 'typestyle';
import { Box, Text } from 'grommet';
import styles from './navbar.styles';

const Logo = () => (
  <span>
    <Text className={style(styles.logoFirst)}>let's get</Text>
    <Text className={style(styles.logoSecond)} color="accent-1">
      MET
    </Text>
  </span>
);

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
        <Box key={idx} margin={{ left: 'small' }}>
          <NavLink
            exact
            to={item.path as string}
            activeClassName={style(styles.navbarElementActive)}
            className={style(styles.navbarElement)}
          >
            {item.title}
          </NavLink>
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
