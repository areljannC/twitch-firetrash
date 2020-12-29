import React, { ReactNode, MouseEvent, FC, useState, createContext } from 'react'
import { ThemeProvider as SCTP, createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { DARK_THEME, LIGHT_THEME, darkTheme, lightTheme } from '../constants'

// Types
type ThemeContextType = {
  currentTheme: string
  toggleTheme: (event: MouseEvent<HTMLButtonElement>) => void
}

type ThemeContextProviderPropsType = {
  children?: ReactNode
}

// Context
export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: DARK_THEME,
  toggleTheme: () => {}
})

// Component
export const ThemeContextProvider: FC<ThemeContextProviderPropsType> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(DARK_THEME)

  const toggleTheme = () => {
    switch (currentTheme) {
      case DARK_THEME:
        setCurrentTheme(LIGHT_THEME)
        break
      case LIGHT_THEME:
      default:
        setCurrentTheme(DARK_THEME)
        break
    }
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <GlobalStyle />
      <SCTP
        theme={
          currentTheme === DARK_THEME
            ? darkTheme
            : currentTheme === LIGHT_THEME
            ? lightTheme
            : darkTheme
        }
      >
        {children}
      </SCTP>
    </ThemeContext.Provider>
  )
}

// Styles
const GlobalStyle = createGlobalStyle`
  ${reset}
`

// Display Name
ThemeContext.displayName = `ThemeContext`
ThemeContextProvider.displayName = `ThemeContextProvider`
