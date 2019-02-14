import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div>
    <FilterLink randomType="sort">ランダムに並び替え</FilterLink>
    <FilterLink randomType="pickup">抽選</FilterLink>
  </div>
)

export default Footer
