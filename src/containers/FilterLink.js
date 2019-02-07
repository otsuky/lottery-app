import { connect } from 'react-redux'
import Link from '../components/Link'
import { pickupItem } from '../actions'
import { randomSort } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.pickupFilter,
  list: state.todos ? state.todos : null
})


const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: todos => {
    switch (ownProps.randomType) {
      case 'pickup':
        const pickupId = Math.floor(Math.random() * todos.length);

        dispatch(pickupItem(pickupId));
        break;
      case 'sort':
        dispatch(randomSort());
        break;
      default:
        break;
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
