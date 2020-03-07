const pkg = require("./../package.json");
const welcome = require("cli-welcome");

module.exports = () => {
	// Use it.
	welcome(
		`WP Continuous Deployment`,
		`
by Awais.dev 👋`,
		{
			bgColor: `#d54e21`,
			color: `#000000`,
			bold: true,
			clear: true,
			version: `v${pkg.version}`
		}
	);
};
