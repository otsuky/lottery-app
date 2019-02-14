import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div
      style={{
        marginTop: '30px'
      }}
    >
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log(input);
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <Input
          inputRef={node => (input = node)}
          style={{ marginRight: '30px' }}
        />
        <Button type="submit" variant="outlined">追加</Button>

      </form>
    </div>
  )
}

export default connect()(AddTodo)
