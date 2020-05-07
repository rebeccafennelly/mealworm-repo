import React, { Component } from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

class Card extends Component {
  state = {
    isFaceDown: false,
  };

  flipCard = () => {
    this.setState({ isFaceDown: !this.state.isFaceDown });
  };

  render() {
    const { recipe } = this.props;
    const flipStyles = this.state.isFaceDown ? styles.faceDown : "";

    return (
      <section
        className={`${styles.recipeCard} ${flipStyles}`}
        onClick={() => this.flipCard()}
      >
        <div className={styles.front}>
          <CardFront recipe={recipe} />
        </div>
        <div className={styles.back}>
          <CardBack recipe={recipe} />
        </div>
      </section>
    );
  }
}

export default Card;
