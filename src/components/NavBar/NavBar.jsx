﻿import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import logo from "../../assets/plate-secondary.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import SearchBar from "../SearchBar";

class NavBar extends Component {
  render() {
    const { updateSearchText } = this.props;

    return (
      <nav className={styles.navFlex}>
        <Link to="/">
          <div className={styles.navFlex}>
            <img src={logo} alt="FoodWorm logo" />
            <h1>MealWorm</h1>
          </div>
        </Link>
        <div className={styles.searchPanel}>
          <SearchBar
            placeholder="Search for recipes..."
            updateSearchText={updateSearchText}
          />
          <span className={styles.faStyles}>
            <Link to="create">
              <FontAwesomeIcon icon="plus-square" />
            </Link>
          </span>
          <span className={styles.faStyles}>
            <Link to="cookbook">
              <FontAwesomeIcon icon="book-open" />
            </Link>
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
