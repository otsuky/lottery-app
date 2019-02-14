import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

const TodoList = ({ todos, toggleTodo }) => (
  <Table
    style={{
      width: '400px',
      margin: '20px auto 0'
    }}
  >
    <TableBody>
      {todos.map(todo => {
        return (
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        )})

      }
    </TableBody>
  </Table>
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
