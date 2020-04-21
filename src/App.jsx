import React, { Component } from "react";
import styles from "./App.module.scss";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import NavBar from "./components/NavBar";

import library from "./data/fa-library";
import recipes from "./data/recipes";

class App extends Component {
  getCardJsx = (recipe) => (
    <>
      <CardFront recipe={recipe} />
      <CardBack recipe={recipe} />
    </>
  );

  render() {
    return (
      <>
        <section className={styles.nav}>
          <NavBar />
        </section>
        <section className={styles.content}>
          {recipes.map(this.getCardJsx)}
        </section>
      </>
    );
  }
}

export default App;
