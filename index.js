#!/usr/bin/env node

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
	console.log("err", err);
});

const chalk = require("chalk");
const slugify = require("@sindresorhus/slugify");
const handleError = require("./utils/handleError.js");
const green = chalk.bold.green;
const red = chalk.bold.red;
const yellow = chalk.bold.yellow;
const dim = chalk.dim;
const welcome = require("./utils/welcome.js");
const to = require("await-to-js").default;
const { Toggle, prompt } = require("enquirer");
const makeDir = require("make-dir");
const fs = require("fs");
const path = require("path");
const logSymbols = require("log-symbols");
const clearConsole = require("clear-any-console");
const handlebars = require("handlebars");
handlebars.registerHelper("raw-helper", options => options.fn());

const start = () => {
	welcome();
};

// Exit gracefully if user trying to cancel.
const shouldCancel = async action => {
	if (action === undefined) {
		console.log(yellow(`❯ Cancelled!\n`));
		process.exit(0);
	}
};

(async () => {
	start();

	// Root.
	const promptClone = new Toggle({
		name: `clone`,
		message: `Are you running this in the root directory of your WordPress plguin's GitHub repo clone?`
	});

	const [errClone, clone] = await to(promptClone.run());
	handleError(`CLONE`, `Failed on clone`, errClone);
	await shouldCancel(clone);

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

	// Slug.
	const promptSlug = {
		type: `input`,
		name: `slug`,
		initial: `cf7-customizer`,
		message: `What is your WordPress.org plugin slug?
${dim(`It's the last part of the URL, e.g.`)}`
	};
	const [errSelection, slug] = await to(prompt(promptSlug));
	handleError(`SLUG`, `Failed on slug`, errSelection);
	await shouldCancel(slug);

	// Template & Directories.
	const files = [`assets`, `release`];

	for (file of files) {
		const fileContents = fs.readFileSync(
			path.join(__dirname, `./template/${file}.yml`),
			`utf8`
		);
		const source = fileContents.toString();
		const template = handlebars.compile(source);
		const rendered = template({ slug: slug.slug });
		await makeDir(`./.github/workflow/`);
		await makeDir(`./.wordpress-org/`);
		const done = fs.writeFileSync(
			`./.github/workflow/${file}.yml`,
			rendered,
			`utf8`
		);
	}

	// Final notice.
	console.log(
		chalk(`${logSymbols.success} ${green(`…and that was it.`)}

${logSymbols.info} Next steps:

0. Download all plugin assets in the ${green(`.wordpress-org`)} directory
1. Now for each commit/push to master your assets & readme will get deployed
2. And for each new tag/push a new version of plugin will be deployed
3. So, go ahead, make change, git commit, and then run:

${green(`git tag 2.0.0 && git push --tags`)}
${dim(`# Considering 2.0.0 is the new version`)}
`)
	);
})();
