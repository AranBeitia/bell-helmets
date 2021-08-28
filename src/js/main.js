import { panel } from './modules/panels.js'
import { product } from './modules/templatesHtml.js'
import { buildLayout } from './modules/functions.js'
import { goToForm } from './modules/form.js'

document.addEventListener('DOMContentLoaded', () => {
	panel()
	buildLayout(product)
	init()
})

function init () {
	document.getElementById('product')
		.addEventListener('click', (e) => {
			if(e.target.matches('.image-list img')) {
				document
					.getElementById('imageSelected')
					.setAttribute('src', e.target.src)
			}
		})

	document.querySelector('#buy-cta')
	.addEventListener('click', goToForm)
}
