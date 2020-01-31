#!/usr/bin/env node

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
	console.log("err", err);
});

const welcome = require("cli-welcome");
const pkg = require("./package.json");

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
