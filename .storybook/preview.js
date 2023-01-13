import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/styles/global'
import theme from '../src/styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
    </ThemeProvider>
  )
]
