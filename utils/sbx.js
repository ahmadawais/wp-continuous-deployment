const makeDir = require("make-dir");
const fs = require("fs");
const path = require("path");
const clearConsole = require("clear-any-console");
const handlebars = require("handlebars");
handlebars.registerHelper("raw-helper", options => options.fn());

(async () => {
	clearConsole();
	const files = ["assets", "release"];

	for (file of files) {
		const fileContents = fs.readFileSync(
			path.join(__dirname, `./../template/${file}.yml`),
			`utf8`
		);
		const source = fileContents.toString();
		const template = handlebars.compile(source);
		const rendered = template({ slug: "wp-slug" });
		await makeDir("./.github/workflow/");
		const done = fs.writeFileSync(
			`./.github/workflow/${file}.yml`,
			rendered,
			`utf8`
		);
		await makeDir("./.wordpress-org/");
	}
})();
