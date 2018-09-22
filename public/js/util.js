let popupContainer = null
let popupTemplate  = null
window.onload = function () {
  popupContainer = document.querySelector('.popupContainer')
  popupTemplate = document.querySelector('template.popup')
  setup()
}

function popup (text, type, time = 3000) {
  if (!popupContainer)
    return alert(text)

  if (popupContainer.children.length > 1)
    removePopup(popupContainer.firstChild)
  let clone = document.importNode(popupTemplate.content, true)
  let popupWin = clone.querySelector('div.popup')

  popupWin.classList.add(type)
  popupWin.querySelector('.text').innerText = text
  popupWin.timer = window.setTimeout(u => removePopup(popupWin), time)
  popupWin.querySelector('.close').onclick = e => removePopup(popupWin)

  popupContainer.appendChild(popupWin)
}

function removePopup (popup) {
  popupContainer.removeChild(popup)
  window.clearTimeout(popup.timer)
}
