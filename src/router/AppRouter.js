import React from "react";
import { Router, Route, Switch, HashRouter } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { Account, Home, PageNotFound, Login, Profile } from "../screens";
import { Header } from "../components";

const history = createHistory();

const AppRouter = props => {
  return (
    <HashRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/u/:uid" component={Profile} exact={true} />
          <Route path="/u/:uid/edit" component={Account} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default AppRouter;
