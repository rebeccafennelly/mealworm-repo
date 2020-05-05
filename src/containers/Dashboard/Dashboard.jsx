import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import CardList from "../../components/CardList/CardList";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";
import { firestore } from "../../firebase";

class DashBoard extends Component {
  toggleFav = (recipe) => {
    if (this.props.user) {
      recipe.isFav = !recipe.isFav;
      recipe.isFav
        ? this.props.addToCookbook(recipe)
        : this.removeFromCookbook(recipe);
    } else {
      alert(
        "You must be logged in to edit your cookbook. Please click the google icon to sign in with your gmail account."
      );
    }
  };

  removeFromCookbook = (recipe) => {
    firestore
      .collection("recipes")
      .doc(recipe.id + this.props.user.uid)
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
