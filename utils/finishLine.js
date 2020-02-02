const chalk = require("chalk");
const logSymbols = require("log-symbols");
const dim = chalk.dim;
const green = chalk.bold.green;
const yellow = chalk.bold.yellow;

// Final notice.
module.exports = url => {
	console.log(
		chalk(`${logSymbols.success} ${green(`…and that was it.`)} ${yellow(
			`Wait, a couple more things to set up`
		)}

${logSymbols.info} ${yellow(`One-time setup:`)}
Remember the username and password you use at https://login.WordPress.org?!
❯❯ Go to ${dim(`${url}/settings/secrets`)}
1. Click "Add New Secret" add name ${green(
			`SVN_USERNAME`
		)} and fill the value with your username
2. Click "Add New Secret" again; add name ${green(
			`SVN_PASSWORD`
		)} and fill the value with your password

${logSymbols.success} ${green(`Now what?!`)}
- Make sure all plugin assets were downloaded to the ${green(
			`.wordpress-org`
		)} directory
- Or manually download from ${dim(`https://ps.w.org/${slug.slug}/assets/`)}
- Now for each commit/push to master your assets & readme will get deployed
- And for each new tag/push a new version of plugin will be deployed
- So, go ahead, make change, git commit, and then run:

${green(`git tag 2.0.0 && git push --tags`)}
${dim(`# Considering 2.0.0 is the new version`)}
`)
	);
};
