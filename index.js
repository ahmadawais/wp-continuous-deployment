#!/usr/bin/env node

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
	console.log("err", err);
});

const chalk = require("chalk");
const to = require("await-to-js").default;
const handlebars = require("handlebars");
handlebars.registerHelper("raw-helper", options => options.fn());
const { Toggle, prompt } = require("enquirer");
const handleError = require("./utils/handleError.js");
const welcome = require("./utils/welcome.js");
const finishLine = require("./utils/finishLine.js");
const handleTemplate = require("./utils/handleTemplate.js");
const shouldCancel = require("./utils/shouldCancel.js");
const exitClone = require("./utils/exitClone.js");
const dim = chalk.dim;

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
		message: `What is your WordPress.org plugin slug?
${dim(`It's the last part of the URL, e.g.`)}`
	};
	const [errSelection, slug] = await to(prompt(promptSlug));
	handleError(`FAILED ON SLUG`, errSelection);
	await shouldCancel(slug);

	handleTemplate(slug);
	finishLine();
})();
