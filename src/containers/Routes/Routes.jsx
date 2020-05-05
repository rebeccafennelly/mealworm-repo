import React, { Component } from "react";
import { Router } from "@reach/router";
import { firestore } from "../../firebase";

import Dashboard from "../Dashboard";
import Cookbook from "../Cookbook";
import CreateRecipe from "../CreateRecipe";

import NotFound from "../../components/NotFound";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

class Routes extends Component {
  addToCookbook = (recipe) => {
    firestore
      .collection("recipes")
      .doc(recipe.id + this.props.user.uid)
      .set({ ...recipe, uid: this.props.user.uid });
  };

  render() {
    const { recipes, user } = this.props;
    return (
      <Router>
        <Dashboard
          path="/"
          recipes={recipes}
          addToCookbook={this.addToCookbook}
          user={user}
        />
        <PrivateRoutes path="/" user={user}>
          <Cookbook path="cookbook" user={user} />
          <CreateRecipe path="create" addToCookbook={this.addToCookbook} />
        </PrivateRoutes>
        <NotFound default />
      </Router>
    );
  }
}

export default Routes;
