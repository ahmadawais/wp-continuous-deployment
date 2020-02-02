const path = require("path");
const axios = require("axios");
const arrify = require("arrify");
const getUrls = require("get-urls");
const download = require("download");
const to = require("await-to-js").default;
const handleError = require("./handleError.js");
const dest = path.resolve(__dirname, "./../.wordpress-org/");

module.exports = async slug => {
	const url = `https://plugins.svn.wordpress.org/${slug}/assets/`;
	const [errRes, res] = await to(axios.get(url));
	handleError("FAILED ON ASSETS", errRes);

	const urlData = res.data.replace(
		/href="/g,
		`href="https://plugins.svn.wordpress.org/jetpack/assets/`
	);

	const getLinks = arrify(getUrls(urlData));
	// Remove the first and last.
	const buildLinks = getLinks.slice(1, getLinks.length - 1);
	// Remove the languages link.
	const links = buildLinks.filter(
		link =>
			link !== `https://plugins.svn.wordpress.org/${slug}/assets/languages`
	);

	const [errDown, down] = await to(
		Promise.all(links.map(link => download(link, dest)))
	);
	handleError("FAILED ON FILE DOWNLOADS", errDown);
};
