import '../styles/pico_scss/pico.scss'
import "../libs/thema-switer"
import type { AppProps } from 'next/app'
import Header from "../components/Header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Header />
          <main className="container">
              <Component {...pageProps} />
          </main>
      </>
  )
}

export default MyApp
