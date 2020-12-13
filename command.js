const chalk = require("chalk");
//Creating convert Command to Process the Output
var { argv } = require("yargs")
    .scriptName("generate")
    .usage(chalk.yellowBright("Usage: $0 -l language -t type -c category"))
    .example(
        chalk.blueBright("$0 -t single -c Any"),
        chalk.greenBright(
            "It will generate a Any type joke according in Englsh to the console"
        )
    ).example(
        chalk.blueBright("$0 -l de -t single -c Dark"),
        chalk.greenBright(
            "It will generate a Dark joke in German to the console."
        )
    )
    .option("l", {
        alias: "language",
        describe: chalk.green(`The language the user would get the Joke \n English is default \n For Spanish - ${chalk.magenta("es")} \n For German - ${chalk.magenta("de")} \n For Czech - ${chalk.magenta("cs")}.`),
        nargs: 1,
    })
    .option("t", {
        alias: "type",
        describe: chalk.green(`The type of the joke, ${chalk.magentaBright("single")} / ${chalk.magentaBright("twopart")} `),
        demandOption: chalk.bgRed("Type of joke required"),
        nargs: 1,
    })
    .option("c", {
        alias: "category",
        describe: chalk.green(`The Category must be any one of the following. \n ${chalk.magentaBright("Any \n Programming \n Dark \n Political \n Miscellaneous \n Pun \n Spooky \n Christmas")} `),
        demandOption: chalk.bgRed("Category required"),
        nargs: 1,
    })
    .describe("help", chalk.green("Show help."))
    .describe("version", chalk.green("1.0.0"))
    .epilog(chalk.bold.underline.whiteBright("By Aditya Narayan Mishra. 2020"));

module.exports = {
    argv
}