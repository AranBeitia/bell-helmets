import { mainWrapper } from "./variables";

document.addEventListener('DOMContentLoaded', getEvents)

function getEvents () {
  buildLayout()
}

function buildLayout(html) {
  mainWrapper.innerHTML = html
}