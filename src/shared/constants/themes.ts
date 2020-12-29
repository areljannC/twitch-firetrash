export const DARK_THEME = 'DARK_THEME'
export const LIGHT_THEME = 'LIGHT_THEME'

const font = `'Roboto', sans-serif`

const fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '48px'] = [
  '12px',
  '14px',
  '16px',
  '20px',
  '24px',
  '32px',
  '48px'
]

const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700
}

const lineHeights = {
  body: 1.6,
  heading: 1.125,
}

const space: ['0px', '4px', '8px', '16px', '32px', '64px', '128px', '256px', '512px'] = [
  '0px',
  '4px',
  '8px',
  '16px',
  '32px',
  '64px',
  '128px',
  '256px',
  '512px'
]

const borderWidth  = '2px'
const borderRadius = '4px'

// Breakpoints are based on this article:
// https://jsramblings.com/how-to-use-media-queries-with-styled-components/
const breakpoints = {
  mobileSmall: `(min-width: 320px)`,
  mobileMedium: `(min-width: 375px)`,
  mobileLarge: `(min-width: 425px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`,
  laptopLarge: `(min-width: 1440px)`,
  desktop: `(min-width: 2560px)`,
  desktopLarge: `(min-width: 2560px)`,
}

const baseTheme = {
  font,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  borderWidth,
  borderRadius,
  breakpoints
}

export const darkTheme = {
  ...baseTheme,
  colors: {
    text: '#fff',
    background: '#060606',
    primary: '#3cf',
    secondary: '#e0f',
    muted: '#191919',
    highlight: '#29112c',
    gray: '#999',
    purple: '#c0f'
  }
}

export const lightTheme = {
  ...baseTheme,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    highlight: '#29112c',
    gray: '#999',
    purple: '#c0f'
  }
}
