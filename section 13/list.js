window.setTimeout(function () {
  var todos = ['BUY NEW PEN']
  var input = window.prompt('what would you like to do?')
  while (input !== 'quit') {
    if (input === 'list') {
      console.log(todos)
    } else if (input === 'new') {
      var newTodo = window.prompt('Enter New Todo')
      todos.push(newTodo)
    }
    input = window.prompt('what would you like to do?')
  }
  console.log('OK, YOU QUIT THE APP')
}, 500)
