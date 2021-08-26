import { form } from './templatesHtml.js'
import { buildLayout } from './functions.js'
import { invalidLength, invalidType, invalidPassword, samePassword } from './alerts.js'

let countTab = 0
const fieldset = document.getElementsByTagName('fieldset')

function goToForm(e) {
  e.preventDefault()
	buildLayout(form)
	showTab(countTab)
	document.getElementById('button-previous').addEventListener('click', (e) => {
    e.preventDefault()
    nextPrev(-1)
  })
	document.getElementById('button-next').addEventListener('click', (e) => {
    e.preventDefault()
    nextPrev(1)
  })
}

function showTab (n) {
  const previousBtn = document.getElementById('button-previous')
  const nextBtn = document.getElementById('button-next')

  fieldset[n].classList.add('--is-visible')

  if(n !== fieldset.length - 1) {
    fieldset[n+1].classList.add('--next')
  }

  if (fieldset[n].classList.contains('--is-visible')) {
    fieldset[n].classList.remove('--next')
  }

  if(n === 0) {
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

function nextPrev (n) {
	if(n === 1 && !validate()) return false
    fieldset[countTab].classList.remove('--is-visible')
    countTab = countTab + n

	if(countTab === fieldset.length - 1) {
    fieldset[countTab].classList.add('--is-visible')
    fieldset[countTab].classList.remove('--next')
    document.getElementById('button-previous').classList.add('--is-hidden')
    document.getElementById('button-next').classList.add('--is-hidden')
    document.querySelectorAll('.step')[countTab].classList.add('step--is-active')
    fieldset[countTab].innerHTML += `
      <p>Product details: </p>
      <p>Shipping date details: ${document.forms['registerForm']['shipment'].value}</p>
      <p>Final price: </p>
      <p>Time to finish registration (since step 1): </p>
    `
		return false
	}
	showTab(countTab)
}

function buildAlertMessage(input, html) {
  input.insertAdjacentHTML('afterend',html)
  let message = document.getElementsByTagName('p')
  message = Array.from(message)
  message.forEach (item => {
    setTimeout(() => {
      item.classList.add('fadeout')
      setTimeout(function () {
        item.remove()
      }, 1000)
    }, 3000)
  })
}

function validate() {
	let tabs = document.querySelectorAll('[data-fieldset]')
	let input = tabs[countTab].getElementsByTagName('input')
	let valid = true
	tabs = Array.from(tabs); // convert HTMLCollection into Array
	input = Array.from(input)

	const minMaxRegex = /^.{5,20}$/
	const max50Regex = /^.{1,50}$/
	const max5Regex = /^.{1,5}$/
	const max9Regex = /^.{1,9}$/
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	const pswRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/
  const datesRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/

	for (let i = 0; i < input.length; i++) {
    if(input[i].name === 'name') {
      if(!minMaxRegex.test(input[i].value)) {
        input[i].focus()
        buildAlertMessage(input[i], invalidLength)
        valid = false
      }
    }

    if(input[i].name === 'email') {
      if(!emailRegex.test(input[i].value)) {
        input[i].focus()
        buildAlertMessage(input[i], invalidType)
        valid = false
      } else if (!max50Regex.test(input[i].value)) {
        input[i].focus()
        buildAlertMessage(input[i], invalidLength)
        valid = false
      }
    }

    if(input[i].name === 'password') {
      if(!pswRegex.test(input[i].value)) {
        input[i].focus()
        buildAlertMessage(input[i], invalidPassword)
        valid = false
      }
    }

    if(input[i].name === 'confirmPassword') {
      const password = document.getElementById('password')
      if(input[i].value !== password.value) {
        input[i].focus()
        buildAlertMessage(input[i], samePassword)
        valid = false
      }
    }

    if(input[i].name === 'firstName') {
      if (!max50Regex.test(input[i].value)) {
        input[i].focus()
        buildAlertMessage(input[i], invalidLength)
        valid = false
      }
    }

    if(input[i].name === 'lastName') {
      if (!max50Regex.test(input[i].value)) {
        input[i].focus()
        buildAlertMessage(input[i], invalidLength)
        valid = false
      }
    }

    if(input[i].name === 'birthday') {
      if (!datesRegex.test(input[i].value)) {
        input[i].focus()
        buildAlertMessage(input[i], invalidType)
        valid = false
      }
    }

    if(input[i].name === 'address') {
      if (!max50Regex.test(input[i].value)) {
        input[i].focus()
        buildAlertMessage(input[i], invalidLength)
        valid = false
      }
    }

    if(input[i].name === 'address2') {
      if (!max50Regex.test(input[i].value)) {
        input[i].focus()
        buildAlertMessage(input[i], invalidLength)
        valid = false
      }
    }

    if(input[i].name === 'postalCode') {
      if (!max5Regex.test(input[i].value)) {
        input[i].focus()
        buildAlertMessage(input[i], invalidLength)
        valid = false
      }
    }

    if(input[i].name === 'phone') {
      if (!max9Regex.test(input[i].value)) {
        input[i].focus()
        buildAlertMessage(input[i], invalidLength)
        valid = false
      }
    }

    if(input[i].name === 'termsConditions') {
      console.log('button disabled');
    }
	}

	if(valid) {
		document.querySelectorAll('.step')[countTab].classList.replace('step--is-active', 'step--is-finish')
	}
	return valid
}

function stepIndicator (n) {
  const steps = document.querySelectorAll('.step')

  for (let i = 0; i < steps.length; i++) {
    steps[n].classList.add('step--is-active')
  }
}

export { goToForm }