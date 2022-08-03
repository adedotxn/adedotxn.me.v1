import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts'
import { UtilityProvider } from '../utils/context'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UtilityProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UtilityProvider>
  )
}

export default MyApp
