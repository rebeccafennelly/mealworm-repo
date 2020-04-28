import React, { Component } from "react";
import styles from "./CardFront.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CardFront extends Component {
  render() {
    const { name, thumbnail, youtube, source, area } = this.props.recipe;

    return (
      <div className={styles.cardFront}>
        <img src={thumbnail} alt="Thai Green Curry" />
        <section className={styles.recipeDetails}>
          <h2>{name}</h2>
          <p>
            <FontAwesomeIcon icon="globe" />
            <span>{area}</span>
          </p>
          <div className={styles.links}>
            <a href={source} target="_blank" rel="noopener noreferrer">
              Full recipe
            </a>
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={["fab", "youtube"]}
                className={styles.youtube}
              />
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default CardFront;
