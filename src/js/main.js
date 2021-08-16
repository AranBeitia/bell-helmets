import { product, carrito, addressForm, shippingForm, endForm } from './modules/templatesHtml.js'
const mainWrapper = document.querySelector('#main-content')

function buildLayout(html) {
	mainWrapper.innerHTML = html
}

function validator (value, template, goTo) {
	let regex = /[A-Za-z]+/

	if (value === '' || !regex.test(value)) {
		alert('ande irás, que no has acabado!')
	} else {
		buildLayout(template)
		document.getElementById('button-next').addEventListener('click', goTo)
	}
}

document.addEventListener('DOMContentLoaded', function () {
	buildLayout(product)
	let buttonCta = document.querySelector('#buy-cta')
	buttonCta.addEventListener('click', goToBuy)
})

function goToBuy(e) {
	e.preventDefault()
	buildLayout(carrito)
	document.getElementById('button-next').addEventListener('click', goToAddress)
}

function goToAddress(e) {
	e.preventDefault()
	const nameInput = document.querySelector('#name')
	let valuename = nameInput.value

	validator(valuename, addressForm, goToShipping)
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
