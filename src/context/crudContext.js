import React, { Component, createContext } from 'react';
import { firestore } from '../firebase';
import { UserContext } from './userContext';

export const CrudContext = createContext({});

export class CrudProvider extends Component {

    setCookbookState = () => {
        firestore
            .collection("recipes")
            .get()
            .then((querySnapshot) => {
                const favourites = querySnapshot.docs
                    .filter((doc) => doc.data().uid === this.context.user.uid)
                    .map((doc) => doc.data());
                this.setState({ favourites })
            })
            .catch((err) => console.log(err));
    };

    addToCookbook = (recipe) => {
        firestore
            .collection("recipes")
            .doc()
            .set({ ...recipe, uid: this.context.user.uid })
            .then(this.setCookbookState)
            .catch((err) => console.log(err));
    };

    removeFromCookbook = (recipe) => {
        const query = firestore
            .collection("recipes")
            .where("id", "==", recipe.id)
            .where("uid", "==", this.context.user.uid);

        query.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => doc.ref.delete())
        }).then(this.setCookbookState);
    };


    toggleFav = (recipe) => {
        if (this.context.user) {
            recipe.isFav = !recipe.isFav;
            recipe.isFav
                ? this.addToCookbook(recipe)
                : this.removeFromCookbook(recipe);
        } else {
            alert(
                "You must be logged in to edit your cookbook. Please click the google icon to sign in with your gmail account."
            );
        }
    };

    componentDidMount() {
        this.setCookbookState();
    }

    state = {
        favourites: [],
        toggleFav: this.toggleFav,
        addToCookbook: this.addToCookbook
    }

    render() {
        return (<CrudContext.Provider value={this.state}>{this.props.children}</CrudContext.Provider>);
    }
}

CrudProvider.contextType = UserContext;
