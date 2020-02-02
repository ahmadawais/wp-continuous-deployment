#!/usr/bin/env node

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
	handleError(`UNHANDLED ERROR`, err);
});

const ora = require("ora");
const spinner = ora({ text: "" });
const chalk = require("chalk");
const to = require("await-to-js").default;
const handlebars = require("handlebars");
const { Toggle, prompt } = require("enquirer");
const gitRemoteOriginUrl = require("git-remote-origin-url");
const handleError = require("./utils/handleError.js");
const welcome = require("./utils/welcome.js");
const finishLine = require("./utils/finishLine.js");
const handleTemplate = require("./utils/handleTemplate.js");
const shouldCancel = require("./utils/shouldCancel.js");
const exitClone = require("./utils/exitClone.js");
const downloadAssets = require("./utils/downloadAssets.js");
const gParse = require("git-url-parse");
const dim = chalk.dim;
const yellow = chalk.bold.yellow;
const green = chalk.bold.green;
handlebars.registerHelper("raw-helper", options => options.fn());

(async () => {
	welcome();

	// Root.
	const promptClone = new Toggle({
		name: `clone`,
		message: `Are you running this in the root directory of your WordPress plguin's GitHub repo clone?`
	});

	const [errClone, clone] = await to(promptClone.run());
	handleError(`FAILED ON CLONE`, errClone);
	await shouldCancel(clone);

	// Moving forward.
	exitClone(clone);

	// Slug.
	const promptSlug = {
		type: `input`,
		name: `slug`,
		initial: `cf7-customizer`,
		message: `What is your WordPress.org plugin slug?\n${dim(
			`It's the last part of the URL, after ${dim(
				`"https://wordpress.org/plugins/"`
			)} e.g.`
		)}`
	};
	const [errSlug, slug] = await to(prompt(promptSlug));
	handleError(`FAILED ON SLUG`, errSlug);
	await shouldCancel(slug);

	// GitHub.
	const getGitHubUrl = await gitRemoteOriginUrl();
	const urlObj = getGitHubUrl ? gParse(getGitHubUrl) : false;
	const gitHubUrl = urlObj
		? `https://github.com/${urlObj.owner}/${urlObj.name}`
		: false;

	if (!gitHubUrl) {
		const promptUrl = {
			type: `input`,
			name: `url`,
			initial: `https://github.com/owner/repo`,
			message: `What is your plugin GitHub repository URL?`
		};
		const [errUrl, url] = await to(prompt(promptUrl));
		handleError(`FAILED ON GITHUB URL`, errUrl);
		await shouldCancel(url);
		gitHubUrl = url.url;
	}

	spinner.start(`${yellow(`GITHUB ACTIONS`)} creating…`);
	handleTemplate(slug.slug);
	spinner.succeed(`${green(`GITHUB ACTIONS`)} created`);
	spinner.start(`${yellow(`ASSETS`)} downloading…`);
	await downloadAssets(slug.slug);
	spinner.succeed(`${green(`ASSETS`)} downloaded`);

	finishLine(gitHubUrl);
})();
