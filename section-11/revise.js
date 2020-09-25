var age = window.prompt('What is your age?')
if (age < 18) {
  window.alert('Sorry, You are not eligible to enter the venue')
} else if (age < 21) {
  window.alert('You can enter, but you cannot drink')
} else {
  window.alert('YEAH!!, please come and enjoy the party')
}
