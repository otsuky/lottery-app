import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import { pickupFilter } from '../actions'
import todos from '../reducers/todos';

const getRandomId = (state) => {
  const randomId = Math.floor( Math.random() * state.todos.length);
  console.log(state);
  console.log(randomId);
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.pickupFilter,
  pickedUpId: getRandomId(state) || null
})


const mapDispatchToProps = (dispatch, ownProps) => ({
  // onClick: () => dispatch(pickupFilter(ownProps.randomId))
  onClick: () => {
    dispatch(pickupFilter(ownProps.randomId))
  }

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
