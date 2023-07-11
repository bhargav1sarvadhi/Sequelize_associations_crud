# Cricket Team Management

 

This project demonstrates how to implement CRUD operations using Express, PostgreSQL, and Sequelize for managing cricket teams and players.

 

## Prerequisites

 

Before getting started, ensure that you have the following installed:

 

- Node.js

- PostgreSQL

- Sequelize (npm package)

- Express (npm package)

 

## Setup

 

1. Clone the repository ```link```.

2. Navigate to the project directory and initialize a new Node.js project:

 

   ```bash

   npm init -y

 

## Install the required dependencies:

 

``` npm install express sequelize pg  ```

 



### Create a PostgreSQL database for your project.

 

## Create a .env file in the project root and add the following environment variables:

 

```

DB_USERNAME=<your_database_username>

DB_PASSWORD=<your_database_password>

DB_DATABASE=<your_database_name>

DB_HOST=<your_database_host>

DB_DIALECT=postgres

 

```

 

## Database Setup

 

- In the Sequelize_crud_associations-2/app.js file, configure the database connection:

 

```const { Sequelize } = require('sequelize');```

 

- Define the Team model and its associations in the Sequelize_crud_associations-2/models/teamModel.js file:

 

```const { DataTypes } = require('sequelize');

   const sequelize = require('../db.js'); 

```

 
## CRUD Operations

 

- Implement the following CRUD operations for the Team and Player models:

 

- Team:

    - Insert a new team

    - Update an existing team

    - Delete a team

 

- Player:

    - Insert a new player

    - Update an existing player

    - Delete a player

 



## Associations

- The following associations exist between the Team and Player models:

 

- Get one team with all players

- Get one player with their team

- Get the batsmen for a particular team

- Get the bowlers for a particular team

- Get the all-rounders for a particular team

- Get all teams with their players

 

## Usage

 

- To start the application, run the following command:

 

``` npm test ```

       or

``` node app.js ```

 

##  API Endpoints

 

  ### Team Endpoints

 

- Create a new team: ```POST http://localhost:3000/teams```

- Update an existing team: ```PUT http://localhost:3000/teams/:id```

- Delete a team: ```DELETE http://localhost:3000/teams/:id```

- Get all teams with their players: ```http://localhost:3000/allteamwithplayers ```

- Get one team with all players:  ```http://localhost:3000/oneteamallplayers/:id ```






  ### Player Endpoints


- Create a new player: ```POST http://localhost:3000/players```

- Update an existing player: ``` PUT http://localhost:3000/players/:id ```

- Delete a player: ``` DELETE http://localhost:3000/players/:id```

 

- Get one player with their team:```GET http://localhost:3000/getonePlayerwithTeam/:id ```

 
# Contribution

Contributions are welcome! If you find any issues or want to enhance the project, feel free to open a pull request.
