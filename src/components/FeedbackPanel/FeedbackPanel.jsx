import React, { Component } from "react";
import styles from "./FeedbackPanel.module.scss";

class FeedbackPanel extends Component {
  render() {
    const { header, text } = this.props;
    return (
      <section className={styles.background}>
        <div className={styles.feedback}>
          <h2>{header}</h2>
          <p>{text}</p>
        </div>
      </section>
    );
  }
}

export default FeedbackPanel;
