import React, { Component } from "react";
import styles from "./CardBack.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from "../List";

class CardBack extends Component {
  state = {
    isFav: false,
  };

  shortenInstructions = (instructions) =>
    instructions.length < 300
      ? instructions
      : instructions.substring(0, 200) + "...";

  toggleFav = (e) => {
    e.stopPropagation();
    this.setState({ isFav: !this.state.isFav });
  };

  render() {
    const { ingredients, strMeal, strInstructions } = this.props.recipe;

    const heartIcon = this.state.isFav ? ["fas", "heart"] : ["far", "heart"];

    return (
      <section className={styles.cardBack}>
        <span className={styles.heart} onClick={this.toggleFav}>
          <FontAwesomeIcon icon={heartIcon} />
        </span>
        <h2>{strMeal}</h2>
        <h3>Instructions</h3>
        <p>{this.shortenInstructions(strInstructions)}</p>
        <h3>Ingredients</h3>
        <div className={styles.list}>
          <List items={ingredients} />
        </div>
      </section>
    );
  }
}

export default CardBack;
