function openPanel () {
  this.classList.toggle('--open')
}

function showText (e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('panel--open')
  }
}

function panel () {
  const panels = Array.from(document.querySelectorAll('.panel'))
  panels.forEach(panel => {
    panel.addEventListener('click', openPanel)
    panel.addEventListener('transitionend', showText)
  })
}

export { panel }