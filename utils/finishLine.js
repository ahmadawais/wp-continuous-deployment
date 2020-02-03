const chalk = require("chalk");
const logSymbols = require("log-symbols");
const dim = chalk.dim;
const green = chalk.bold.green;
const yellow = chalk.bold.yellow;

// Final notice.
module.exports = (slug, url, hasAssets) => {
	console.log(
		`${logSymbols.success} ${green(`…and that was it.`)} ${yellow(
			`Wait, a couple more things to set up`
		)}`
	);
	console.log(`\n${logSymbols.info} ${yellow(`One-time setup:`)}
Remember the username and password you use at https://login.WordPress.org
❯❯ Go to ${dim(`${url}/settings/secrets`)}
1. Click "Add New Secret" add name ${green(
		`SVN_USERNAME`
	)} and fill the value with your username
2. Click "Add New Secret" again; add name ${green(
		`SVN_PASSWORD`
	)} and fill the value with your password`);

	console.log(`\n${logSymbols.success} ${green(`Now what?!`)}`);
	if (!hasAssets) {
		console.log(
			`- Make sure all plugin assets were downloaded to the ${green(
				`.wordpress-org`
			)} directory\n- Or manually download from ${dim(
				`https://ps.w.org/${slug}/`
			)} (if exists) ${dim(`assets`)} directory`
		);
	}
	console.log(`- Now for each commit/push to master your assets & readme will get deployed
- And for each new tag/push a new version of plugin will be deployed
- So, go ahead, make change, git commit, and then run:

${green(`git tag 2.0.0 && git push --tags`)}
${dim(`# Considering 2.0.0 is the new version`)}
`);
};
