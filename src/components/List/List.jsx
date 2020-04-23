import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./List.module.scss";

class List extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map((item, index) => (
          <li key={item + index}>
            <span>
              <FontAwesomeIcon icon="arrow-right"></FontAwesomeIcon>
            </span>
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
