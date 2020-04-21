import React, { Component } from "react";
import styles from "./CardBack.module.scss";

class CardBack extends Component {
  shortenInstructions = (instructions) =>
    instructions.length < 300
      ? instructions
      : instructions.substring(0, 200) + "...";

  render() {
    const { ingredients, strMeal, strInstructions } = this.props.recipe;
    return (
      <section className={styles.cardBack}>
        <h2>{strMeal}</h2>
        <h3>Instructions</h3>
        <p>{this.shortenInstructions(strInstructions)}</p>
        <h3>Ingredients</h3>
      </section>
    );
  }
}

export default CardBack;
