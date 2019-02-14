import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => {
      return (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      )})

    }
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      pickuped: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
