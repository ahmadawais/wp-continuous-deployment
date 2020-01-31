const ora = require("ora");
const chalk = require("chalk");
const red = chalk.bold.red;
const yellow = chalk.bold.yellow;
const spinner = ora({ text: "" });

module.exports = (heading, sub, err, displayError = true, exit = true) => {
	if (err) {
		console.log();
		if (displayError) {
			spinner.fail(`${red(heading)} ${sub}`);
			spinner.fail(`${red(`ERROR →`)} ${err.name}`);
			spinner.fail(`${red(`REASON →`)} ${err.message}`);
			spinner.fail(`${red(`ERROR STACK ↓ \n`)} ${err.stack}\n`);
		} else {
			spinner.warn(`${yellow(heading)} ${sub}`);
		}
		if (exit) {
			process.exit(0);
		} else {
			return false;
		}
	}
};
