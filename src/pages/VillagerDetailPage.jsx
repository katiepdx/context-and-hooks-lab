// detail page for single villager

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
// ask for info from global state - ThemeContext
import { ThemeContext } from '../context/ThemeContext'

const VillagerDetailPage = () => {
  // get the themeType off of theme context (from value)
  const { themeType } = useContext(ThemeContext)

  console.log(themeType, 'THEME TYPE IN ALL VILLAGERS PAGE')

  return (
    <div style={{ backgroundColor: themeType }}>
      VillagerDetailPage
    </div>
  )
}

VillagerDetailPage.propTypes = {

}

export default VillagerDetailPage
