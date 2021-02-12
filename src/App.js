import { useState } from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'

function App() {
  const [todos, setTodos] = useState([])

  function toogleTodo(id) {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(name) {
    setTodos(todos.concat([{
      id: Date.now(),
      name,
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>
          React tutorial
        </h1>
        <AddTodo onCreate={addTodo}></AddTodo>

        <TodoList todos={todos} onToogle={toogleTodo}></TodoList>
      </div>
    </Context.Provider>
  );
}

export default App;
