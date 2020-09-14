var colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
]
var squares = document.querySelectorAll('.square')
var pickedColor = colors[4]
var colorDisplay = document.getElementById('colorDisplay')

colorDisplay.textContent = pickedColor

for (var i = 0; i < squares.length; i++) {
// add initial colors to squares
  squares[i].style.background = colors[i]
  // add click listeners to squares
  squares[i].addEventListener('click', function () {
    // grab color of clicked square
    var clickedColor = this.style.background
    // complare colors to picked colors
    if (clickedColor === pickedColor) {
      window.alert('correct!!')
    } else {
      window.alert('wrong!!!')
    }
  })
}
