import {
	productChart,
	shoppingChart,
	formProfile,
	formAddress,
	formShipping,
	formEnd,
	nameInput,
	addressInput,
	shippingInput,
} from './variables.js'

document.querySelector('#to-buy').addEventListener('click', goToShopping)
document.getElementById('button-next').addEventListener('click', goToAddress)
document
	.getElementById('button-next-shipping')
	.addEventListener('click', goToShipping)
document.getElementById('button-next-end').addEventListener('click', goToEnd)

function goToShopping() {
	shoppingChart.classList.replace('is-hidden', 'is-visible')
	productChart.classList.add('is-hidden')
}

function goToAddress(e) {
	e.preventDefault()
	var valuename = nameInput.value

	let regex = /[A-Za-z]+/
	if (valuename === '' || !regex.test(valuename)) {
		alert('no vale')
	} else {
		formProfile.classList.add('is-hidden')
		formAddress.classList.replace('is-hidden', 'is-visible')
	}
}

function goToShipping(e) {
	e.preventDefault()
	var value = addressInput.value

	let regex = /[A-Za-z]+/
	if (value === '' || !regex.test(value)) {
		alert('no vale')
	} else {
		formAddress.classList.replace('is-visible', 'is-hidden')
		formShipping.classList.add('is-visible')
	}
}

function goToEnd(e) {
	e.preventDefault()
	var value = shippingInput.value

	let regex = /[A-Za-z]+/
	if (value === '' || !regex.test(value)) {
		alert('no vale')
	} else {
		formShipping.classList.replace('is-visible', 'is-hidden')
		formEnd.classList.add('is-visible')
	}
}
