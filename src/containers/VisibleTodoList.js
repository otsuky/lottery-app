import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
// import { VisibilityFilters } from '../actions'
import { RandomFilter } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case RandomFilter.SHOW_ALL:
      return todos
    case RandomFilter.SHOW_RANDOM:
      return todos.filter(t => t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
