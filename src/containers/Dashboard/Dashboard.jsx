import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import CardList from "../../components/CardList/CardList";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";
import { RecipeContext } from "../../context/recipeContext";

class DashBoard extends Component {
  render() {
    const { recipes } = this.context;

    const contentJsx = recipes.length ? (
      <CardList recipes={recipes} />
    ) : (
      <FeedbackPanel
        header="No recipes"
        text="Type into the searchbar to find your desired meal"
      />
    );

    return <section className={styles.dashboard}>{contentJsx}</section>;
  }
}

DashBoard.contextType = RecipeContext;

export default DashBoard;
