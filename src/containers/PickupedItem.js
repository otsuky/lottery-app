import { connect } from 'react-redux'
import Pickup from '../components/Pickup'

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(
  mapStateToProps
)(Pickup)
