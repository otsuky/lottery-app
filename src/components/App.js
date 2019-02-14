import React from 'react'
import Footer from './Footer'
import PickupedItem from '../containers/PickupedItem'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div style={{ textAlign: "center" }}>
    <h1>発表の順番を決めるくん</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <PickupedItem />
  </div>
)

export default App
