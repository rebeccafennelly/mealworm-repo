import React, { Component } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";

import library from "./data/fa-library";
import Routes from "./containers/Routes/Routes";

class App extends Component {
  state = {
    searchText: "",
  };

  updateSearchText = (searchText) => {
    this.setState({ searchText });
  };

  render() {
    return (
      <>
        <section className={styles.nav}>
          <NavBar updateSearchText={this.updateSearchText} />
        </section>
        <section className={styles.content}>
          <Routes searchText={this.state.searchText} />
        </section>
      </>
    );
  }
}

export default App;
