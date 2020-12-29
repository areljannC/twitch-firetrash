import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string
      background: string
      primary: string
      secondary: string
      highlight: string
      purple: string
      muted: string
      gray: string
    }

    font: string
    fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '48px']
    fontWeights: {
      body: number
      heading: number
      bold: number
    }
    lineHeights: {
      body: number
      heading: number
    }

    space: ['0px', '4px', '8px', '16px', '32px', '64px', '128px', '256px', '512px']

    borderWidth: string
    borderRadius: string

    breakpoints: {
      mobileSmall: string
      mobileMedium: string
      mobileLarge: string
      tablet: string
      laptop: string
      laptopLarge: string
      desktop: string
      desktopLarge: string
    }
  }
}
