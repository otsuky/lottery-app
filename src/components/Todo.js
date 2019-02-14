import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const Todo = ({ onClick, completed, text }) => (
  <TableRow >
    <TableCell
      style={{
        textAlign: 'center',
        fontSize: '1rem',
        maxWidth: '500px'
       }}
    >{text}</TableCell>
  </TableRow>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  pickuped: PropTypes.bool.isRequired
}

export default Todo
