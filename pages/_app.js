import '../styles/globals.css'
import Layout from '../components/layout/layout.component'
import ReduxWrapper from '../components/redux-wrapper/redux-wrapper.component'
import DataLoaderWrapper from '../components/data-loader-wrapper/data-loader-wrapper.component'
import ErrorBoundary from '../components/error-boundary/error-boundary.component';

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <ReduxWrapper>
        <DataLoaderWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DataLoaderWrapper>
      </ReduxWrapper>
    </ErrorBoundary>
  )
}

export default MyApp
