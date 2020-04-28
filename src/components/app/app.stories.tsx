import React from "react";
import App from "./app.view";
import { BrowserRouter as Router } from "react-router-dom";

const RouterDecorator = (story: () => React.ReactNode) => (
  <Router>{story()}</Router>
);

export default {
  title: "App",
  component: App,
  decorators: [RouterDecorator],
};

export const appView = () => <App />;
