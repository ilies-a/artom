import '../styles/globals.css'
import Layout from '../components/layout/layout.component'
import ReduxWrapper from '../components/redux-wrapper/redux-wrapper.component'

function MyApp({ Component, pageProps }) {
  return <ReduxWrapper><Layout><Component {...pageProps} /></Layout></ReduxWrapper>
}

export default MyApp
