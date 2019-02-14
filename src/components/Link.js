import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick, list }) => (
  <button
    onClick={e => onClick(list)}
    disabled = {false}
    style={{
      marginLeft: '10px'
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
}

export default Link
