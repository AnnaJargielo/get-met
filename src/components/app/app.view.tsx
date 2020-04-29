import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grommet, Box, Header, Main } from 'grommet';
import Navbar from '../navbar/navbar.view';
import { ROUTES } from '../../routes';

const App = () => {
  return (
    <Grommet full>
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
