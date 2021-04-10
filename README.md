# Mouldy Potatoes
Mouldy Potates is a CMS-style review site similar to Wordpress site, where users can publish their review of any movie and comment on other users’ reviews as well.

# Link to deployed app
[Mouldy Potatoes](https://mouldy-potatoes.herokuapp.com/)

## Screenshots

*Homepage*
![image](https://user-images.githubusercontent.com/74797740/114264661-0f1bb780-99e4-11eb-8e5e-4bfc4a0c05c8.png)


*Dashboard page with user logged in*
![image](https://user-images.githubusercontent.com/74797740/114264682-307ca380-99e4-11eb-83bd-9e5b8fee1b8b.png)


*Login Page*
![image](https://user-images.githubusercontent.com/74797740/114264696-468a6400-99e4-11eb-8ab0-80f966868db8.png)

## Technology
* Node js
* XAMPP / MySQL
* MySQl workbench
* Javascript
* Handlebars
* Heroku
* HTML
* CSS

## Usage/Installation
You will not need to install any packages for this app if you are visiting the deployed app.

However, if you wish to use try the app on your local device, you will need to follow the following instructions:
Run `npm init -y` to initialise the `package.json ` and then install the following list of dependencies:

* `npm i mysql2`
* `npm i express`
* `npm i sequelize`
* `npm i express-session`
* `npm i connect-session-sequelize`
* `npm i rater-js`
* `npm i browserify`
* `npm i masonry`
* `npm i dotenv`: to make sure sensitive information i.e. password is hidden. 

The sequelize package allows us to map our object syntax on our database schemas. 

The mysql2 package connects you directly to the database created in the MySQL Workbench and you will need to create the database using the schema.sql file and running the command listed.  

Once all the dependencies are installed, you can initialise the application itself by running `node server.js` in the command line

## Rater-js
One of the biggest challenges during the development of this application was the implementation of rater-js. It was a challenge because we needed the ability to use ‘require’ in the browser, which is not normally supported by default. 

In order to work around this issue, we had to use the browserify package to create bundles for each instance of the rater-js package - this was the solution that allowed us to use require in the browser.

## Test
We do not have any test packages for this app but always check the error messages within terminals and debug using console.log(s). 

## License
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

> This project was created under the standard MIT licence.

> [Learn more about this licence.](https://lbesson.mit-license.org/)

## Contributors

 - [Ben Pauley](https://github.com/ben-pauley)
 - [Gurvinder Dehl](https://github.com/gurvinderdehl)
 - [Karen Opoku](https://github.com/Karen-O94)
 - [Robbie Bridgwater](https://github.com/Robbie-Bridgwater)
