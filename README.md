# Mouldy Potatoes
Mouldy Potates is a CMS-style review site similar to Wordpress site, where users can publish their review of any movie and comment on other users’ reviews as well.

# Link to deployed app
[Mouldy Potatoes]()

## Screenshots

*Homepage*
![image]()

*Dashboard page with user logged in*
![image]()

*Login Page*
![image]()

## Technology
* XAMPP / MySQL
* MySQl workbench
* Javascript
* Handlebars
* Heroku
* HTML
* CSS

## Installation
You will not need to install any packages for this app if you a visiting the deployed link

However, if you wish to use try the app on your localhost, you will need to follow the following instructions:
Run `npm init -y` to initialise the `package.json ` and then install the following list of dependencies:

* `npm i mysql2`
* `npm i express`
* `npm i sequelize`
* `npm i express-session`
* `npm i connect-session-sequelize`
* `npm i connect-session-sequelize`
* `npm i rater-js`
* `npm i browserify`
* `npm i masonry`
* `npm i dotenv`: to make sure sensitive information i.e. password is hidden. 

The sequelize package allows us to map our object syntax on our database schemas. 

The mysql2 package connects you directly to the database created in the MySQL Workbench and you will need to create the database using the schema.sql file and running the command listed.  

Once all the dependencies are installed, you can initialise the application itself by running `node server.js` in the command line

## Usage 

If all requests are successfully made, you will see posts and comments added and a status '200 OK'. A '404' or '400' status will show up if there is an error or bad request made

## Test
We do not have any test packages for this app but always check the error messages within terminals and debug using console.log(s). 

## License
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

> This project was created under the standard MIT licence.

> [Learn more about this licence.](https://lbesson.mit-license.org/)

## Contributors

 - Ben Pauley
 - Gurvinder Dehl
 - Karen Opoku
 - Robbie Bridgewater


## Questions?