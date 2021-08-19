import { product, form } from './modules/templatesHtml.js'

const mainWrapper = document.querySelector('#main-content')

function buildLayout(html) {
	mainWrapper.innerHTML = html
}

document.addEventListener('DOMContentLoaded', () => {
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

function goToForm(e) {
	e.preventDefault()
	buildLayout(form)
	let countTab = 0
	showTab(countTab)
}

function showTab (n) {
	const previousBtn = document.getElementById('button-previous')
  const fieldset = document.getElementsByClassName('tab')
  fieldset[n].classList.add('--is-visible')

  if(n === 0) {
    previousBtn.classList.add('--is-hidden')
  }
  stepIndicator (n)
	validate()
}

function nextPreview () {

}

function validate() {
	let valid = true
	if(valid) {
		document.querySelectorAll('.step')[countTab].classList +='step--is-finish'

	}
}

function stepIndicator (currentStep) {
  const steps = document.querySelectorAll('.step')

  for (let i = 0; i < steps.length; i++) {
    steps[currentStep].classList.add('step--is-active')
  }
}
