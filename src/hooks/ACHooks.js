// animal crossing hooks
import { useState, useEffect, useContext } from 'react'
import { getAllCharacters } from '../services/AC-api'

// context imports 
import { ThemeContext } from '../context/ThemeContext'

// pass pageCount to api fetch so it know which page to get
// pass pageCount as second arg to useEffect to it updates when pageCount changes
export const useAllCharacters = (pageCount) => {
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])

  useEffect(async () => {
    const characters = await getAllCharacters(pageCount)
    setCharacters(characters)
    setLoading(false)
  }, [pageCount])

  return {
    loading,
    characters
  }
}

// CONTEXT
export const useThemeToggle = () => {
  // get toggleTheme from ThemeContext.Provider values
  const { toggleTheme } = useContext(ThemeContext)

  return toggleTheme
}
