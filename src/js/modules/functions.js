const previousBtn = document.getElementById('button-previous')
let countTab = 0
showTab(countTab)


function showTab (n) {
  const fieldset = document.getElementsByClassName('tab')
  fieldset[n].classList.add('--is-visible')

  if(n == 0) {
    previousBtn.classList.add('--is-hidden')
  }
  stepIndicator (n)
}

function nextPreview () {

}

function validate() {

}

function stepIndicator (currentStep) {
  const steps = document.querySelectorAll('.step')

  for (let i = 0; i < steps.length; i++) {
    steps[currentStep].classList.add('step--is-active')

    if(steps[i] < steps[currentStep]) {
      steps[i].classList.add('step--is-finish')
    }
  }
}
