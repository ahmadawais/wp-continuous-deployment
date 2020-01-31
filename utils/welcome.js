const pkg = require("./../package.json");
const welcome = require("cli-welcome");

module.exports = () => {
	// Use it.
	welcome(
		`WP Continous Deployment`,
		`
by Awais.dev 👋`,
		{
			bgColor: `#FADC00`,
			color: `#000000`,
			bold: true,
			clear: true,
			version: `v${pkg.version}`
		}
	);
};
