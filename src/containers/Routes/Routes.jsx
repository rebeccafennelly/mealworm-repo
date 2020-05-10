import React, { Component } from "react";
import { Router } from "@reach/router";
import { firestore } from "../../firebase";

import Dashboard from "../Dashboard";
import Cookbook from "../Cookbook";
import CreateRecipe from "../CreateRecipe";

import NotFound from "../../components/NotFound";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Dashboard path="/" />
        <PrivateRoutes path="/">
          <Cookbook path="cookbook" />
          <CreateRecipe path="create" />
        </PrivateRoutes>
        <NotFound default />
      </Router>
    );
  }
}

export default Routes;
