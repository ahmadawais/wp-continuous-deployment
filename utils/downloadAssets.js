const path = require("path");
const chalk = require("chalk");
const axios = require("axios");
const green = chalk.bold.green;
const yellow = chalk.bold.yellow;
const arrify = require("arrify");
const getUrls = require("get-urls");
const download = require("download");
const to = require("await-to-js").default;
const logSymbols = require("log-symbols");
const handleError = require("./handleError.js");
const isDirEmpty = require("is-dir-empty");
const dest = path.resolve(process.cwd(), "./.wordpress-org/");

module.exports = async (slug, spinner) => {
	spinner.start(`${yellow(`ASSETS`)} finding…`);
	const url = `https://ps.w.org/${slug}/assets/`;
	const [errRes, res] = await to(axios.get(url));
	// handleError("FAILED ON ASSETS", errRes); // Not needed.

	if (errRes) {
		spinner.warn(`${yellow(`No ASSETS`)} found`);
	} else {
		const urlData = res.data.replace(
			/href="/g,
			`href="https://ps.w.org/${slug}/assets/`
		);

		const getLinks = arrify(getUrls(urlData));
		// Remove the first and last.
		const buildLinks = getLinks.slice(1, getLinks.length - 1);
		// Remove the languages link.
		const links = buildLinks.filter(
			link => link !== `https://ps.w.org/${slug}/assets/languages`
		);

		spinner.succeed(
			`${green(`ASSETS`)} found ${links.length} asset${
				links.length > 1 ? `s` : ``
			}`
		);

		spinner.start(`${yellow(`ASSETS`)} downloading…`);
		const [errDown, down] = await to(
			Promise.all(
				links.map(async (link, i) => {
					await download(link, dest);
					spinner.start(
						`${yellow(`ASSETS`)} downloading ${i + 1}/${links.length}…`
					);
				})
			)
		);
		handleError("FAILED ON FILE DOWNLOADS", errDown);
		spinner.succeed(
			`${green(`ASSETS`)} downloaded ${links.length}/${links.length}`
		);
	}
	// Check if assets were downloaded.
	const isEmpty = await isDirEmpty(dest);

	// Return true if not empty.
	return !isEmpty;
};
