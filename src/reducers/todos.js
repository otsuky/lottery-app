const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          pickuped: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? {
          ...todo,
          completed: !todo.completed
        } : todo
      )
    case 'PICKUP':
      // stateの長さを測ってなんばんめがpickupかを決める(ランダムで)
      // MAPでif(id === pickupId) {フラグをtrue}にしてあげる
      return state.map(todo =>
        todo.id === action.id ? {
          ...todo,
          pickuped: true
        } : todo
      )
    case 'SORTING':
      // Fisher-Yatesアルゴリズムとかいうシャッフルするやつ

      const sortedList = state.slice();

      for (let i = sortedList.length - 1; i >= 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [sortedList[i], sortedList[rand]] = [sortedList[rand], sortedList[i]]
      }
      return sortedList
    default:
      return state
  }
}

export default todos
