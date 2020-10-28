// home page - list all villagers here
// pagination prev and next button

import React, { useState } from 'react'
import VillagersList from '../components/app/villagers/VillagersList/VillagersList'
import PropTypes from 'prop-types'

const AllVillagersPage = () => {
  // set page count 
  const [pageCount, setPageCount] = useState(1)

  return (
    <div>
      <div>
        <button onClick={() => setPageCount((pageCount) => pageCount - 1)}>Prev</button>
        <button onClick={() => setPageCount((pageCount) => pageCount + 1)}>Next</button>
      </div>
      <h1>Animal Crossing Villagers</h1>
      <VillagersList pageCount={pageCount} />
    </div>
  )
}

AllVillagersPage.propTypes = {
  pageCount: PropTypes.number
}

export default AllVillagersPage
