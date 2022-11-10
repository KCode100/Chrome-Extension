const textElements = document.querySelectorAll('h1, h2, h3, a, span, p, div, button, section')

function enableFunctionality() {
  textElements.forEach(el => {
    el.setAttribute('contenteditable', true)
  })
}

function disableFunctionality() {
  textElements.forEach(el => {
    el.setAttribute('contenteditable', false)
  })
}

document.addEventListener('keyup', function(e) {
  if(e.key === "Escape") {
    disableFunctionality()
    return;
  }
  if(e.key === "e") {
    enableFunctionality()
    return;
  }
})

window.onload = enableFunctionality()