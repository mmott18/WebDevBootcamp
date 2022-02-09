const form = document.querySelector('#shelter');
const input = document.querySelector('#catEntry');
const catList = document.querySelector('#catList');
const catLocation = document.querySelector('#catLocation');
const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
	if (e.target.nodeName === 'LI') {
		e.target.remove();
	}
});

form.addEventListener('submit', function(e) {
	// prevent the form from going to a new page
	// ie the default behavior
	e.preventDefault();
	// create a new li every time the form is submitted
	let li = document.createElement('li');
	// set the inner text of the li to the
	// user-input value
	let catName = input.value;
	let catLoc = catLocation.value;
	li.innerText = `${catName} - ${catLoc}`;
	// add the new li to the end of the ul
	// as long as the input value is actually
	// valued
	if (input.value) {
		catList.append(li);
		// clear the input field
		input.value = '';
		catLocation.value = '';
	}
});
