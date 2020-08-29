window.setTimeout(function () {
  var todos = ['BUY NEW PEN']

  var input = window.prompt('what would you like to do?')
  while (input !== 'quit') {
    if (input === 'list') {
      listTodos()
    } else if (input === 'new') {
      addTodos()
    } else if (input === 'delete') {
      deleteTodo()
    }
    input = window.prompt('what would you like to do?')
  }
  console.log('OK, YOU QUIT THE APP')

  function listTodos () {
    console.log('---------')
    todos.forEach(function (todo, p) {
      console.log(p + ': ' + todo)
    })
    console.log('---------')
  }
  function addTodos () {
    var newTodo = window.prompt('Enter New Todo')
    todos.push(newTodo)
    console.log('Added Todo')
  }
  function deleteTodo () {
    var index = window.prompt('Enter index of todo to delete')
    todos.splice(index, 1)
    console.log('Deleted Todo')
  }
}, 500)
