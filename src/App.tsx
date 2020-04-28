import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

const About = () => <div>About</div>;
const Users = () => <div>Users</div>;
const Home = () => <div>Home</div>;

export default App;
