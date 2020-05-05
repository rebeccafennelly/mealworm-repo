import React, { Component } from "react";
import styles from "./Cookbook.module.scss";
import recipes from "../../data/recipes";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";
import CardList from "../../components/CardList/CardList";
import { firestore } from "../../firebase";

class Cookbook extends Component {
  state = {
    favourites: [],
  };

  componentDidMount() {
    this.setCookbookState();
  }

  setCookbookState = () => {
    firestore
      .collection("recipes")
      .get()
      .then((querySnapshot) => {
        const favourites = querySnapshot.docs
          .filter((doc) => doc.data().uid === this.props.user.uid)
          .map((doc) => doc.data());
        this.setState({ favourites });
      })
      .catch((err) => console.log(err));
  };

  removeFromCookbook = (recipe) => {
    console.log(recipe.id + this.props.user.uid);
    firestore
      .collection("recipes")
      .doc(recipe.id + this.props.user.uid)
      .delete()
      .then(this.setCookbookState)
      .catch((err) => console.log(err));
  };

  render() {
    const contentJsx = this.state.favourites.length ? (
      <CardList
        recipes={this.state.favourites}
        toggleFav={this.removeFromCookbook}
      />
    ) : (
      <FeedbackPanel
        header="No favourites"
        text="Try returning to dahsboard and searching for your meal of choice"
      />
    );

    return <section className={styles.cookbook}>{contentJsx}</section>;
  }
}

export default Cookbook;
