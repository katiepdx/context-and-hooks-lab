// toggle button
import React from 'react'
import styles from './Header.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <button onClick={() => console.log('hi')}>Toggle</button>
    </div>
  )
}

export default Header
