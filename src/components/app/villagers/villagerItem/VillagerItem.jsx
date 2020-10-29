import React from 'react'
import PropTypes from 'prop-types'
import styles from './VillagerItem.css'

const VillagerItem = ({ name, image }) => {
  return (
    <div className={styles.villagerItem}>
      <img src={image} alt={name} className={styles.villagerImg}/>
      <figcaption>{name}</figcaption>
    </div>
  )
}

VillagerItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default VillagerItem
