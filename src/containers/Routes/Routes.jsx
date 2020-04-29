import React, { Component } from "react";
import { Router } from "@reach/router";
import { firestore } from "../../firebase";

import Dashboard from "../Dashboard";
import Cookbook from "../Cookbook";
import CreateRecipe from "../CreateRecipe";

import NotFound from "../../components/NotFound";

class Routes extends Component {
  addToCookbook = (recipe) => {
    firestore
      .collection("recipes")
      .doc(recipe.id)
      .set(recipe)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    const { recipes } = this.props;
    return (
      <Router>
        <Dashboard
          path="/"
          recipes={recipes}
          addToCookbook={this.addToCookbook}
        />
        <Cookbook path="cookbook" />
        <CreateRecipe path="create" addToCookbook={this.addToCookbook} />
        <NotFound default />
      </Router>
    );
  }
}

export default Routes;
