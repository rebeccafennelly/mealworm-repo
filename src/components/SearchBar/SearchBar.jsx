import React, { Component } from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RecipeContext } from "../../context/recipeContext";

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
      <input
        type="text"
        placeholder={placeholder}
        onInput={(e) => this.context.grabRecipes(e.target.value)}
        autoFocus={true}
      />
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

SearchBar.contextType = RecipeContext;

export default SearchBar;
