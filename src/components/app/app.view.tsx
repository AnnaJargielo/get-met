import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grommet, Box, Header, Main } from 'grommet';
import Navbar from '../navbar/navbar.view';
import { ROUTES } from '../../routes';
import { deepMerge } from 'grommet/utils';
import { base, ThemeType } from 'grommet/themes';

const customTheme: ThemeType = {
  button: {
    primary: {
      color: '#e4002b',
    },
    border: {
      color: '#e4002b',
    },
  },
  anchor: {
    fontWeight: 300,
    color: '#000',
  },
};

const App = () => {
  return (
    <Grommet full theme={deepMerge(base, customTheme)}>
      <Box fill>
        <Header height="small">
          <Navbar />
        </Header>
        <Main fill={false}>
          <Switch>
            {ROUTES.map((item, idx) => (
              <Route key={idx} {...item} />
            ))}
          </Switch>
        </Main>
      </Box>
    </Grommet>
  );
};

export default App;
