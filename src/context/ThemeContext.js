// theme context - toggle from light to dark theme
import React, { useState } from 'react'

// create a context
export const ThemeContext = React.createContext();

const themes = {
  lightTheme: '#000000',
  darkTheme: '#FFC0CB'
}

export const ThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState(themes.lightTheme)

  const toggleTheme = () => {
    setThemeType((themeType) => {
      // check curr theme - every other 
      if (themeType === themes.darkTheme) return (themes.lightTheme)
      else return (themes.darkTheme)
    })

    console.log(themeType, 'THEME TYPE FROM TOGGLE THEME HOOK')
  }

  return (
    // pass themeType and toggleTheme
    <ThemeContext.Provider value={{ themeType, toggleTheme }}>
      {/* content passed */}
      {children}
    </ThemeContext.Provider>
  )
}
