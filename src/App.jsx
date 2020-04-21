import React, { Component } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

import library from "./data/fa-library";
import recipes from "./data/recipes";

class App extends Component {
  getCardJsx = (recipe) => (
    <div className={styles.card} key={recipe.idMeal}>
      <Card recipe={recipe} />
    </div>
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
