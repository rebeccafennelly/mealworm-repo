import React, { Component } from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { placeholder } = this.props;

    const input = this.state.isOpen ? (
      <input type="text" placeholder={placeholder} />
    ) : null;

    return (
      <div className={styles.search}>
        {input}
        <span className={styles.fa} onClick={this.toggleOpen}>
          <FontAwesomeIcon icon="search" />
        </span>
      </div>
    );
  }
}

export default SearchBar;
