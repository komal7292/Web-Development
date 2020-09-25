// var answer = prompt("Are you from India?");

// while (answer !== "yes") {
//    var answer = prompt("Are you from India?");
// }
// alert("Yes, I am from India.");

// version 2

var answer = window.prompt('Are you from India?')

while (answer.indexOf('yes') === -1) {
  var answer = window.prompt('Are you from India?')
}
window.alert('Yes, I am from India.')
