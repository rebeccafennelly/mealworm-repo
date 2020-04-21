import React, { Component } from "react";
import { Router } from "@reach/router";

import Dashboard from "../Dashboard";
import Cookbook from "../Cookbook";
import NotFound from "../../components/NotFound";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Dashboard path="/" />
        <Cookbook path="cookbook" />
        <NotFound default />
      </Router>
    );
  }
}

export default Routes;
