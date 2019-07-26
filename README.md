# TearBoty

TearBoty is an twitter bot for searching locations using emojis.

![Bot](http://i.imgur.com/DFkyqLU.png)

## Prerequisites

* [Git](https://git-scm.com/) - Git
* [Node.js](https://nodejs.org/en/) - Node.js

## Running

The bot can be run locally and also deployed to your own server. You will need to register your own Twitter app and set the credentials in 'config/auth.js'.

### Twitter
````
# Create an Twitter application
Create an application on https://developer.twitter.com/en/apps.

# Get keys and tokens
Access application details and click on 'Keys and tokens' button.

# Configure
Get your credentials and set in 'config/auth.js'.
````

### Google Places
````
# Google console
Go to the Google Cloud Platform Console on https://cloud.google.com/console/google/maps-apis/overview.

# Select a project
From the Project drop-down menu, select or create the project for which you want to add an API key.

# Select a service
From the navigation menu, select APIs & Services > Library and search for 'Places'.

# Enable API Google Places
Access 'API Google Places' and a new page will open up, click on the 'Enable' button.

# Get credentials
On de API Google Places details, click on credentials, copy API key and set in 'config/auth.js'.
````

### Run
````
# Install dependencies
npm install

# Run
npm start
````

## Built With

* [Node.js](https://nodejs.org/en/)

## Authors

* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)