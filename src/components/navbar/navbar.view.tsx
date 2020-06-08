import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { classes } from 'typestyle';
import { Box, ResponsiveContext, Text, ThemeContext } from 'grommet';
import styles from './navbar.styles';

const LogoElements = ({ stacked }: { stacked?: boolean }) => (
  <Box direction={stacked ? 'column' : 'row'}>
    <Text className={classes(styles.logoFirst, stacked && styles.logoStacked)}>let's get</Text>
    <Text className={styles.logoSecond} color="accent-1">
      MET
    </Text>
  </Box>
);

const Logo = () => (
  <ResponsiveContext.Consumer>
    {(responsive) => <LogoElements stacked={responsive === 'small'} />}
  </ResponsiveContext.Consumer>
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
        <ThemeContext.Consumer key={`${item}-${idx}`}>
          {(theme: any) => (
            <Box margin={{ left: 'small', top: 'small' }}>
              <NavLink
                exact
                to={item.path as string}
                activeClassName={styles.navbarElementActive}
                className={styles.navbarElement(theme.global.colors['accent-3'])}
              >
                {item.title}
              </NavLink>
            </Box>
          )}
        </ThemeContext.Consumer>
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
