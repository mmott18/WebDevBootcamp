const fs = require('fs');
const newDirName = process.argv[2] || 'Project';
const htmlBoiler =
	'<!DOCTYPE html> \
<html lang="en"> \
<head> \
    <meta charset="UTF-8"> \
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> \
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> \
    <title>Document</title> \
</head> \
<body> \
<script src="app.js"></script> \
</body> \
</html>';
const jsFile = 'console.log("working")';

try {
	fs.mkdirSync(`./${newDirName}`);
	fs.writeFileSync(`./${newDirName}/index.html`, htmlBoiler);
	fs.writeFileSync(`./${newDirName}/app.js`, jsFile);
	fs.writeFileSync(`./${newDirName}/app.css`);
} catch (e) {
	console.log('an error occurred:', e);
}
