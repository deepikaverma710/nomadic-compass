# Nomadic Compass - a React App for a travel project

### Deepika Verma, Kulveer Brar, Mandeep Dhillon

## Overview

Nomadic Compass is a travel app, offering fixed tours. The app is created in React, uses Firebase for authentication, express for server and MongoDb as database.  The app utilizes RESTful API routes to connect to the server. The app is delpoyed using MongoAtlas (database), Heroku (ServerAPI) and Netlify (Client-side)

## Prototype

We had a web template which we used as inspiration for our UI.

<img src = "/assets/RDG.jpg">
<img src = "/assets/RDG1.jpg">
<img src = "/assets/RDG2.jpg">
<img src = "/assets/RDG3.jpg">

#### Current Features: 
Users are able to: 
- login/register 
- search for tours in a pre-defined list of activities, destinations and packages
- buy a package or multiple packages from the cart.
- user can delete packages from the cart.

#### Feautres being built:
- build a service provider role who can upolad packages.
- Form to upload the packages.

#### Nice to have feautres:
- Create a photogallery bucket by using GridFS from MongoAtlas for all tour packages
- Consume a Google API and create maps for the tour packages
- Create user and service provider profile. 

### Deployed application can be seen here(https://nervous-montalcini-fcf9b8.netlify.app/)

## Installation Instructions

Clone this repo and run `npm install`.  
Replace API keys within the .envSAMPLE. You will need to register for Firebase, Heroku and MongoAtlas accounts.

