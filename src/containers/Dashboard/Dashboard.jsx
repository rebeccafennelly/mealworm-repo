import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import Card from "../../components/Card";
import recipes from "../../data/recipes";

class DashBoard extends Component {
  getCardJsx = (recipe) => (
    <div className={styles.card} key={recipe.idMeal}>
      <Card recipe={recipe} />
    </div>
  );
  render() {
    return (
      <section className={styles.cards}>{recipes.map(this.getCardJsx)}</section>
    );
  }
}

export default DashBoard;
