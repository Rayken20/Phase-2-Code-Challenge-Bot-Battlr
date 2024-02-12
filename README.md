# Galactic Bot Army Application

This project is a React-based web application called "Galactic Bot Army" where users can manage a collection of bots. Below is an overview of the components involved in the application:

## Components:

## App Component (App.js):

This is the main component of the application.
It utilizes React Router for navigation.
Manages state for the list of bots and the user's bot army.
Fetches bot data from an external API using useEffect.
Renders the NavBar component and sets up routes for different pages.
Passes down necessary props to child components.

## NavBar Component (NavBar.jsx):

Renders the navigation bar for the application.
Includes links to the home page, available bots page, and user's bot army page.
Utilizes react-router-dom for navigation.

## Home Component (Home.jsx):

Renders the home page of the application.
Displays the title of the application and an image.

## Bot Collection Component (BotCollection.jsx):

Renders the list of available bots.
Allows users to add bots to their bot army.
Provides pagination functionality to view more bots.
Utilizes the Bot component to render individual bots.

## Your Bot Army Component (YourBotArmy.jsx):

Renders the list of bots in the user's bot army.
Allows users to release bots from their army.
Utilizes the Bot component to render individual bots.

## Bot Component (Bot.jsx):

Renders individual bot information.
Includes functionalities such as adding to the army and releasing from the army.

## Instructions for Running the Application:

Clone the repository to your local machine.
Navigate to the project directory in your terminal.
Install dependencies by running npm install.
Start the development server with npm start.
Open your browser and navigate to https://phase-2-code-challenge-bot-battlr-rosy.vercel.app/ to view the application.

## Additional Notes:

Ensure you have Node.js installed on your machine to run the application.
Make sure you have an active internet connection to fetch bot data from the external API.

## Author

Github: https://github.com/Rayken20/Phase-2-Code-Challenge-Bot-Battlr/tree/main
