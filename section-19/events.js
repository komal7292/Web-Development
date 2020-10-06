console.log('connected')

// Keypress Event
window.$('input').keypress(function () {
  console.log('PRESSED THE KEY.')
})

// Double Click Event
window.$('input').dblclick(function () {
  console.log('Double Clicked')
})

// Right Clicked Event
window.$('input').contextmenu(function () {
  console.log('Right Clicked')
})

// Mouse Enter Event
window.$('button').mouseenter(function () {
  window.$(this).css('color', 'red')
  console.log('Mouse Enter')
})

window.$('button').mouseleave(function () {
  window.$(this).css('color', 'blue')
  console.log('Mouse leave')
})

// on click Event
window.$('h1').on('click', function () {
  window.$('h1').css('color', 'red')
  console.log('click h1 and change color')
})
