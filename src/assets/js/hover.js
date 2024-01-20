
Array.from(cases).forEach(element => {
  
  element.addEventListener('mouseenter', function(){
    element.classList.add(`${current}-current`)
  })

  element.addEventListener('mouseleave', function(){
    element.classList.remove('o-current', 'x-current')
  })
});