import { product, form } from './modules/templatesHtml.js'
import { empty, invalidLength, invalidType, invalidPassword, samePassword } from './modules/alerts.js'

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

let countTab = 0
function goToForm(e) {
	e.preventDefault()
	buildLayout(form)
	showTab(countTab)

	document.getElementById('button-previous').addEventListener('click', preview)
	document.getElementById('button-next').addEventListener('click', next)

}

function showTab (n) {
	const previousBtn = document.getElementById('button-previous')
	const nextBtn = document.getElementById('button-next')
  const fieldset = document.getElementsByClassName('tab')

  fieldset[n].classList.add('--is-visible')

  if(n === 0 || n === fieldset.length - 1) {
    previousBtn.classList.add('--is-hidden')
  } else {
		previousBtn.classList.remove('--is-hidden')
	}

	if(n === fieldset.length - 2) {
		nextBtn.innerHTML = 'Submit'
	}

	if(n === fieldset.length - 1) {
		nextBtn.classList.add('--is-hidden')
	}
  stepIndicator (n)
}

function next() {
	const fieldset = document.getElementsByClassName('tab')

	if(!validate()) return false
	fieldset[countTab].classList.remove('--is-visible')

	countTab = countTab + 1

	if(countTab >= fieldset.length) {
		document.getElementById('registerForm').onsubmit = function () {


		}
		return false
	}
	showTab(countTab)
}

function preview () {
	history.go(-1)
}

function buildAlertMessage(input, html) {
	input.insertAdjacentHTML('afterend',html)
}

function validate() {
	let tabs = document.getElementsByClassName('tab')
	let valid = true
	const inputName = document.forms['registerForm']['name']
	const inputEmail = document.forms['registerForm']['email']
	const inputPsw = document.forms['registerForm']['password']
	const inputConfirmPsw = document.forms['registerForm']['confirmPassword']
	const inputFirstName = document.forms['registerForm']['firstName']
	const inputLastName = document.forms['registerForm']['inputLastName']
	const inputBirthday = document.forms['registerForm']['inputBirthday']
	const inputAddress = document.forms['registerForm']['address']
	const inputPostalCode = document.forms['registerForm']['postalCode']
	// const inputCountry = document.forms['registerForm']['country']
	const inputPhone = document.forms['registerForm']['phone']
	const minMaxRegex = /^.{5,20}$/
	const max50Regex = /^.{1,50}$/
	const max5Regex = /^.{1,5}$/
	const max9Regex = /^.{1,5}$/
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	const pswRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/

	console.log(tabs[0]);

	if(tabs[0]) {
		if(inputName.value === '') {
			buildAlertMessage(inputName, empty)
			inputName.focus()
			return valid = false
		} else if(!minMaxRegex.test(inputName.value)) {
			buildAlertMessage(inputName, invalidLength)
			inputName.focus()
			return valid = false
		}

		if(inputEmail.value === '') {
			buildAlertMessage(inputEmail, empty)
			inputEmail.focus()
			return valid = false
		} else if(!max50Regex.test(inputEmail.value)) {
			buildAlertMessage(inputEmail, invalidLength)
			inputEmail.focus()
			return valid = false
		} else if (!emailRegex.test(inputEmail.value)) {
			buildAlertMessage(inputEmail, invalidType)
			inputEmail.focus()
			return valid = false
		}

		if(inputPsw.value === '') {
			buildAlertMessage(inputPsw, empty)
			inputPsw.focus()
			return valid = false
		} else if(!pswRegex.test(inputPsw.value)) {
			buildAlertMessage(inputPsw, invalidPassword)
			inputPsw.focus()
			return valid = false
		}

		if(inputConfirmPsw.value !== inputPsw.value) {
			buildAlertMessage(inputConfirmPsw, samePassword)
			inputConfirmPsw.focus()
			return valid = false
		}
		// if(valid) {
		// 	tabs[0].classList.replace('--is-visible', '--is-hidden')
		// }
	}

	// if(tabs[1]){
	// 	if(inputFirstName.value === '') {
	// 		buildAlertMessage(inputFirstName, empty)
	// 		inputFirstName.focus()
	// 		return valid = false
	// 	} else if(!minMaxRegex.test(inputFirstName.value)){
	// 		buildAlertMessage(inputFirstName, invalidLength)
	// 		inputFirstName.focus()
	// 		return valid = false
	// 	}

		// if(valid) {
		// 	tabs[1].classList.replace('--is-visible', '--is-hidden')
		// }
	// }


	// if(inputLastName.value === '') {
	// 	buildAlertMessage(inputFirstName, empty)
	// 	inputLastName.focus()
	// 	return value = false
	// } else if (!minMaxRegex.test(inputLastName.value)){
	// 	buildAlertMessage(inputFirstName, invalidLength)
	// 	inputLastName.focus()
	// 	return value = false
	// }

	// if(inputBirthday.value === '') {
	// 	buildAlertMessage(inputFirstName, empty)
	// 	inputBirthday.focus()
	// 	return value = false
	// }

	// if(inputAddress.value === '') {
	// 	buildAlertMessage(inputAddress, empty)
	// 	inputAddress.focus()
	// 	return value = false
	// } else if (!max50Regex.test(inputAddress.value)) {
	// 	buildAlertMessage(inputAddress, invalidLength)
	// 	inputAddress.focus()
	// 	return value = false
	// }

	// if(inputPostalCode.value === '') {
	// 	buildAlertMessage(inputPostalCode, empty)
	// 	inputPostalCode.focus()
	// 	return valid = false
	// } else if (!max5Regex.test(inputPostalCode.value)) {
	// 	buildAlertMessage(inputPostalCode, invalidLength)
	// 	inputPostalCode.focus()
	// 	return valid = false
	// }

	// if(inputPhone.value === '') {
	// 	buildAlertMessage(inputPhone, empty)
	// 	inputPhone.focus()
	// 	return valid = false
	// } else if (!max9Regex.test(inputPhone.value)) {
	// 	buildAlertMessage(inputPostalCode, invalidLength)
	// 	inputPostalCode.focus()
	// 	return valid = false
	// }

	if(valid) {
		document.querySelectorAll('.step')[countTab].classList.replace('step--is-active', 'step--is-finish')
	}
	return valid
}

function stepIndicator (currentStep) {
  const steps = document.querySelectorAll('.step')

  for (let i = 0; i < steps.length; i++) {
    steps[currentStep].classList.add('step--is-active')
  }
}
