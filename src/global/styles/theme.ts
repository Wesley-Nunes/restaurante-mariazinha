import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme(
  { config },
  {
    colors: {
      primary: {
        livelyYellow: '#ffeab4'
      },
      secondary: {
        sanguineBrown: '#8c403a'
      },
      background: {
        cocoaBrown: '#1d1810',
        darkBrown: '#201d17'
      }
    }
  }
)

export default theme
