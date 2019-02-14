import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Pickup = ({ todos }) => (
  <Paper
    style={{
      margin: '40px auto 0',
      padding: '15px',
      width: '320px',
      textAlign: 'left',
    }}
  >
    <span
      style={{
        fontSize: '0.8rem'
      }}
    >選ばれたのは...</span>
    {todos.map(todo => {
        return todo.pickuped ? <Typography
                                  style={{
                                    textAlign: 'center',
                                  }}
                                  variant="h4"
                                  key={todo.id}>
                                  {todo.text}
                                  <span
                                  style={{
                                    display: 'block',
                                    textAlign: 'right',
                                    fontSize: '0.8rem'
                                  }}
                                >でした</span>
                                </Typography>
                             : null;
      })
    }
  </Paper>

)

export default Pickup
