import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import recipes from "../../data/recipes";
import CardList from "../../components/CardList/CardList";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";
import { firestore } from "../../firebase";

class DashBoard extends Component {
  toggleFav = (recipe) => {
    recipe.isFav = !recipe.isFav;
    recipe.isFav ? this.addToCookbook(recipe) : this.removeFromCookbook(recipe);
  };

  addToCookbook = (recipe) => {
    firestore
      .collection("recipes")
      .doc(recipe.id)
      .set(recipe)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  removeFromCookbook = (recipe) => {
    firestore
      .collection("recipes")
      .doc(recipe.id)
      .delete()
      .then(this.setCookbookState)
      .catch((err) => console.log(err));
  };

  render() {
    const { recipes } = this.props;

    const contentJsx = recipes.length ? (
      <CardList recipes={recipes} toggleFav={this.toggleFav} />
    ) : (
      <FeedbackPanel
        header="No recipes"
        text="Type into the searchbar to find your desired meal"
      />
    );

    return <section className={styles.dashboard}>{contentJsx}</section>;
  }
}

export default DashBoard;
