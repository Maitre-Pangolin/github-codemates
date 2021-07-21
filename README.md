# [Github Codemates](https://maitre-pangolin.github.io/github-codemates/#/)

An app that allows you to find people that created their github account the same day  as you. 

## Technologies

Built using Create-React-App , React Router and Semantic-Ui-React on top of the Github API and a small back-end service (ADD LINK)

<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' width="50" height="50">
<img src='https://react.semantic-ui.com/logo.png' width="50" height=50">
<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' width="50" height=50">
<img src='https://camo.githubusercontent.com/bf32d0a71c170dbdb203c201579564f2cd7fc54a24720faad61af12c9605c6b5/68747470733a2f2f7265616374747261696e696e672e636f6d2f72656163742d726f757465722f616e64726f69642d6368726f6d652d313434783134342e706e67' width="50" height=50">

## Context

This application was developed for a React class at College Rosemont during a 3 month intensive front-end formation.
Requirements where to build a React app using Hooks and router on top of an API.

## Deployement

Deployement is made through Github Pages.

``` 
npm i gh-pages
```

A ```homepage``` property neeeds to be added to the ```package.json``` file

```json
"homepage":"https://username.github.io/whateveryouwant"
```

``` 
npm run deploy
```
Following a succesfull build and deployement a gh-pages branch should be created and published on GitHub. 
## Development

Building the first version I was limited by the Github API call rate : 
* 10 search /hour
* 60 core ressource access (user / repos ect ..) / hour.
  
It was really frustrating as my application was behaving as expected but my allowed calls would top out in two clicks of the mouse as a single page load after a search can trigger 30 API user calls to get users full informations.

I've decided to create a small back-end service (LINK) to make server-to-server call using a dedicated OAuth2 token to increase the call rate to 30 and 5000 for search and core access respectively. (In progress)

