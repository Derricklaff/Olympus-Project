// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config, styles: {
    global: (props) => ({
      'html, body': {
        fontFamily: 'Roboto Mono, monospace',
      },
      'h1, h2, h3, h4': {
        fontFamily: 'Roboto Mono, monospace',
      }
    }),
  }  
})

export default theme