import React, { Component, createContext } from 'react';
import firebase, { provider } from '../firebase';

export const UserContext = createContext({});

export class UserProvider extends Component {

    componentDidMount() {
        this.getUser();
    }

    signIn = () => {
        firebase.auth().signInWithRedirect(provider);
    };

    signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({ user: null });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    getUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
            user ? this.setState({ user }) : this.setState({ user: null });
        });
    };

    state = {
        user: null,
        signIn: this.signIn,
        signOut: this.signOut
    }

    render() {
        return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
    }
}

// export const UserConsumer = UserContext.consumer;
