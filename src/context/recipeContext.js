import React, { Component, createContext } from 'react';

export const RecipeContext = createContext({});

export class RecipeProvider extends Component {
    cleanRecipe = (recipe) => {
        const cleanedRecipe = {
            id: recipe.idMeal,
            name: recipe.strMeal,
            category: recipe.strCategory,
            area: recipe.strArea,
            instructions: recipe.strInstructions,
            thumbnail: recipe.strMealThumb,
            tags: recipe.strTags,
            ingredients: this.getIngredients(recipe),
            source: recipe.strSource,
            dateCreated: new Date().toUTCString(),
            dateModified: null,
            youtube: recipe.strYoutube,
        };
        return cleanedRecipe;
    };

    getIngredients = (recipe) => {
        let ingredients = [];
        Object.keys(recipe).forEach((key) => {
            if (key.includes("Ingr") && recipe[key]) {
                ingredients.push(recipe[key]);
            }
        });
        return ingredients;
    };

    grabRecipes = (searchTerm) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then((res) => res.json())
            .then((res) => {
                const cleanRecipes = res.meals.map(this.cleanRecipe);
                this.setState({ recipes: cleanRecipes });
            })
            .catch((err) => {
                console.log(err);
            });
        // console.log(searchTerm)
    };

    state = {
        recipes: [],
        grabRecipes: this.grabRecipes
    }


    render() {
        return <RecipeContext.Provider value={this.state}>{this.props.children}</RecipeContext.Provider>;
    }
}
