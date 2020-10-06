console.log('I learn jQuery!!!!!')

// Clicked on h1
window.$('h1').click(function () {
  window.alert('You Clickedd The H1!!')
})

// Any button clicked
window.$('button').click(function () {
  var text = window.$(this).text()
  console.log('You Clicked ' + text)
  window.$(this).css('background', 'red')
  console.log('Booooyyaaaaaahhhh')
})
