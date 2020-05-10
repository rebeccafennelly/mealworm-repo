import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import logo from "../../assets/plate-secondary.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import SearchBar from "../SearchBar";
import { UserContext } from "../../context/userContext";

class NavBar extends Component {
  getSignInOutJsx = () => {
    const { signIn, signOut, user } = this.context;

    return user ? (
      <span className={styles.faStyles}>
        <FontAwesomeIcon icon={"sign-out-alt"} onClick={signOut} />
      </span>
    ) : (
      <span className={styles.faStyles}>
        <FontAwesomeIcon icon={["fab", "google"]} onClick={signIn} />
      </span>
    );
  };

  render() {
    const disabledClass = this.context.user ? "" : styles.faStylesDisabled;

    return (
      <nav className={styles.navFlex}>
        <div className={styles.navFlex}>
          <Link to="/">
            <img src={logo} alt="FoodWorm logo" />
            <h1>MealWorm</h1>
          </Link>
        </div>
        <div className={styles.searchPanel}>
          <SearchBar placeholder="Search for recipes..." />
          <span className={`${styles.faStyles} ${disabledClass}`}>
            <Link to="create">
              <FontAwesomeIcon icon="plus-square" />
            </Link>
          </span>
          <span className={`${styles.faStyles} ${disabledClass}`}>
            <Link to="cookbook">
              <FontAwesomeIcon icon="book-open" />
            </Link>
          </span>
          {this.getSignInOutJsx()}
        </div>
      </nav>
    );
  }
}

NavBar.contextType = UserContext;

export default NavBar;
