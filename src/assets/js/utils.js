const resetValue = () => {
  blocDom.b1.innerHTML = ''
  blocDom.b2.innerHTML = ''
  blocDom.b3.innerHTML = ''
  blocDom.b4.innerHTML = ''
  blocDom.b5.innerHTML = ''
  blocDom.b6.innerHTML = ''
  blocDom.b7.innerHTML = ''
  blocDom.b8.innerHTML = ''
  blocDom.b9.innerHTML = ''
}

const resetClass = () => {
  blocDom.b1.classList.remove('token1', 'token2')
  blocDom.b2.classList.remove('token1', 'token2')
  blocDom.b3.classList.remove('token1', 'token2')
  blocDom.b4.classList.remove('token1', 'token2')
  blocDom.b5.classList.remove('token1', 'token2')
  blocDom.b6.classList.remove('token1', 'token2')
  blocDom.b7.classList.remove('token1', 'token2')
  blocDom.b8.classList.remove('token1', 'token2')
  blocDom.b9.classList.remove('token1', 'token2')
}

const setButtonState = (value) => {
  document.getElementById('resetButton').disabled = value
}

const reset = () => {
  current = token1;
  bloc = { ...defaultValue }
  winner = null
  winnerSpan.textContent = ''

  resetValue()
  resetClass()
  setButtonState(true)
}