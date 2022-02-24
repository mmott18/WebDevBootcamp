const searchButton = document.querySelector('#submitSearch');
const searchField = document.querySelector('#showSearch');
const searchForm = document.querySelector('#searchForm');
const imageContainer = document.querySelector('#imageContainer');

searchForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	try {
		clearImages();
		const query = searchField.value;
		const config = { params: { q: query } };
		const res = await axios.get('https://api.tvmaze.com/search/shows', config);
		createImages(res.data);
		searchForm.elements.query.value = '';
	} catch (e) {
		console.log(e);
	}
});

const createImages = (shows) => {
	for (let result of shows) {
		if (result.show.image) {
			const newImg = document.createElement('img');
			newImg.src = result.show.image.medium;
			imageContainer.append(newImg);
		}
	}
};

const clearImages = () => {
	imageContainer.innerHTML = '';
};
