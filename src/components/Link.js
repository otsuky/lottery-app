import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

const Link = ({ active, children, onClick, list }) => (
  <Button variant="contained" color="secondary"
    onClick={e => onClick(list)}
    disabled = {false}
    style={{
      marginTop: '20px',
      marginLeft: '10px',
      marginRight: '10px'
    }}
  >
    {children}
  </Button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
}

export default Link
