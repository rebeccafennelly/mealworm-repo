# CODE ALONG NOTES

Implement the logic to call themealdb api when a user types into the searchbar and to display the returned results in the Dashboard container

## STEPS

- Create the state/setState logic for recipes in App.jsx
- Create the fetchRecipes method in App.jsx that updates the state when resolved
- Returned data is not in the desired format (ingredients are listed as individual strings) and must be cleaned
  - Create a method called cleanRecipe and map through the fetch result before updating state
- Edit SearchBar component so parent function is only triggered when the user hits the Enter key (this is more efficient as API not called on every key hit)

### N.B.

Explain to the trainees that this logic typically wouldn't live in App and current solution is not very efficient (every time App state is updated entire page rerenders). This can be abtracted later into something such as Redux/Context.

## Challenge branch

api-call-challenge
