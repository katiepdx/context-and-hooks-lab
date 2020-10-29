// toggle button
import React from 'react'
// import custom toggle theme hook from achooks
import { useThemeToggle } from '../../../hooks/ACHooks'
import styles from './Header.css'

const Header = () => {
  // call hook in functional component
  const toggleTheme = useThemeToggle()

  return (
    <div className={styles.header}>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default Header
