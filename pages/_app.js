import '../styles/globals.css'
import Layout from '../components/layout/layout.component'
import ReduxWrapper from '../components/redux-wrapper/redux-wrapper.component'
import PreloaderWrapper from '../components/preloader-wrapper/preloader-wrapper.component'

function MyApp({ Component, pageProps }) {
  return (
    <ReduxWrapper>
      <PreloaderWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PreloaderWrapper>
    </ReduxWrapper>
  )
}

export default MyApp
