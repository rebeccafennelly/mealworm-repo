import React, { Component } from "react";
import styles from "./App.module.scss";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import NavBar from "./components/NavBar";

import recipes from "./data/recipes";

class App extends Component {
  getCardFrontJsx = (recipe) => <CardFront recipe={recipe} />;

  render() {
    return (
      <>
        <section className={styles.nav}>
          <NavBar />
        </section>
        <section className={styles.content}>
          {recipes.map(this.getCardFrontJsx)}
          <CardBack recipe={recipes[1]} />
        </section>
      </>
    );
  }
}

export default App;
