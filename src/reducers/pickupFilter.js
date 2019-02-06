const pickupItem = (state = null, action) => {
  switch (action.type) {
    case 'PICKUP':
      return action.id
    default:
      return state
  }
}

export default pickupItem
