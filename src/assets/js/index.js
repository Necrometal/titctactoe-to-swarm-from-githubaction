const getBloc = (id) => document.getElementById(id)
const cases = document.getElementsByClassName('col')
const winnerSpan = document.getElementById('winner-span')

const token1 = 'o'
const token2 = 'x'
let current = token1
let winner = null

const defaultValue = {
  b1: null,
  b2: null,
  b3: null,
  b4: null,
  b5: null,
  b6: null,
  b7: null,
  b8: null,
  b9: null,
}

let bloc = { ...defaultValue }

const blocDom = {
  b1: getBloc('b1'),
  b2: getBloc('b2'),
  b3: getBloc('b3'),
  b4: getBloc('b4'),
  b5: getBloc('b5'),
  b6: getBloc('b6'),
  b7: getBloc('b7'),
  b8: getBloc('b8'),
  b9: getBloc('b9')
}

/**
 * 123
 * 456
 * 789
 */

const verifyBoard = () => {
  if(
    (bloc.b1 === token1 && bloc.b2 === token1 && bloc.b3 === token1)
    || (bloc.b4 === token1 && bloc.b5 === token1 && bloc.b6 === token1)
    || (bloc.b7 === token1 && bloc.b8 === token1 && bloc.b9 === token1)
    || (bloc.b1 === token1 && bloc.b4 === token1 && bloc.b7 === token1)
    || (bloc.b2 === token1 && bloc.b5 === token1 && bloc.b8 === token1)
    || (bloc.b3 === token1 && bloc.b6 === token1 && bloc.b9 === token1)
    || (bloc.b1 === token1 && bloc.b5 === token1 && bloc.b9 === token1)
    || (bloc.b3 === token1 && bloc.b5 === token1 && bloc.b7 === token1)
  ){
    winner = 'User 1'
  }
  else if(
    (bloc.b1 === token2 && bloc.b2 === token2 && bloc.b3 === token2)
    || (bloc.b4 === token2 && bloc.b5 === token2 && bloc.b6 === token2)
    || (bloc.b7 === token2 && bloc.b8 === token2 && bloc.b9 === token2)
    || (bloc.b1 === token2 && bloc.b4 === token2 && bloc.b7 === token2)
    || (bloc.b2 === token2 && bloc.b5 === token2 && bloc.b8 === token2)
    || (bloc.b3 === token2 && bloc.b6 === token2 && bloc.b9 === token2)
    || (bloc.b1 === token2 && bloc.b5 === token2 && bloc.b9 === token2)
    || (bloc.b3 === token2 && bloc.b5 === token2 && bloc.b7 === token2)
  ){
    winner = 'User 2'
  }

  if(winner){
    winnerSpan.textContent = `${winner} won the match`
    setButtonState(false)
  }
}

const onClick = (id) => {
  if(defaultValue[id] === null && !winner){
    bloc[id] = current
    blocDom[id].textContent = current
    blocDom[id].classList.add(current === token1 ? 'token1' : 'token2')

    current = current === token1 ? token2 : token1

    verifyBoard()
  }else if(defaultValue[id] !== null && !winner){
    alert('Bloc already used')
  } 
}

Array.from(cases).forEach(element => {
  element.addEventListener('click', (e) => {
    onClick(e.target.id)
  })
})