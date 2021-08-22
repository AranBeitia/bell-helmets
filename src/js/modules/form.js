import { form } from './templatesHtml.js'
import { buildLayout } from './functions.js'
import { empty, invalidLength, invalidType, invalidPassword, samePassword } from './alerts.js'

let countTab = 0
function goToForm(e) {
	e.preventDefault()
	buildLayout(form)
	showTab(countTab)

	document.getElementById('button-previous').addEventListener('click', previous)
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

function previous () {
	console.log('go to previous');
}

function buildAlertMessage(input, html) {
	input.insertAdjacentHTML('afterend',html)
}

function validate() {
	let tabs = document.querySelectorAll('[data-fieldset]')
	let y = tabs[countTab].getElementsByTagName('input')
	let valid = true
	tabs = Array.from(tabs); // convert HTMLCollection into Array
	y = Array.from(y)

	const minMaxRegex = /^.{5,20}$/
	const max50Regex = /^.{1,50}$/
	const max5Regex = /^.{1,5}$/
	const max9Regex = /^.{1,9}$/
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	const pswRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/

	for (let i = 0; i < y.length; i++) {
		if(y[i].required && y[i].value === '') {
			buildAlertMessage(y[i], empty)
			y[i].focus()
			return valid = false
		} else if (y[i].value !== ''){
			if(tabs[i].dataset.fieldset === 'profile') {
				if(y[i].name === 'name') {
					if(!minMaxRegex.test(y[i].value)) {
						buildAlertMessage(y[i], invalidLength)
						return valid = false
					}
				}
			}

			else if(tabs[i].dataset.fieldset === 'address') {
				if(y[i].name === 'firstName') {
					if (!max5Regex.test(y[i].value)) {
						buildAlertMessage(y[i], invalidLength)
						return valid = false
					}
				}
			}
		}


			// 	} else if(!minMaxRegex.test(inputName.value)) {
	// 		buildAlertMessage(inputName, invalidLength)
	// 		inputName.focus()
	// 		return valid = false
	// 	}
	}

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


	// if(tabs[0]) {
	// 	if(inputName.value === '') {
	// 		buildAlertMessage(inputName, empty)
	// 		inputName.focus()
	// 		return valid = false
	// 	} else if(!minMaxRegex.test(inputName.value)) {
	// 		buildAlertMessage(inputName, invalidLength)
	// 		inputName.focus()
	// 		return valid = false
	// 	}

	// 	if(inputEmail.value === '') {
	// 		buildAlertMessage(inputEmail, empty)
	// 		inputEmail.focus()
	// 		return valid = false
	// 	} else if(!max50Regex.test(inputEmail.value)) {
	// 		buildAlertMessage(inputEmail, invalidLength)
	// 		inputEmail.focus()
	// 		return valid = false
	// 	} else if (!emailRegex.test(inputEmail.value)) {
	// 		buildAlertMessage(inputEmail, invalidType)
	// 		inputEmail.focus()
	// 		return valid = false
	// 	}

	// 	if(inputPsw.value === '') {
	// 		buildAlertMessage(inputPsw, empty)
	// 		inputPsw.focus()
	// 		return valid = false
	// 	} else if(!pswRegex.test(inputPsw.value)) {
	// 		buildAlertMessage(inputPsw, invalidPassword)
	// 		inputPsw.focus()
	// 		return valid = false
	// 	}

	// 	if(inputConfirmPsw.value !== inputPsw.value) {
	// 		buildAlertMessage(inputConfirmPsw, samePassword)
	// 		inputConfirmPsw.focus()
	// 		return valid = false
	// 	}
	// 	// if(valid) {
	// 	// 	tabs[0].classList.replace('--is-visible', '--is-hidden')
	// 	// }
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


export { goToForm }