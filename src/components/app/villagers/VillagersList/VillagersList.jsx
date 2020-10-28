import React from 'react'
import PropTypes from 'prop-types'
import { useAllCharacters } from '../../../../hooks/ACHooks'
import { Link } from 'react-router-dom'
import VillagerItem from '../villagerItem/VillagerItem'
import styles from './VillagerList.css'

const VillagersList = () => {
  const { loading, characters } = useAllCharacters()

  if (loading) return <h1>Still loading the AC Villagers List...</h1>

  const VillagersListEls = characters.map(villager => {
    return (
      <div key={villager.name} >
        <Link to={`/details/${villager._id}`}>
          <VillagerItem {...villager} />
        </Link>
      </div>
    )
  })

  return (
    <>
      <div className={styles.allVillagers}>
        {VillagersListEls}
      </div>
    </>
  )
}


export default VillagersList
