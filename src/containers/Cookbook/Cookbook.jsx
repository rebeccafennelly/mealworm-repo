import React, { Component } from "react";
import styles from "./Cookbook.module.scss";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";
import CardList from "../../components/CardList/CardList";
import { CrudContext } from "../../context/crudContext";

class Cookbook extends Component {

  render() {
    const contentJsx = this.context.favourites.length ? (
      <CardList recipes={this.context.favourites} />
    ) : (
      <FeedbackPanel
        header="No favourites"
        text="Try returning to dahsboard and searching for your meal of choice"
      />
    );

    return <section className={styles.cookbook}>{contentJsx}</section>;
  }
}

Cookbook.contextType = CrudContext;

export default Cookbook;
