﻿import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import logo from "../../assets/plate-secondary.png";
import SearchBar from "../SearchBar";

class NavBar extends Component {
  render() {
    return (
      <nav className={styles.navFlex}>
        <div className={styles.navFlex}>
          <img src={logo} alt="FoodWorm logo" />
          <h1>MealWorm</h1>
        </div>
        <div className={styles.searchPanel}>
          <SearchBar />
        </div>
      </nav>
    );
  }
}

export default NavBar;
