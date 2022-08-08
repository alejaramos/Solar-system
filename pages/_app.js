import '../styles/globals.css'
import { ThemeProvider, CSSReset } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return  <Component {...pageProps} />
}

export default MyApp
