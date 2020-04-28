import React, { Component } from "react";
import styles from "./CardBack.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from "../List";

class CardBack extends Component {
  state = {
    isFav: this.props.recipe.isFav,
  };

  shortenInstructions = (instructions) =>
    instructions.length < 300
      ? instructions
      : instructions.substring(0, 200) + "...";

  toggleFav = (e) => {
    e.stopPropagation();
    this.props.toggleFav(this.props.recipe);
    this.setState({ isFav: !this.state.isFav });
  };

  render() {
    const { ingredients, name, instructions } = this.props.recipe;

    const heartIcon = this.state.isFav ? ["fas", "heart"] : ["far", "heart"];

    return (
      <section className={styles.cardBack}>
        <span className={styles.heart} onClick={this.toggleFav}>
          <FontAwesomeIcon icon={heartIcon} />
        </span>
        <h2>{name}</h2>
        <h3>Instructions</h3>
        <p>{this.shortenInstructions(instructions)}</p>
        <h3>Ingredients</h3>
        <div className={styles.list}>
          <List items={ingredients} />
        </div>
      </section>
    );
  }
}

export default CardBack;
