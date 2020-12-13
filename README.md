# Random Joke Generator - CLI 

## An application used to generate random jokes from users input built with NodeJS.

## Project Status

This project is currently in development. Users can generate random jokes with different options availble for them, Functionality to add new Joke and filter the jokes is in progress.

## Project Screen Shot(s)

#### Examples:   

![Help](https://i.imgur.com/iwyvzkE.png)

![Example One](https://i.imgur.com/3bMNwKT.png)

![Example Two](https://i.imgur.com/MGm7aoZ.png)

![Example Three](https://i.imgur.com/YKuaYHi.png)

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To see how the tool works

`node index generate --help`

To generate a random joke

`node index generate -t single -c Any`

## Reflection


* This is the Portfolio Project for Codecademy's BackEnd Engineer Career Track  

* Originaaly i was thinking for creating a local json data of messages and to randomly generate them when user send an input, later i changed my mind to make it more interactive, useful and learning perspective.
So i used `NodeJS` for all services and `JokeAPI` to fetch data.  

* One of the main challenge i faced while getting the data from the API and then show to the user. Then brushing up with callbacks i was able to fix the problem what i was facing.

* At the end of the day, the technologies implemented in this project are Chalk, yargs and axios. In the next iteration I plan on implementing the User's can upload to API and can filter the jokes also use tests for each of the commands.