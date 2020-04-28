import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Grommet, grommet, Box } from 'grommet';

const App = () => {
  return (
    <Grommet theme={grommet}>
      <Box align="center" background="neutral-2">
        <div>
          <header>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Box>
    </Grommet>
  );
};

const About = () => <div>About</div>;
const Users = () => <div>Users</div>;
const Home = () => <div>Home</div>;

export default App;
