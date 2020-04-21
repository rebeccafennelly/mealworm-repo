import React, { Component } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";

import library from "./data/fa-library";
import Routes from "./containers/Routes/Routes";

class App extends Component {
  render() {
    return (
      <>
        <section className={styles.nav}>
          <NavBar />
        </section>
        <section className={styles.content}>
          <Routes />
        </section>
      </>
    );
  }
}

export default App;
