import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(() => import("~/components/pages/home"), {
  resolveComponent: ({ Home }) => Home,
});

const NotFound = loadable(() => import("~/components/pages/not-found"), {
  resolveComponent: ({ NotFound }) => NotFound,
});

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
