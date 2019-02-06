import React from 'react'
import FilterLink from '../containers/FilterLink'
import { RandomFilter } from '../actions'

const Footer = () => (
  <div>
    <FilterLink filter={ RandomFilter.SHOW_RANDOM } >抽選</FilterLink>
    {/* <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink> */}
    {/* <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink> */}
    {/* <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink> */}
  </div>
)

export default Footer
