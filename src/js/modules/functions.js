const mainWrapper = document.querySelector('#main-content')

function buildLayout(html) {
	mainWrapper.innerHTML = html
}

export { buildLayout }