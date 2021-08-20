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

	document.getElementById('button-previous').addEventListener('click', nextPreview)
	document.getElementById('button-next').addEventListener('click', nextPreview)

}

function showTab (n) {
	const previousBtn = document.getElementById('button-previous')
	const nextBtn = document.getElementById('button-next')
  const fieldset = document.getElementsByClassName('tab')

  fieldset[n].classList.add('--is-visible')

  if(n === 0) {
    previousBtn.classList.add('--is-hidden')
  }

	if(n === fieldset.length -1) {
		nextBtn.innerHTML = 'Submit'
	}
  stepIndicator (n)
}

function nextPreview (e) {
	e.preventDefault()
	const fieldset = document.getElementsByClassName('tab')

	if(!validate()) return false
	fieldset[countTab].classList.add('--is-hidden')

	countTab = countTab + 1
	showTab(countTab)
}

function buildAlertMessage(input, html) {
	input.insertAdjacentHTML('afterend',html)
}

function validate() {
	let valid = true
	const inputName = document.forms['registerForm']['name']
	const inputEmail = document.forms['registerForm']['email']
	const inputPsw = document.forms['registerForm']['password']
	const inputConfirmPsw = document.forms['registerForm']['confirmPassword']
	const minMaxRegex = /^.{5,20}$/
	const max50Regex = /^.{1,50}$/
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	const pswRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/

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
