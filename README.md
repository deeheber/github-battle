# GitHub Battle Game built with React

**Live Demo [here](https://github-battle-game.herokuapp.com/)**

## Summary
A game that compares two GitHub users info and calculates a score.
A winner is declared based off of number of followers and star gazers on repos.

## To run locally
1. Clone the repo
2. `npm install`
3. `npm start`
4. Navigate to `http://localhost:3000/` in a web browser

## Dev Environment setup
1. `npm run dev`
2. Navigate to `http://localhost:8080/` in a web browser
3. `npm run production` will create a new build for the prod environment

## GitHub API info
In order to prevent blocked API calls once the rate limit is reached, register your application and get a Client ID and Client Secret.

More info [here](https://developer.github.com/v3/oauth/) 

Change the ID variable in `/app/utils/githubHelper` to your ID and add the secret as an environment variable.

*Don't push your Client Secret to a public facing repository such as GitHub*

## Technologies/resources used
- react
- bootstrap
- axios
- babel
- webpack
- GitHub api
- sentry