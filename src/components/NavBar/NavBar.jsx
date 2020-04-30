﻿import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import logo from "../../assets/plate-secondary.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import SearchBar from "../SearchBar";

class NavBar extends Component {
  render() {
    const { updateSearchText, signIn, user } = this.props;

    const cookbookLinkJsx = user ? (
      <span className={styles.faStyles}>
        <Link to="cookbook">
          <FontAwesomeIcon icon="book-open" />
        </Link>
      </span>
    ) : (
      <span className={styles.faStyles}>
        <FontAwesomeIcon icon={["fab", "google"]} onClick={signIn} />
      </span>
    );

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
          {cookbookLinkJsx}
        </div>
      </nav>
    );
  }
}

export default NavBar;
