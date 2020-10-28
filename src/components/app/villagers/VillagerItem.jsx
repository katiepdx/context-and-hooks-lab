import React from 'react'
import PropTypes from 'prop-types'

const VillagerItem = ({ name, image }) => {
  return (
    <>
      <img src={image} alt={name} />
      <figcaption>{name}</figcaption>
    </>
  )
}

VillagerItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default VillagerItem
