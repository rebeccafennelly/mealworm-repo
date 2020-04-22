# CODE ALONG NOTES

Show functions being passed down as props. Implement the logic to search through the data file for a matching recipe and to add recipes from the dashboard into your favourites/cookbook

## STEPS

### New components

- Create a reusable CardList component that takes in recipes as props and maps to Card components (to be used in both Dashboard and Cookbook)
- Create a reusable feedback panel component from the panel in the NotFound component (To be used in NotFound, Dashboard and Cookbook)

### Search functionality

- Add state & setState logic into App.jsx for searchText
- Pass the setState from App into NavBar and then into SearchBar so when the user types into the input field it updates the state in App.jsx (check react devtools)
- Pass the searchText down into Routes, then Dashboard and use to filter the recipes in recipes.js
- If there are no matches show the feedback panel else show the matching recipes

### Adding to favourites

- Create a function in the Dashboard container that takes in a recipe and toggles the isFav property to the opposite of what it currently is

## Challenge branch

funcs-as-props-challenge
