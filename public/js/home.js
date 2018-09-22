function setup () {
  let btnElm = document.querySelector('button')
  if (window.localStorage.getItem('status') === 'in') {
    btnElm.classList.add('red')
    btnElm.innerText = 'out'
  }
  btnElm.onclick = buttonClick
}


function buttonClick (e) {
  this.classList.toggle('red')
  if (this.classList.contains('red')) {
    this.innerText = 'out'
    window.localStorage.setItem('status', 'in')
    checkin()
  }
  else {
    this.innerText = 'in'
    window.localStorage.setItem('status', 'out')
    checkout()
  }
}

function checkin () {
  getGeoLocation(position => console.log(position))
}
function checkout () {
  console.log('out')
}
