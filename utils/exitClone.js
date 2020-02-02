const logSymbols = require("log-symbols");
const chalk = require("chalk");
const green = chalk.bold.green;
const red = chalk.bold.red;
const yellow = chalk.bold.yellow;

module.exports = clone => {
	if (!clone) {
		console.log(`${red(`${logSymbols.error} Nops. You're doing it wrong.`)}`);
		console.log(
			yellow(`
${logSymbols.info} Follow these steps:

1. Put your WordPress plugin on GitHub (https://repo.new)
2. Clone the GitHub repo in your PC and browse it with command line
3. Run ${green(
				`npx wp-console-deployment`
			)} in the root directory of the cloned repo
`)
		);
		process.exit(0);
	}
};
