const chalk = require("chalk");
const logSymbols = require("log-symbols");
const dim = chalk.dim;
const green = chalk.bold.green;
const yellow = chalk.bold.yellow;

// Final notice.
module.exports = () => {
	console.log(
		chalk(`${logSymbols.success} ${green(`…and that was it.`)} ${yellow(
			`Wait, a couple more things to set up`
		)}

${logSymbols.info} ${yellow(`One time setup:`)}

0. Download all plugin assets in the ${green(`.wordpress-org`)} directory
1. Go to ${dim(
			`https://github.com/your-name/your-repo/settings/secrets`
		)} make sure to change the ${green(`your-name/your-repo`)} part.
Click "Add New Secret" add name ${green(
			`SVN_USERNAME`
		)} and fill the value with your username
Click "Add New Secret" again; add name ${green(
			`SVN_PASSWORD`
		)} and fill the value with your password

${logSymbols.success} ${green(`Now what?!`)}
2. Now for each commit/push to master your assets & readme will get deployed
2. And for each new tag/push a new version of plugin will be deployed
3. So, go ahead, make change, git commit, and then run:

${green(`git tag 2.0.0 && git push --tags`)}
${dim(`# Considering 2.0.0 is the new version`)}
`)
	);
};
