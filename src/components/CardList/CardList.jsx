import React, { Component } from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

class CardList extends Component {
  getCardJsx = (recipe) => (
    <div className={styles.card} key={recipe.id}>
      <Card recipe={recipe} />
    </div>
  );

  render() {
    const { recipes } = this.props;
    return (
      <section className={styles.cards}>{recipes.map(this.getCardJsx)}</section>
    );
  }
}

export default CardList;
