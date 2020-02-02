const shouldCancel = require("./shouldCancel.js");

export default (question, type) => {
	const query = new Toggle(question);
	const [err, res] = await to(query.run());
	handleError(type, err);
	await shouldCancel(res);
};
