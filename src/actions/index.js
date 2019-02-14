let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

// 使わなくなる予定
// export const setVisibilityFilter = filter => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })

export const pickupItem = id => ({
  type: 'PICKUP',
  id
})

export const randomSort = () => ({
  type: 'SORTING',
})


export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const ShowList = {
  type: 'SHOW_LIST',
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const RandomFilter = {
  SHOW_RANDOM: 'RANDOM_FILTER',
  SHOW_ALL: 'RANDOM_ALL',
}
