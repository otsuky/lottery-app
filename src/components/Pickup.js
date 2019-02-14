import React from 'react'

const Pickup = ({ todos }) => (
  <div>
    {todos.map(todo => {
        return todo.pickuped ? <div key={todo.id}>{todo.text}</div> : null;
      })
    }
  </div>

)

export default Pickup
