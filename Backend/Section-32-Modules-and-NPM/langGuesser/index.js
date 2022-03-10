import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const langs = require('langs');
const colors = require('colors');
import { franc, francAll } from 'franc';

const args = process.argv.slice(2);
for (let arg of args) {
	if (arg) {
		let langCode = franc(arg);
		if (langCode === 'und') {
			console.log('Unable to determine language, try with more sample text'.red);
		} else {
			console.log(`Best guess: ${langs.where('3', langCode).name}`.green);
		}
	}
}
