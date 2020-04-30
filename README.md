# CODE ALONG NOTES

Add authentication the MealWorm app so that users can login with their google account and see their own personal cookbook

## STEPS

- Go to your MealWorm project in the firebase console (This should match the project from the hosting and firestore coaching sessions)
- On the authentication panel click setup signin method and enable google sign in and then save
- Follow the docs for configuring web app for google sign in (https://firebase.google.com/docs/auth/web/google-signin)
- Add provider to src/firebase.js
- Add the google icon fontawesome into the fa-library and add it into NavBar.jsx
- Add user state and signIn method into App.jsx
- Add getUser method to App.jsx and call inside a componentDidMount
- Pass user and signIn into NavBar
  - conditionally render either the google icon or the book icon depending on whether a user object is truthy
  - Add signIn method from props onto the google span onClick

When completed you should be able to login then see the google icon change to a book (after a few seconds) and the user state being populated (in react devtools in browser). Each time you refresh the page the user will be lost.

## Challenge branch

authentication-challenge
