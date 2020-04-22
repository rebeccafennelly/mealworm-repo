import React, { Component } from "react";
import styles from "./NotFound.module.scss";
import FeedbackPanel from "../FeedbackPanel/FeedbackPanel";

class NotFound extends Component {
  render() {
    return (
      <section className={styles.background}>
        <FeedbackPanel
          header="Page not found"
          text="Unfortunately this page is not a part of the MealWorm app"
        />
      </section>
    );
  }
}

export default NotFound;
