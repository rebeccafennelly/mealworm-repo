import React, { Component } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes/Routes";

import library from "./data/fa-library";
import { UserProvider } from "./context/userContext";
import { CrudProvider } from "./context/crudContext";
import { RecipeProvider } from "./context/recipeContext";

class App extends Component {
  state = {
    recipes: [],
  };

  render() {
    return (
      <UserProvider>
        <RecipeProvider>
          <section className={styles.nav}>
            <NavBar />
          </section>
          <section className={styles.content}>
            <CrudProvider>
              <Routes recipes={this.state.recipes} />
            </CrudProvider>
          </section>
        </RecipeProvider>
      </UserProvider>
    );
  }
}

export default App;
