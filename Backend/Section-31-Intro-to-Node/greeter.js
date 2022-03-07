const args = process.argv.slice(2);
// const newArgs = args.splice(0, 2);

for (let arg of args) {
	console.log(`Hello ${arg}`);
}
