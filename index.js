
//Import Chalk for Colorful CLI interface
const chalk = require("chalk");
const { generateRandomJokes } = require("./generateRandomJoke");
const { argv } = require("./command");



//Getting args from Command and Processing
const { language, type, category } = argv;


const results = (data) => {
    const { error } = data;
    if (error) {
        const { internalError, message, additionalInfo } = data;
        if (internalError)
            console.log(chalk.redBright("Internal Server Error"))
        console.log(chalk.redBright(`**************************\n\n${message}\n${additionalInfo}\n\n**************************`))
    } else {
        if (data.type == "twopart") {
            const { setup, delivery } = data;
            console.log(chalk.bold.cyan(`**************************\n\n${setup}\n${delivery}\n\n**************************`))
        } else {
            const { joke } = data;
            console.log(chalk.bold.cyan(`**************************\n\n${joke}\n\n**************************`))
        }
    }

}

generateRandomJokes(language, type, category, results);
