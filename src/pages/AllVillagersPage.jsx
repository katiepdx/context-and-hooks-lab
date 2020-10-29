// home page - list all villagers here
// pagination prev and next button

import React, { useState, useContext } from 'react'
import VillagersList from '../components/app/villagers/VillagersList/VillagersList'
import PropTypes from 'prop-types'
// ask for info from global state - ThemeContext
import { ThemeContext } from '../context/ThemeContext'

const AllVillagersPage = () => {
  // set page count 
  const [pageCount, setPageCount] = useState(1)

  // get the themeType off of theme context (from value)
  const { themeType } = useContext(ThemeContext)

  console.log(themeType, 'THEME TYPE IN ALL VILLAGERS PAGE')

  return (
    <div style={{ backgroundColor: themeType }}>
      <div>
        <button onClick={() => setPageCount((pageCount) => pageCount - 1)}>Prev</button>
        <button onClick={() => setPageCount((pageCount) => pageCount + 1)}>Next</button>
      </div>
      <h1>Animal Crossing Villagers</h1>
      <VillagersList pageCount={pageCount} />
    </div >
  )
}

AllVillagersPage.propTypes = {
  pageCount: PropTypes.number
}

export default AllVillagersPage
