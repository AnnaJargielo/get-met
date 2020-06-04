import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grommet, Box, Header, Main } from 'grommet';
import Navbar from '../navbar/navbar.view';
import { ROUTES } from '../../routes';
import { deepMerge } from 'grommet/utils';
import { base } from 'grommet/themes';
import customTheme from './app.theme';
import { FavoritesContext } from './context';

const App = () => {
  return (
    <FavoritesContext>
      <Grommet full theme={deepMerge(base, customTheme)}>
        <Box fill>
          <Header height="small">
            <Navbar />
          </Header>
          <Main fill={false} width="large" alignSelf="center">
            <Switch>
              {ROUTES.map((item, idx) => (
                <Route key={idx} {...item} />
              ))}
            </Switch>
          </Main>
        </Box>
      </Grommet>
    </FavoritesContext>
  );
};

export default App;
