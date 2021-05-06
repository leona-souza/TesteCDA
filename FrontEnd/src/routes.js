import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import BaseLista from "./pages/BaseLista";
import CreateUsuario from "./pages/Create/CreateUsuario";
import CreateCrime from "./pages/Create/CreateCrime";
import CreateStatus from "./pages/Create/CreateStatus";
import ViewObject from "./pages/View/ViewObject";

function Routes() {
  return (
    <Switch>
      {/* List */}
      <Route path="/" exact component={Home} />
      <Route path="/users" exact render={props => <BaseLista {...props} type="users" />} />
      <Route path="/crimes" exact render={props => <BaseLista {...props} type="crimes" />} />
      <Route path="/status" exact render={props => <BaseLista {...props} type="status" />} />

      {/* Views */}
      <Route path="/users/detalhes/:id" exact render={props => <ViewObject {...props} type="users" />} />
      <Route path="/crimes/detalhes/:id" exact render={props => <ViewObject {...props} type="crimes" />} />
      <Route path="/status/detalhes/:id" exact render={props => <ViewObject {...props} type="status" />} />

      {/* Manage */}
      <Route path="/users/gerenciar/:id" component={CreateUsuario} />
      <Route path="/crimes/gerenciar/:id" component={CreateCrime} />
      <Route path="/status/gerenciar/:id" component={CreateStatus} />
    </Switch>
  )
}

export default Routes
