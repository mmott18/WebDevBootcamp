let selection = '';
let entry = '';
let toDoList = [];

while (selection.toLowerCase() !== 'quit') {
	selection = prompt('What would you like to do?');
	if (selection === 'new') {
		entry = prompt('Enter a new todo:');
		toDoList.push(entry);
	} else if (selection === 'list') {
		console.log('**********');
		for (toDo of toDoList) {
			console.log(`${toDoList.indexOf(toDo)}: ${toDo}`);
		}
		console.log('**********');
	} else if (selection === 'delete') {
		entry = prompt('Enter a todo to delete:');
		if (entry && entry < toDoList.length) {
			toDoList.splice(entry, 1);
			console.log('Todo removed');
		} else {
			console.log('Entry does not exist!');
		}
	}
}
