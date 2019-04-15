This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Github Users Info

A React based app that displays a user's repositories and organizations in Github. Simply enter the username and click on *show user info* (or hit Enter key).

This proyect was initially a coding test for a job position, but I intent to continue working on it and add more features.

## Technologies used
The app is only front-end based and retrieves the information from GitHub by making API calls. It uses the following technologies:
 - **React**: front-end library.
 - **Axios**: http requests to GitHub API.
 - **Mobx**: state management.
 - **Material UI**: UI components library.
 - **Font Awesome**: SVG icons.

## Todo
Here are a few improvements/features that I couldn't implement due to time constraints and that I wish to add in the future: 
 - Implement responsiveness. Current it only shows correctly in desktop browser.
 - Unit / integration testing.
 - Better error handling.
 - Improve styling by using **CSS-in-JS**.
 - React Native App (*why not?*).
 - Show user's activity, maybe by using **chart.js**.
 - Overcome API calls limit.

## Methodology
My wokflow basically is the following: I usually try to define a MVP with the bare-minimun features, and then iterate from it, adding the basic features and finally the bonus features.

I organize myself with Trello. For this proyect I created and used the following board: [https://trello.com/b/td0S7f6h](https://trello.com/b/td0S7f6h).

On git, I use commits for each small feature and branches for the mayor ones.

## Try it
You can use use it (here)[http://github-user-info.s3-website.eu-west-2.amazonaws.com/].

## Difficulties encountered
Here are the main obstacles I found during the proyect:
 - **My Github organizations are not showing in API calls**. by default, organizations members visibility is private, each user has to set each organization membership to public manually. [More info](https://help.github.com/en/articles/publicizing-or-hiding-organization-membership).
 - **In order to use mobx-state-tree I have to use decorators**. And React doesn`t get along with decorators by default. [Here is how to use observable without decorators](https://mobx.js.org/best/decorators.html).
 - **Github API only allows 60 requests per hour for unauthenticated users**. I cannot find a solution without exposing my keys in the code. I guess I should create a backend in order to handle authenticated API calls with GitHub, and retreive the data to the front.

## Usage

Once downloaded the files, run the following commands:
```js
npm i //installs all the required dependencies

npm start //runs the app in http://localhost:3000
```

### Build
Run the following command to create a *build* folder with all the app files ready to deploy.
```js
npm run build
```
## Conclussions
This has been a fun proyect, in order to make it I had to learn various technologies that I found very useful, mainly Mobx and Material UI. I intend to keep learning and improve my knowledge of both so I can use them in future projects.
