import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import recipes from "../../data/recipes";
import CardList from "../../components/CardList/CardList";

class DashBoard extends Component {
  render() {
    return <CardList recipes={recipes} />;
  }
}

export default DashBoard;
