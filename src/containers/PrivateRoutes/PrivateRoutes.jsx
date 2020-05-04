import React, { Component } from "react";
import firebase from "../../firebase";
import { navigate } from "@reach/router";

class PrivateRoutes extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        alert(
          "You must be logged in to view this page. Please click the google icon to sign in with your gmail account."
        );
        navigate("/");
      }
    });
  }

  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

export default PrivateRoutes;
