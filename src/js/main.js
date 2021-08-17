import { product, profileForm, addressForm, shippingForm, endForm } from './modules/templatesHtml.js'
import { danger, warning, success } from './modules/alerts.js'

const mainWrapper = document.querySelector('#main-content')

function buildLayout(html) {
	mainWrapper.innerHTML = html
}

function buildAlertMessage(input, html) {
	input.insertAdjacentHTML('afterend',html)
}

function validator (input, template, goTo) {
	const regex = /[A-Za-z]+/
	const minMaxRegex = /^.{5,20}$/
	const max50Regex = /^.{50}$/

	if (input.id === "name") {
		if(input.value === '') {
			buildAlertMessage(input, warning)
			input.focus()
			return
		}

		if(!regex.test(input.value)) {
			buildAlertMessage(input, danger)
			input.focus()
			return
		}

		if(!minMaxRegex.test(input.value)) {
			buildAlertMessage(input, success)
			input.focus()
			return
		}

		if (input.value !== '' || regex.test(input.value) || minMaxRegex.test(input.value)) {
			buildLayout(template)
			document.getElementById('button-next').addEventListener('click', goTo)
		}
	}

	if(input.id === "email"){
		if(input.value === '') {
			buildAlertMessage(input, warning)
			input.focus()
			return
		}

		if(!max50Regex.test(input.value)) {
			buildAlertMessage(input, success)
			input.focus()
			return
		}

		if (input.value !== '' || max50Regex.test(input.value)) {
			buildLayout(template)
			document.getElementById('button-next').addEventListener('click', goTo)
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	buildLayout(product)
	init()
})

function goToBuy(e) {
	e.preventDefault()
	buildLayout(profileForm)
	document.getElementById('button-next').addEventListener('click', goToAddress)
}

function goToAddress(e) {
	e.preventDefault()
	const name = document.querySelector('#name')
	const email = document.getElementById('email')

	validator(name, addressForm, goToShipping)
	validator(email, addressForm, goToShipping)
}

function goToShipping(e) {
	e.preventDefault()
	const addressInput = document.querySelector('#address')
	var value = addressInput.value

	validator(value, shippingForm, goToEnd)
}

function goToEnd(e) {
	e.preventDefault()
	const shippingInput = document.getElementById('shipping')
	var value = shippingInput.value

	validator(value, endForm)
}

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
	.addEventListener('click', goToBuy)
}


